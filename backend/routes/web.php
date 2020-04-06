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


Route::post('/signup','UserController@addUser');
Route::post('/login','UserController@login');
Route::post('/logout','UserController@logout');
Route::get('/currencies','CurrencyController@getAllCurrencies');


Route::group(['middleware'=>['jwt.verify']],function (){
    Route::get('/currencies/{id}','CurrencyController@getCurrencyWithID');
    Route::post('/categories','CategoryController@addCategory');
    Route::put('/categories','CategoryController@updateCategory');
    Route::delete('/categories','CategoryController@deleteCategory');
    Route::get('/users/{id}/income/categories','CategoryController@getUserIncomeCategories');
    Route::get('/users/{id}/expense/categories','CategoryController@getUserExpenseCategories');
    Route::get('/users/{id}/categories/{category_id}','CategoryController@getUserCategoryWithID');
    Route::post('/transactions','TransactionController@addTransaction');
    Route::put('/transactions','TransactionController@updateTransaction');
    Route::delete('/transactions','TransactionController@deleteTransaction');
    Route::get('/users/{id}/transactions','TransactionController@getUserTransactionsWithID');
});


