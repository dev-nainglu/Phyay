<?php

namespace App\Filament\Resources;

use App\Filament\Resources\DoctorResource\Pages;
use App\Filament\Resources\DoctorResource\RelationManagers;
use App\Models\Doctor;
use Filament\Forms;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class DoctorResource extends Resource
{
    protected static ?string $model = Doctor::class;

    protected static ?string $navigationIcon = 'icon-doctor';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                // name
                TextInput::make('name')
                    ->autofocus()
                    ->required()
                    ->maxLength(255)
                    ->placeholder(__('Name')),
                // category select id display name
                Select::make('category_id')
                    ->options(
                        \App\Models\Category::all()
                            ->pluck('name', 'id')
                            ->toArray()
                    )
                    ->name(__('Category'))
                    ->required()
                    ->searchable()
                    ->native(false),
                // experience
                TextInput::make('experience')
                    ->required()
                    ->numeric()
                    ->minValue(0)
                    ->placeholder(__('Experience'))
                    ->suffix(__('years')),
                // fee
                TextInput::make('fee')
                    ->numeric()
                    ->minValue(0)
                    ->step(1000)
                    ->required()
                    ->placeholder(__('Fee per Hour'))
                    ->prefix('MMK'),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                //
                TextColumn::make('name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('category.name')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('experience')
                    ->sortable()
                    ->suffix(' years'),
                TextColumn::make('fee')
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
            'index' => Pages\ListDoctors::route('/'),
            'create' => Pages\CreateDoctor::route('/create'),
            'edit' => Pages\EditDoctor::route('/{record}/edit'),
        ];
    }
}