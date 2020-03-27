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

//Route::get('/samar', 'SendDataController@messageTosamar');
//Route::get('/rania', 'SendDataController@messageToRania');
 Route::get('/samar',function(){
    return response()->json([
              'name' => 'samar',
              'message' => 'you can do this, I trust you and I know you can'
          ]);
  });
  Route::get('/rania',function(){
    return response()->json([
              'name' => 'rania',
              'message' => 'you can do this, I trust you and I know you can'
          ]);
  });



Route::get('/', function(){
    return view('welcome');
});

