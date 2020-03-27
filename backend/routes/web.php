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

Route::get('/samar', 'SendDataController@messageTosamar');
Route::get('/bassel', 'SendDataController@messageTobassel');
Route::get('/rania', 'SendDataController@messageToRania');


Route::get('/', function(){
    return view('welcome');
});


