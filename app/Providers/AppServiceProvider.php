<?php

namespace App\Providers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\ServiceProvider;

use Filament\Support\Facades\FilamentIcon;
use Illuminate\Support\Facades\Auth;
use Opcodes\LogViewer\Facades\LogViewer;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        Model::unguard();
        FilamentIcon::register([
            'panels::pages.dashboard.navigation-item' => 'icon-home',
        ]);

        LogViewer::auth(function ($request) {

            $authenticationHasPassed = false;

            if ($request->header('PHP_AUTH_USER', null) && $request->header('PHP_AUTH_PW', null)) {
                $username = $request->header('PHP_AUTH_USER');
                $password = $request->header('PHP_AUTH_PW');

                if ($username === config('log-viewer.basic_auth.username') && $password === config('log-viewer.basic_auth.password')) {
                    $authenticationHasPassed = true;
                }
            }

            if ($authenticationHasPassed === false) {
                Auth::onceBasic();
            }
            
            return $authenticationHasPassed;
        });
    }
}