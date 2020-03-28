<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ModelUsersModel extends Model
{
    protected $table = Users;
    public $timestamps = false;
    protected $fillable = 
    [
        'id',
        'name',
        'email',
        'password',
        'iamge',
        'curencies'
    ];
}
