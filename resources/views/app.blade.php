<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        <script type="text/javascript" src="https://d1juecpbgfpwl3.cloudfront.net/js/wavemoney.min.js"></script>
        <script>
        // Wait for the DOM to be ready
        window.flutter_inappwebview = {{ config('app.env') == 'local' }}
        document.addEventListener('DOMContentLoaded', function () {
            try {
            const sdk = new WaveJsSDK();
            sdk.init({ clientId: 'wave-money' });
            } catch (e) {
            console.log(e);
            }
        });
        </script>
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])

        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
