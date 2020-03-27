<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

class SendDataController extends Controller {

    public function messageToBassel()
    {
        return response()->json([
            'name' => 'Bassel',
            'message' => 'you are cool'
        ]);
    }

    public function messageTosrania()
    {
        return response()->json([
            'name' => 'samar',
            'message' => 'you can do this, I trust you and I know you can'
        ]);
    }


}


?>
