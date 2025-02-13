<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BonDistribution extends Model
{
    protected $fillable = ['id_coli'];
    public $timestamps = false;
    
    public function coli(){
        return $this->hasMany(Coli::class, 'bon_Distribution');
    }

    public function zones()
    {
    return $this->hasManyThrough(
        Zone::class,    // Final model (Zone)
        Ville::class,   // Intermediate model (Ville)
        'id_ville',           // Foreign key on Ville (Coli->Ville)
        'id_zone',           // Foreign key on Zone
        'id',           // Local key on BonDistribution (to Coli)
        'zone'          // Local key on Ville (to Zone)
    );
    }
    public function livreur(){
        return $this->belongsTo(Utilisateur::class, 'id_livreur');
    }

}
