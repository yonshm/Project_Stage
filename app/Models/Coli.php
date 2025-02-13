<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Coli extends Model
{
    public $timestamps = false;
    public function ville(){
        return $this->belongsTo(Ville::class,'id_ville');
    }

    public function business(){
        return $this->belongsTo(Business::class, 'id_business');
    }

    public function client(){
        return $this->belongsTo(Client::class, 'id_client');
    }

    public function bonDistribution()
    {
        return $this->belongsTo(BonDistribution::class, 'bon_distribution');
    }

    public function bon_ramassage(){
        return $this->belongsTo(Bon_ramassage::class, 'bon_ramassage');
    }

    public function status()
    {
        return $this->belongsTo(Status::class, 'id_status');
    }
}