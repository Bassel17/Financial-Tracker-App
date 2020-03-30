<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class UserController extends Controller
{
    public function addUser(Request $request){
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = $request->password;
        $user->currency_id = $request->currency;
        $user->save();
        return response()->json($request);
    }

    public function getAllUsers(){
        $users = User::all();
        return response()->json($users);
    }

    public function getUserWithID($id){
        $user = User::where('user_id',$id)->get();
        return response()->json($user);
    }
}
