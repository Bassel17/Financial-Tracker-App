<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

class SendDataController extends Controller {

    public function messageToBassel($message)
    {
        return response()->json([
            'name' => 'Bassel',
            'message' => $message
        ]);
    }

    public function messageTorania()
    {
        return response()->json([
            'name' => 'rania',
            'message' => 'you can do this, I trust you and I know you can'
        ]);
    }

    public function messageTosamar(){
        return response()->json([
            'name' => 'samar',
            'message' => 'we love you Samar'
        ]);
  }


}


?>
