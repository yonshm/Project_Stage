<?php
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\BonDistributionController;
use App\Http\Controllers\BonEnvoiController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ColiController;
use App\Http\Controllers\LivreurController;
use App\Http\Controllers\ModerateurController;
use App\Http\Controllers\UtilisateurController;
use App\Models\Bon_envoi;
use App\Models\BonDistribution;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

// Start Route Clients ::::::::::::::::::::::::::::::::
// Route::get('/clients', [ClientController::class, 'index'])->name('clients.index');

// Route::get('/clients/{id}', function () {
//     return view('clients.show');
// });

Route::get('/client', [ClientController::class, 'index'])->name('clients.index');
Route::get('/client/create', [ClientController::class, 'create'])->name('clients.create');
Route::post('/client', [ClientController::class, 'store'])->name('clients.store');
Route::get('/client/{id}', [ClientController::class, 'show'])->name('clients.show');
Route::get('/client/edit/{id}', [ClientController::class, 'edit'])->name('clients.edit');
Route::put('/client/update/{id}', [ClientController::class, 'update'])->name('clients.update');
Route::delete('/client/{id}', [ClientController::class, 'destroy'])->name('clients.destroy');
// End Route Clients :::::::::::::::::::::::::::::::::

// Start Route Admin ::::::::::::::::::::::::::::::::

Route::get('/admin', [AdminController::class, 'create'])->name('admin.index');
Route::get('/admin/create', [AdminController::class, 'create'])->name('admin.create');
Route::post('/admin', [AdminController::class, 'store'])->name('admin.store');
Route::get('/admin/{id}', [AdminController::class, 'show'])->name('admin.show');
Route::get('/admin/edit/{id}', [AdminController::class, 'edit'])->name('admin.edit');
Route::put('/admin/update/{id}', [AdminController::class, 'update'])->name('admin.update');
Route::delete('/admin/{id}', [AdminController::class, 'destroy'])->name('admin.destroy');

Route::get('/admin/clients', [AdminController::class, 'showClients'])->name('admins.showClients');
Route::get('/admin/clients/t', [AdminController::class, 'test'])->name('admins.test');

// End Route Admin ::::::::::::::::::::::::::::::::


// Start Coli ::::::::::::::::::::::::::::::::

Route::get('/client/colis', [ColiController::class, 'create'])->name('colis.index');
Route::get('/client/colis/create', [ColiController::class, 'create'])->name('colis.create');
Route::post('/client/colis', [ColiController::class, 'store'])->name('colis.store');
Route::get('/client/colis/{id}', [ColiController::class, 'show'])->name('colis.show');
Route::get('/client/colis/edit/{id}', [ColiController::class, 'edit'])->name('colis.edit');
Route::put('/client/colis/update/{id}', [ColiController::class, 'update'])->name('colis.update');
Route::delete('/client/colis/{id}', [ColiController::class, 'destroy'])->name('colis.destroy');

// End Coli ::::::::::::::::::::::::::::::::

//Start route livreur
Route::get('/dashboard',function() {
    return view('livreur.dashboard');
});
Route::get('/livreur', [LivreurController::class, 'index'])->name('livreur.index');
Route::get('/livreur/colis', [LivreurController::class, 'indexColis'])->name('livreur.indexColis');
Route::get('/livreur/colis2', function(){
    return view('livreur.colis2');
});
Route::get('/livreur/colis/reporte' ,[LivreurController::class, 'indexColisReporte'])->name('livreur.indexColisReporte');
Route::get('/livreur/colis/relance' ,[LivreurController::class, 'indexColisRelance'])->name('livreur.indexColisRelance');
Route::get('/livreur/bon/distribution', [LivreurController::class, 'indexBonDistr'])->name('livreur.indexBonDistr');
Route::get('/livreur/bon/payement', [LivreurController::class, 'indexBonPayement'])->name('livreur.indexBonPayement');

// END ROUTE livreur

// START ROUTE MODERATEUR :

// Route::get('/moderateur/colis', [ModerateurController::class, 'colis'])->name('moderateur.colis');
Route::get('/moderateur/colis', [ColiController::class, 'colisZone'])->name('moderateur.colis');
Route::get('/moderateur/bonEnvoi', [BonEnvoiController::class, 'index'])->name('moderateur.bonEnvoi');
Route::post('/update-status', [BonEnvoiController::class, 'updateStatus'])->name('update.status');
Route::get('/moderateur/test', function (){
    return view('moderateur.test');
});
Route::get('/moderateur/bonDistribution', [BonDistributionController::class, 'index'])->name('bonDistr.index');
Route::get('/moderateur/bonDistribution/ajouterBonDistr', [BonDistributionController::class, 'ajouterBonDistr'])->name('bonDistr.ajouterBonDistr');
Route::get('/moderateur/bonDistribution/creeBonDistr', [BonDistributionController::class, 'create'])->name('bonDistr.create');
Route::get('/moderateur/bonDistribution/creeBonDistr', [BonDistributionController::class, 'create'])->name('bonDistr.create');
Route::post('/moderateur/bonDistribution/creeBonDistr', [BonDistributionController::class, 'store'])->name('bonDistr.store');


Route::get('/moderateur/test', function (){
    return view('moderateur.test');
});
Route::get('/moderateu/bon-envoi-scan', [BonEnvoiController::class, 'showScanBonEnvoi'])->name('bonEnvScan');


// Authentification : 
Route::get('/login' , [AuthController::class, 'index'])->name('auth.login');