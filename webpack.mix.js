const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.browserSync({ 
    proxy: 'cryptoboard.test',
    socket: {
      domain: 'localhost:3000'
    }
  });

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/custom.scss', 'public/css')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
    ]);