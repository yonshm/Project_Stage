<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Ville extends Model
{
    public function zone(){
        return $this->belongsTo(Zone::class, 'id_zone');
    }

    public function colis()
    {
    return $this->hasMany(Coli::class, 'id_ville', 'id'); // Adjust foreign key names if different
    }

}
