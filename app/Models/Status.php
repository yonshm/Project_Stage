<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Status extends Model
{
    public function colis(){
        return $this->belongsTo(Coli::class);
    }
}
