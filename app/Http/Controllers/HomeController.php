<?php

namespace App\Http\Controllers;

use App\Http\Requests;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Guard $guard)
    {
        if($guard->check()){
            return redirect('/dashboard');
        }
        return view('front');
    }


    public function dashboard(Guard $guard){
        if($guard->check())
        return view("backend");

        return redirect("/admin");
    }

    /**
     * user login
     * @param Request $request
     * @param Guard $guard
     * @return \Illuminate\Http\JsonResponse
     */
    public function doLogin(Request $request,Guard $guard)
    {

        $rules = array(
            'email' => 'required|email',
            'password' => 'required|alphaNum|min:3'
        );
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(["status"=>"error","response"=>$validator->errors()],421);
        } else {
            // create our user data for the authentication
            $userdata = array(
                'email' => $request->get('email'),
                'password' => $request->get('password')
            );
            // attempt to do the login
            if ($guard->attempt($userdata)) {
                return response()->json(["status"=>"success","response"=>["token"=>$guard->user()->remember_token]],200);
            } else {
                return response()->json(["status"=>"error","response"=>["message"=>"User not found"]],421);
            }
        }
    }

    /**
     * user logout
     * @param Guard $guard
     * @return \Illuminate\Http\JsonResponse
     */
    public function doLogout(Guard $guard){
        $guard->logout();
        return response()->json(["status"=>"success","response"=>["message"=>"Successfully logout "]],200);
    }

    /**
     * camper auth user token with session token
     * @param Request $request
     * @param Guard $guard
     * @return \Illuminate\Http\JsonResponse
     */
    public function camperToken(Request $request,Guard $guard){
        if($guard->check()){
            if($guard->user()->remember_token == $request->get("token")){
                return response()->json(["status"=>"success"],200);
            }
            return response()->json(["status"=>"error"],422);
        }

        return response()->json(["status"=>"error"],422);
    }
}
