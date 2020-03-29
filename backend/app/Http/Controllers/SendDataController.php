<?php
namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Http\Model\ModelUsersModel;
use Validator;

class SendDataController extends Controller {

    public function ModelUsersModel()
    {
       return respose ()->json (ModelUsersModel::get(),200);
    }


    public function UsersByID($id)
    {
       $Users = ModelUsersModel::find($id);
       if(is_null($Users)){
        return response()->json(["message"=>"Record not found"],404);
       }
       return response()->json(ModelUsersModel::find($id),200);
    }


    public function usersControllersave(Request $request)
    {
        $rules = [
           'name'=>'required|min:5',
           'email'=>'required|min:8|max:10'
        ];
           $validator = Validator::make($request->all(),$rules);
             /* if($validator->fails()){
                 return response ()->($validator->errors(),404);
          } */
         $Users = ModelusersModel::create($request->all());
          return response()->json($Users,201);
    }


    public function usersControllerUpdate(Request $request , $is)
    {
       $Users->Update($request->all());
       if(is_null($Users)){
        return response()->json(["message"=>"Record not found"],404);
       }
       return response()->json($Users,200);
    }


     public function usersControllerDelete(Request $request ,$id)
     {
        $Users->delete();
        if(is_null($Users)){
            return response()->json(["message"=>"Record not found"],404);
        }
        return response()->json(null,204);
     }













   /*  public function messageTosrania()
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
 */

}


?>
