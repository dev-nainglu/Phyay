<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AppointmentResource\Pages;
use App\Filament\Resources\AppointmentResource\RelationManagers;
use App\Models\Appointment;
use Filament\Forms;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AppointmentResource extends Resource
{
    protected static ?string $model = Appointment::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

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
                DateTimePicker::make('appointment_date')
                    ->required()
                    ->minDate(now())
                    // default is 1 day from now 3pm
                    ->default(now()->addDay()->setHour(15)->setMinute(0)->setSecond(0))
                    ->placeholder('YYYY-MM-DD HH:mm')
                    ->label('Appointment Date')
                    ->native(false),
                Select::make('status')
                    ->options([
                        'upcoming' => 'Upcoming',
                        'completed' => 'Completed',
                        'cancelled' => 'Cancelled',
                    ])
                    ->default('upcoming')
                    ->name(__('Status'))
                    ->required()
                    ->searchable()
                    ->native(false),
                TextInput::make('price')
                    ->numeric()
                    ->minValue(0)
                    ->step(1000)
                    ->required()
                    ->placeholder(__('Price'))
                    ->prefix('MMK'),

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
                TextColumn::make('appointment_date')
                    ->dateTime()
                    ->sortable(),
                TextColumn::make('price')
                    ->sortable()
                    ->money('mmk'),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
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