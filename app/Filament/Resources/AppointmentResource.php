<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AppointmentResource\Pages;
use App\Filament\Resources\AppointmentResource\RelationManagers;
use App\Models\Appointment;
use DanHarrin\LivewireRateLimiting\Tests\Component;
use Filament\Tables\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Closure;
use Filament\Forms\Get;
use Livewire\Component as Livewire;

class AppointmentResource extends Resource
{
    protected static ?string $model = Appointment::class;

    protected static ?string $navigationIcon = 'icon-appointment';

    // hide create button
    public static function canCreate(): bool
    {
        return true;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                //
                Select::make('doctor_id')
                    ->options(
                        \App\Models\Doctor::all()
                            ->pluck('name', 'id')
                            ->toArray()
                    )
                    ->name(__('Doctor'))
                    ->required()
                    ->searchable()
                    ->native(false),
                Select::make('patient_id')
                    ->options(
                        \App\Models\Patient::all()
                            ->pluck('name', 'id')
                            ->toArray()
                    )
                    ->name(__('Patient'))
                    ->required()
                    ->searchable()
                    ->native(false),
                DateTimePicker::make('appointment_start_date')
                    ->required()
                    // default is 1 day from now 3pm
                    ->default(now()->addDay()->setHour(15)->setMinute(0)->setSecond(0))
                    ->placeholder('YYYY-MM-DD HH:mm')
                    ->label('Appointment Start Time')
                    ->native(false),
                TextInput::make('duration')
                    ->required()
                    ->numeric()
                    ->minValue(0)
                    ->maxValue(3)
                    ->default(1)
                    ->placeholder(__('Duration'))
                    ->suffix(__('hours')),
                Select::make('status')
                    ->options(
                        [
                            'upcoming' => 'Upcoming',
                            'completed' => 'Completed',
                            'cancelled' => 'Cancelled',
                        ]
                    )
                    ->rules(
                        [
                            // custom validation rule
                            // if appointment_start_date is in the past, status must be completed or cancelled
                            fn(Get $get): Closure => function (string $attribute, $value, Closure $fail) use ($get) {
                                if ($get('appointment_start_date') < now() && !in_array($value, ['completed', 'cancelled'])) {
                                    $fail(__('If appointment start date is in the past, status must be completed or cancelled.'));
                                }
                            },
                            // if appointment_start_date is in the future, status must be upcoming
                            fn(Get $get): Closure => function (string $attribute, $value, Closure $fail) use ($get) {
                                if ($get('appointment_start_date') > now() && $value !== 'upcoming') {
                                    $fail(__('If appointment start date is in the future, status must be upcoming.'));
                                }
                            },
                        ]
                    )
                    ->default('upcoming')
                    ->name(__('Status'))
                    ->required()
                    ->searchable()
                    ->native(false),
                TextInput::make('meeting_link')
                    ->placeholder(__('Meeting Link'))
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('doctor.name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('patient.name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('appointment_start_date')
                    ->dateTime()
                    ->sortable()
                    ->label('Start Time'),
                TextColumn::make('duration')
                    ->sortable()
                    // conditional suffix
                    ->suffix(fn(Appointment $appointment) => $appointment->duration > 1 ? ' hours' : ' hour'),
                TextColumn::make('price')
                    ->sortable()
                    ->money('mmk'),
            ])
            ->filters([
                //
            ])
            ->actions([
                // Tables\Actions\EditAction::make(),
                // zoom link button
                Action::make('Meeting Link')
                    ->label('Meeting Link')
                    ->icon('icon-appointment')
                    ->url(fn(Appointment $appointment) => $appointment->meeting_link)
                    ->openUrlInNewTab(),
            ])
            ->recordUrl(fn() => null)
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ])
            ->emptyStateActions([
                Tables\Actions\CreateAction::make(),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAppointments::route('/'),
            'create' => Pages\CreateAppointment::route('/create'),
            'edit' => Pages\EditAppointment::route('/{record}/edit'),
        ];
    }
}