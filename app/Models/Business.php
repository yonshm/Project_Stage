<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Business extends Model
{
    public function client(){
        return $this->belongsTo(Client::class, 'id_client');
    }

    
}
