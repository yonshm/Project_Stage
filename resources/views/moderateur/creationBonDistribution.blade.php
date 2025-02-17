@extends('components.master')
@section('content')
    <div class="home ">
      @include('components.sideBar')
    <div class="main">
      @include('components.navBar')

      <div class="mx-3"> 
        <div><strong>Zone :</strong> <strong>Livreur : </strong>{{$livreur->nom}}</div>
        
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
                @foreach ($colis as $coli)
                <tr id="{{$coli->id}}">
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
              </tbody>
            </table>
          </div>
          </div>
        </div>
        <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-secondary">
                Ajouter
              </button>
        </div>
      </div>
    </div>
  </div>
  <script>
    const tout = document.getElementById('tout');
    tout.addEventListener('click', () => {
      const checkboxes = document.querySelectorAll('tbody tr td .coli-checked');
      checkboxes.forEach(checkbox => {
        checkbox.checked = tout.checked;
      });
    });
  </script>
  @endsection
