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
Route::post('/users/signup','UserController@addUser');
Route::get('/users','UserController@getAllUsers');
Route::get('/users/{id}','UserController@getUserWithID');
Route::post('/categories','CategoryController@addCategory');
Route::put('/categories','CategoryController@updateCategory');
Route::get('/users/{id}/income/categories','CategoryController@getUserIncomeCategories');
Route::get('/users/{id}/expense/categories','CategoryController@getUserExpenseCategories');
Route::get('/users/{id}/categories/{category_id}','CategoryController@getUserCategoryWithID');

Route::get('/', function(){
    return view('welcome');
});


