<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Category;

class CategoryController extends Controller
{

    public function getUserIncomeCategories($id){
        $categories = Category::where('user_id',$id)->where('type','income')->get();

        return response()->json($categories,200);
    }

    public function getUserExpenseCategories($id){
        $categories = Category::where('user_id',$id)->where('type','expense')->get();

        return response()->json($categories,200);
    }

    public function getUserCategoryWithID($id,$category_id){
        $category = Category::where('user_id',$id)->where('category_id',$category_id)->get();
        
        return response()->json($category,200); 
    }

    public function updateCategory(Request $request){
        $id = $request->id;
        $name = $request->name;
        $category = Category::where('category_id',$id)->update(['name' => $name]);
        return response()->json($category,201);
    }

    public function addCategory(Request $request){
        $category = new Category;
        $category->name = $request->name;
        $category->type = $request->type;
        $category->user_id = $request->user;
        $category->save();

        return response()->json($request);
    }
}
