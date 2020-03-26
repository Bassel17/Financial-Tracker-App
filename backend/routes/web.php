<?php

use Illuminate\Support\Facades\Route;
header('Content-type: application/json');

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/me', 'SendDataController@sendJSON');

Route::get('/', function () {
    return 'hello am web';
});