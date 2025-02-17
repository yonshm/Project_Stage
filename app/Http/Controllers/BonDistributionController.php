<?php

namespace App\Http\Controllers;

use App\Models\BonDistribution;
use App\Models\Coli;
use App\Models\Utilisateur;
use App\Models\Zone;
use Illuminate\Http\Request;

class BonDistributionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $zoneId = 5;
        $bonDistributions = BonDistribution::whereHas('coli.ville.zone', function ($query) use ($zoneId) {
            $query->where('id', $zoneId);
        })
        ->with('coli.ville.zone')
        ->get();
        return view('moderateur.bonDistribution', compact('bonDistributions'));
    }


    public function ajouterBonDistr(){
        $zoneId = 5;
        $zone = Zone::where('id', $zoneId)->first();
        $colis = Coli::whereHas('ville.zone',function ($query) use ($zoneId) {
            $query->where('id', $zoneId);
        })->count();
        $livreur = Utilisateur::whereHas('ville.zone', function ($query) use ($zoneId) {
            $query->where('id', $zoneId);
        })->get();
        return view('moderateur.ajouteBonDistribution', compact('livreur', 'zone', 'colis'));
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {

        $livreur = Utilisateur::where('id',$request->livreur)->first();
        $colis = Coli::whereHas('ville.zone', function ($query) {
            $query->where('id', 5);
        })
        ->whereNull('bon_distribution')
        ->whereHas('bon_ramassage.bon_envoi', function($query){
            $query->where('arrivee', 1);
        })
        ->with(['ville.zone', 'business', 'client', 'status'])
        ->get();
        return view('moderateur.creationBonDistribution', compact('livreur','colis'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
