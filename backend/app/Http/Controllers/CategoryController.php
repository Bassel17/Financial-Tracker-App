<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Category;

class CategoryController extends Controller
{

    public function getUserIncomeCategories($id){
        $categories = Category::whereRaw("user_id = ".$id." and type = 'income'")->get();

        return response()->json($categories,200);
    }

    public function getUserExpenseCategories($id){
        $categories = Category::whereRaw("user_id = ".$id." and type = 'expense'")->get();

        return response()->json($categories,200);
    }

    public function getUserCategoryWithID($id,$category_id){
        $category = Category::whereRaw("user_id = ".$id." and category_id = ".$category_id."")->get();

        return response()->json($category,200);
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
