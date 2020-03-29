<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::get(‘users’,‘users\usersController@users’);


 Route::get('users/{id}', 'SenDataController@UsersByID(&id)');
// Route::post('usersController', 'Users\usersControllersave');
// Route::put('usersController\{$id}', 'Users\usersControllerUpdate');
// Route::delete('usersController\{$id}', 'Users\usersControllerDelete');

