<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
    public function addUser(Request $request){
        $user = User::create([
            'name'=> $request->name,
            'email'=> $request->email,
            'password'=> $request->password,
            'currency_id'=>$request->currency_id
        ]);

        $token = auth()->login($user);

        return $this->respondWithToken($token);
    }

    public function login(){
        $credentials = request(['email','password']);

        if($token = auth()->attempt($credentials)){
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Unauthorized'],401);
    }

    public function logout(){
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out'],200);
    }

    protected function respondWithToken($token){

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 3600
        ],200);

    }
}
