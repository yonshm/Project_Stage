<?php

namespace App\Http\Controllers;

use App\Models\BonDistribution;
use App\Models\Coli;
use App\Models\Status;
use Illuminate\Http\Request;

class ColiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('colis.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // I Working Here :: Get data from View form ---->
        $colis = $request->telephone;
        return view('colis.t',compact('colis'));
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

    /**
     * Remove the specified resource from storage.
     */
    public function colisZone()
    {
        // $bonDist = BonDistribution::all();
        // $status = Status::all();
        $colis = Coli::whereHas('ville.zone', function ($query) {
            $query->where('id', 5);
        })
        ->whereHas('bon_ramassage.bon_envoi', function($query){
            $query->where('arrivee', 1);
        } )
        ->with(['ville.zone', 'business', 'client', 'status'])
        ->get();
        return view('moderateur.colis', compact('colis'));
    }
}
