<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Transaction;

class TransactionController extends Controller
{


    public function getUserTransactionsWithID($id){
        $transactions = Transaction::where('user_id',$id)->get();

        return response()->json($transactions,200);
    }


    public function addTransaction(Request $request){
        $transaction = new Transaction;
        $transaction->title = $request->title;
        $transaction->description = $request->description;
        $transaction->amount = $request->amount;
        $transaction->interval = $request->interval;
        $transaction->type = $request->type;
        $transaction->start_date = date('Y-m-d h:i:s', strtotime($request->start_date));
        $transaction->end_date = date('Y-m-d h:i:s', strtotime($request->end_date));
        $transaction->category_id = $request->category_id;
        $transaction->user_id = $request->user_id;
        $transaction->currency_id = $request->currency_id;
        $result=$transaction->save();
        return response()->json(['message','successfuly created transaction'],201);
    }
}
