<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Transaction;

class TransactionController extends Controller
{


    public function getUserTransactionsWithID($id){
        $transactions = Transaction::where('user_id',$id)->get();
        if($transaction == 0){
            return response()->json(['message'=> "transaction not found"],404);
        }
        return response()->json($transactions,200);
    }


    public function addTransaction(Request $request){
        $transaction = new Transaction;
        $transaction->title = $request->title;
        $transaction->description = $request->description;
        $transaction->amount = $request->amount;
        $transaction->interval = isset($request->interval) || null;
        $transaction->type = $request->type;
        $transaction->start_date = date('Y-m-d h:i:s', strtotime($request->start_date));
        $end_date_string = isset($request->end_date) ? date('Y-m-d h:i:s', strtotime($request->end_date)) : null;
        $transaction->end_date = $end_date_string;
        $transaction->category_id = $request->category_id;
        $transaction->user_id = $request->user_id;
        $transaction->currency_id = $request->currency_id;
        $result=$transaction->save();
        if($result == 0){
            return response()->json(['message'=>'transaction not added'],404);
        }
        return response()->json(['message'=>'successfuly created transaction'],201);
    }

    public function updateTransaction(Request $request){
        $id = $request->transaction_id;
        $title = $request->title;
        $description = $request->description;
        $amount = $request->amount;
        $interval = isset($request->interval) ? $request->interval:null;
        $start_date = date('Y-m-d h:i:s', strtotime($request->start_date));
        $end_date_string = isset($request->end_date) ? date('Y-m-d h:i:s', strtotime($request->end_date)) : null;
        $end_date = $end_date_string ;
        $currency_id = $request->currency_id;
        $transaction = Transaction::where('transaction_id',$id)->update([
            'title' => $title,
            'description' => $description,
            'amount' => $amount,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'currency_id' => $currency_id,
            'interval' => $interval
        ]);
        if($transaction == 0){
            return response()->json(['message'=>'user does not exist'],404);
        }
        return response()->json(['message'=>'successfully updated'],201);
    }

    public function deleteTransaction(Request $request){
        $id = $request->transaction_id;
        $transaction = Transaction::where('transaction_id',$id)->delete();
        if($transaction == 0){
            return response()->json(['message'=>'user does not exist'],404);
        }
        return response()->json(['message'=>'successfully deleted'],200);
    }

    public function updateTransaction(Request $request){
        $id = $request->id;
        $transactionValues = json_decode(Transaction::where('transaction_id',$id)->get())[0];
        print_r($transactionValues->transaction_id);
        $title = isset($request->title ) ? : $request->title || $transactionValues->title;
        $description = $request->description || $transactionValues->transaction_id;
        $amount = $request->amount || $transactionValues->amount;
        $interval = $request->interval || $transactionValues->interval;
        $start_date = date('Y-m-d h:i:s', strtotime($request->start_date));
        $end_date = date('Y-m-d h:i:s', strtotime($request->end_date));
        $currency_id = $request->currency_id;
        $transaction = Transaction::where('transaction_id',$id)->update([
            'title' => $title,
            'description' => $description,
            'amount' => $amount,
            'interval' => $interval,
            'start_date' => $start_date,
            'end_date' => $end_date,
            'currency_id' => $currency_id
        ]);
        return response()->json(['message'=>'successfuly updated transaction'],201);
    }
}
