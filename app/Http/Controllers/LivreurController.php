<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LivreurController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Display a listing of the colis.
     */
    public function indexColis()
    {
        return view('livreur.colis');
    }

    /**
     * Display a listing of the colis reporte.
     */
    public function indexColisReporte()
    {
        return view('livreur.colis_reporte');
    }

    /**
     * Display a listing of the colis reporte.
     */
    public function indexColisRelance()
    {
        return view('livreur.colis_relance');
    }

    /**
     * Display a listing of the bon distribution.
     */
    public function indexBonDistr()
    {
        return view('livreur.bon_distribution');
    }

    /**
     * Display a listing of the bon distribution.
     */
    public function indexBonPayement()
    {
        return view('livreur.bon_payement');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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

    /**
     * Remove the specified resource from storage.
     */

}
