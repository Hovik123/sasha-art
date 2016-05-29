<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/
Route::group(["prefix"=>'admin'],function(){
    Route::get('/', 'HomeController@index');
});
Route::group(["prefix"=>'dashboard'],function(){
    Route::get('/', 'HomeController@dashboard');
});




//Route::auth();

/*Route::get('/home', 'HomeController@index');*/
Route::post('/login', 'HomeController@doLogin');
Route::post('/get-token', 'HomeController@camperToken');


Route::group(["middleware"=>'auth'],function(){
    Route::get('/logout', 'HomeController@doLogOut');
});