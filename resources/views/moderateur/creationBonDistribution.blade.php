@extends('components.master')
@section('content')
    <div class="home ">
      @include('components.sideBar')
    <div class="main">
      @include('components.navBar')

      <div class="mx-3"> 
        
      <div class="table-cont mx-auto">
        <div class="table-responsive">



          <div class="table-responsive mb-2 border rounded-1 mt-4">
            <table class="table text-nowrap mb-0 align-middle">
              <thead class="text-dark fs-4">
                <tr>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Code d'envoi</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Date D'expedition</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Télephone</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Nom du magasin</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Etat</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Statut</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Ville</h6>
                  </th>
                  <th>
                    <h6 class="fs-4 fw-semibold mb-0">Prix</h6>
                  </th>
                  <th>Action</th>
                  <th scope="col">
                    <label for="tout">
                      Tout
                    </label>
                    <input class="form-check-input primary" type="checkbox" id="tout">
                  </th>
                </tr>
              </thead>
              <tbody>
                @if ($colis->isEmpty())
                <tr>
                <td class="text-center" colspan="10">
                  Aucune colis reçue
                </td>
            </tr>

              @else
                @foreach ($colis as $coli)
                <tr id="{{$coli->ref}}">
                  <td>
                      <div class="ms-3">
                        <h6 class="fs-4 fw-semibold mb-0">{{$coli->ref}}</h6>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0 fw-normal">{{$coli->date_creation}}</p>
                  </td>
                  <td>
                    <p class="mb-0 fw-normal">{{$coli->telephone}}</p>
                  </td>
                  <td>
                    <p class="mb-0 fw-normal">{{$coli->client->nom_magasin ?? $coli->client->nom}}</p>
                  </td>
                  <td>
                    <p class="mb-0 fw-normal">{{$coli->etat == 1 ? 'paye' : 'Non paye'}}</p>
                  </td>
                  <td>
                    <span class="badge bg-success-subtle text-success">{{$coli->status->nom_status ?? ''}}</span>
                  </td>
                  <td>
                    <p class="mb-0 fw-normal">{{$coli->ville->nom_ville}}</p>
                  </td>
                  <td>
                    <p class="mb-0 fw-normal">{{$coli->prix}}</p>
                  </td>
                  
                  <td>
                    <div class="dropdown dropstart">
                      <a href="javascript:void(0)" class="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ti ti-dots-vertical fs-6"></i>
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li>
                          <a class="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)">
                            <i class="fs-4 ti ti-plus"></i>Add
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)">
                            <i class="fs-4 ti ti-edit"></i>Edit
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)">
                            <i class="fs-4 ti ti-trash"></i>Delete
                          </a>
                        </li>
                      </ul>
                    </div>
                  </td>
                  <td>
                    <input type="checkbox" class="form-check-input primary coli-checked" id="">
                    </td>
                </tr>
                @endforeach
                @endif
              </tbody>
            </table>
          </div>
          </div>
        </div>


        <div class="mb-3 d-flex justify-content-between align-items-center">
          <span id="ajouter-btn" data-bs-toggle="modal" data-bs-target="#primary-header-modal"
            class="ms-auto btn btn-success mb-0">Ajouter</span>
        </div>



        <div id="primary-header-modal" class="modal fade" tabindex="-1" aria-labelledby="primary-header-modalLabel"
            style="display: none;" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable modal-lg">
              <div class="modal-content">
                <div class="modal-header modal-colored-header bg-primary text-white">
                  <h4 class="modal-title text-white" id="primary-header-modalLabel">
                    Bon Distribution
                  </h4>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <h5 >Colis selectionnez :<span id="colis-count">0</span></h5>
                  <h5 class="mt-0">Livreur</h5>
                  <div class="row">
                    <div class="mb-3">
                      <select id="livreur" class="form-select" name="id_livreur">
                        <option value="" selected="">Choisissez livreur ...</option>
                        @foreach($livreur as $liv)
                            <option value={{$liv->id}}>{{$liv->nom}}</option>
                          @endforeach
                        
                      </select>
                    </div>
                  </div>

                </div>
                <div class="modal-footer">
                  <button type="button" id="annuler" class="btn btn-light" data-bs-dismiss="modal">
                    Annuler
                  </button>
                  <button type="submit" id="btn-enregisterBonDistr" class="btn bg-primary-subtle text-primary ">
                    Enregister
                  </button>
                </div>
              </div>
              <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
          </div>
      </div>
    </div>
  </div>
  <script>
  const tout = document.getElementById('tout');
  const ajouterBtn = document.getElementById('ajouter-btn'); 
  const enregisterBonDistr = document.getElementById('btn-enregisterBonDistr');

  // Function to get the selected colis
  function getSelectedColis() {
    const checkboxes = document.querySelectorAll('tbody tr td .coli-checked');
    const colis = [];
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        colis.push(checkbox.parentElement.parentElement.id);  // Assuming ID is the colis identifier
      }
    });
    return colis;
  }


  document.addEventListener('DOMContentLoaded', () => {
  toggleAjouterBtn();
  updateColisCount();
}); 

  function updateColisCount() {
  const colis = getSelectedColis();
  document.getElementById('colis-count').textContent = colis.length;
}

  // Function to enable/disable the "ajouter" button based on selected colis
  function toggleAjouterBtn() {
    const colis = getSelectedColis();  // Get selected colis
    console.log('Selected colis:', colis); // Debugging statement

    // If no colis are selected, disable the button
    if (colis.length === 0) {
      console.log('No colis selected, disabling button');
      ajouterBtn.disabled = true;
    } else {
      console.log('Colis selected, enabling button');
      ajouterBtn.disabled = false;
    }
  }

  // Event listener for the "select all" checkbox (tout)
  tout.addEventListener('click', () => {
    const checkboxes = document.querySelectorAll('tbody tr td .coli-checked');
    checkboxes.forEach(checkbox => {
      checkbox.checked = tout.checked; // Set all checkboxes to match the "select all" state
    });

    // Call toggleAjouterBtn to enable/disable the button based on selected checkboxes
    toggleAjouterBtn();
  });

  // Event listener for the "ajouter" button
  ajouterBtn.addEventListener('click', () => {
    const colis = getSelectedColis();  // Get the list of selected colis
    document.getElementById('colis-count').innerHTML = colis.length;  // Display the selected colis count
    console.log(colis);

    // Call toggleAjouterBtn to enable/disable the button
    toggleAjouterBtn();
  });
  enregisterBonDistr.addEventListener('click', ()=>{
    const colis = getSelectedColis();
    const livreur = document.getElementById('livreur').value;
    
  })

  // enregisterBonDistr.addEventListener('click', ()=>{
    
  //   const colis = getSelectedColis();
  //   const livreur = document.getElementById('livreur').value;
  //   console.log(livreur)
    
  //   fetch('{{route('bonDistr.store')}}',{
  //     method : 'POST',
  //     headers : {
  //       'Content-Type': 'application/json',
  //       'X-CSRF-TOKEN': '{{ csrf_token() }}'
  //     },
  //     body : JSON.stringify({
  //       livreur_id : livreur,
  //       colis_ids : colis
  //     })
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     // Handle success response
  //     console.log(data);
  //     // Optionally, close the modal and reset the form
  //     // $('#primary-header-modal').modal('hide');
  //     // document.getElementById('distribution-form').reset();
  //     // updateColisCount();
  //     toggleAjouterBtn();
  //     const checkedColis = getSelectedColis();
  //     checkedColis.forEach(coliId => {
  //       const row = document.getElementById(coliId);
  //       if (row) {
  //         row.remove();
  //       }
  //     });
  //   })
  //   .catch(error => {
  //     // Handle error response
  //     console.error('Error:', error);
  //   });
  // });

  // Event listeners for individual checkboxes
  // Event listeners for individual checkboxes
document.querySelectorAll('.coli-checked').forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    toggleAjouterBtn();
    updateColisCount(); // Now defined
  });
});


  // Initial state update
  toggleAjouterBtn();
  // updateColisCount();
  // function validation(){
  //   const livreur = document.getElementById('livreur').value;
  //   let isValid = true;
  //   if(livreur === ""){
  //     isValid = false;
  //     console.log('"Veuillez choisir un livreur."')
  //   }
  //   return isValid;
  // }
</script>

  @endsection
