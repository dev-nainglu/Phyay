<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;

class WaveAuthenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {

        $waveUser = $request->session()->get('waveUser');
        if($waveUser){
            Auth::login($waveUser);
            info('home user', [Auth::user()]);
        }
        
        if (! $request->expectsJson()) {
            return route('login');
        }
    }
}
