<?php

use Illuminate\Support\Facades\Route;

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


Route::get('/currencies','CurrencyController@getAllCurrencies');
Route::get('/currencies/{id}','CurrencyController@getCurrencyWithID');

Route::get('/', function(){
    return view('welcome');
});


