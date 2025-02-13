<?php

namespace App\Http\Controllers;

use App\Models\BonDistribution;
use App\Models\Utilisateur;
use Illuminate\Http\Request;

class BonDistributionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   $zoneId = 5;
        $bonDistributions = BonDistribution::whereHas('coli.ville.zone', function ($query) use ($zoneId) {
            $query->where('id', $zoneId);
        })
        ->with('coli.ville.zone')
        ->get();
        return view('moderateur.bonDistribution', compact('bonDistributions'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $zoneId = 5;
        $livreur = Utilisateur::whereHas('ville.zone', function ($query) use ($zoneId) {
            $query->where('id', $zoneId);
        })->get();
        return view('moderateur.ajouteBonDistribution', compact('livreur'));
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
