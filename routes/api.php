<?php

use Illuminate\Http\Request;

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

Route::get('products', function () {
    return response(Product::all(),200);
});
Route::post('auth', 'Auth\LoginController@login');
Route::get('auth', 'Auth\LoginController@status');