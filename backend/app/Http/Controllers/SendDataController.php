<?php 
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;

class SendDataController extends Controller {

    public function sendJSON()
    {
        return response()->json([
            'name' => 'Bassel',
            'status' => 200
        ]);
    }

}

?>