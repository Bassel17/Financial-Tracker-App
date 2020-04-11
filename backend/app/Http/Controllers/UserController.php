<?php

namespace App\Http\Controllers;
use App\Http\Requests\RegisterRequest;
use Illuminate\Http\Request;
use Exception;
use App\User;

class UserController extends Controller
{
    public function addUser(Request $request){
        try{
            $user = User::create([
                'name'=> $request->name,
                'email'=> $request->email,
                'password'=> $request->password,
                'currency_id'=>$request->currency_id
            ]);
    
            $token = auth()->login($user);
            $user_id = $user->id;
            return $this->respondWithToken($token,$user_id);
        }catch(Exception $e){
            return response()->json(['error'=>'user not added'],500);
        }
    }

    public function login(){
        try{
            $credentials = request(['email','password']);
            $user = User::where('email',$credentials['email'])->get();
            $user_id = $user[0]['user_id'];
            if($token = auth()->attempt($credentials)){
                return $this->respondWithToken($token,$user_id);
            }

            return response()->json(['error' => 'Unauthorized'],401);
        }catch(Exception $e){
            return response()->json(['error'=>'user not does not exist','status'=>404],404);
        }
    }

    public function logout(){
        try{
            auth()->logout();
            return response()->json(['message' => 'Successfully logged out',],200);
        }catch(Exception $e){
            return response()->json(['error' => 'did not log out, possible network error'],400);
        }
    }

    protected function respondWithToken($token,$id){

        return response()->json([
            'user_id' => $id,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 3600
        ],200);

    }
}
