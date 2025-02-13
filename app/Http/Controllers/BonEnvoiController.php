<?php

namespace App\Http\Controllers;

use App\Models\Coli;
use App\Models\Bon_envoi;
use Illuminate\Http\Request;
use App\Models\BonDistribution;

class BonEnvoiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
        $bonEnvoi = Bon_envoi::where('zone', 5)->get();
        return view('moderateur.bonEnvoi', compact('bonEnvoi'));
    }

    /**
     * update status de bon d'envoi.
     */
    public function updateStatus(Request $request){
        $request->validate([
            'ref' => 'required'
        ],
        [
            'ref.required' => 'La référence est obligatoire. Veuillez saisir une référence valide.'
        ]);
        $bonEnvoi = Bon_envoi::where('ref', $request->ref)->first();
        $colis = Coli::whereHas('bon_ramassage.bon_envoi', function ($query) use ($bonEnvoi) {
        $query->where('bon_envoi', $bonEnvoi->id); // Filtre par code d'envoi
        })->with(['bon_ramassage.bon_envoi']) // Charge les relations pour éviter des requêtes supplémentaires
        ->get();
        //Vérifier si des colis existent
        // if ($colis->isEmpty()) {
        //     return response()->json(['message' => 'Aucun colis trouvé pour ce code d\'envoi.'], 404);
        // }
        if ($bonEnvoi) {
            if ($bonEnvoi->arrivee == 1) {
                return redirect()->back()->with('info', 'Le statut de cet envoi a déjà été mis à jour.');
            }
            $bonEnvoi->arrivee = 1;
            $bonEnvoi->save();
            // Récupérer les colis associés au code d'envoi
            // Créer un bon de distribution pour chaque colis
            // foreach ($colis as $coli) {
                //     $coli->id_status = 1;
                //     $coli->save();
                // }
                
                return redirect()->back()->with([
                    'success' => 'Statut mis à jour avec succès.',
                    'colis' => $colis
                ]);
                 } else {
                return redirect()->back()->with('error', 'Référence non trouvée.');
            }
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
    public function createBonDistribution(string $id)
    {
        //
    }

}
