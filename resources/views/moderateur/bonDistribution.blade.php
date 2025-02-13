@extends('components.master')
@section('content')
    <style>
        .table-cont{
            width: 95% !important;
        }
        .main{
            background-color: #e4e9f7 !important
        }
        #myTable th{
            background-color: #635bff !important;
            color: #FFF !important;
        }
        #myTable td{
          color: black;
          text-align: center;
        }

        

    </style>
    <div class="home ">
      @include('components.sideBar')
    <div class="main">
      @include('components.navBar')

      
              
      <div class="accordion mt-3" id="filtersAccordion">
        <!-- Accordion Item -->
        <div class="accordion-item" style="background: #ddd">
          <h2 class="accordion-header" id="headingFilters">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFilters"
              aria-expanded="false"
              aria-controls="collapseFilters"
            >
              Filters
            </button>
          </h2>
          <div
            id="collapseFilters"
            class="accordion-collapse collapse"
            aria-labelledby="headingFilters"
            data-bs-parent="#filtersAccordion"
          >
            <div id="filters" class="accordion-body inputs-filter container d-flex justify-content-between">
              <div class="inp-filtrage d-flex">
                <div class="filter-liv me-2">
                  <select name="" id="" class="px-4 py-2">
                    <option value="liv">livreur1</option>
                    <option value="liv">livreur2</option>
                  </select>
                </div>
                    <div class="filtre-status search me-2">
                      <select name="" id="" class="px-4 py-2" style="width: 150px;">
                          <option value="-1" selected>Status</option>
                          <option value="1">Boite vocale</option>
                          <option value="2">Client pas intéressé</option>
                          <option value="2">Livre</option>
                          <option value="2">Refuse</option>
                      </select>
                    </div>
                    <div class="filtre-date">
                      
                      <input type="date" class="px-4 py-2">
                    </div>

              </div>
              <div>
                <button type="button" class="btn btn-danger px-5">Filtré</button>
              </div>
            </div>
          </div>
        </div>
      
      
      
      </div>
      <div class="ajt-bonDistribution text-end me-4">
        <button class="btn btn-success mt-3 "><a href="{{route('bonDistr.create')}}">Ajouter Bon de distribution</a></button>
      </div>
      {{-- <div>{{$status}}</div> --}}
      {{-- <div>{{$bonDist}}</div> --}}
      <div class="table-cont mx-auto">
        <div class="table-responsive">
            <table id="myTable" class="display">
                <thead>
                    <th>Reférence</th>
                    <th>Date de creation</th>
                    <th>Livreur</th>
                    <th>Zone</th>
                    <th>Status</th>
                    <th>Colis</th>
                    <th>Action</th>
                </thead>
                <tbody>
                  @foreach ($bonDistributions as $item)
                    <tr>
                      <td>{{$item->ref}}</td>
                      <td>{{$item->date}}</td>
                      <td>{{$item->livreur->nom}}</td>
                      <td>
                        @if ($item->coli->isNotEmpty() && $item->coli->first()->ville && $item->coli->first()->ville->zone)
                            {{ $item->coli->first()->ville->zone->nom_zone }}
                        @else
                            N/A
                        @endif
                    </td>
                      <td>{{$item->status == 1 ? "Enregistré" : "Brouillon"}}</td>
                      <td>{{$item->coli()->count()}}</td>
                      <td class="text-center">
                          <div class="dropdown dropstart">
                          <a href="javascript:void(0)" class="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  
                                    stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
                                    class="icon icon-tabler icons-tabler-outline icon-tabler-dots-vertical">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                    <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                            </svg>
    
                          </a>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="">
                            <li>
                              <a class="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                  Details de bon
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)">
                                  Enregistrer le bon
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center gap-3" href="javascript:void(0)">
                                
                                      Voir en PDF
                              </a>
                            </li>
                          </ul>
                        </div>
                    </td>
                    </tr>
                      
                      
                  @endforeach
                    
                    
                    
                </tbody>
            </table>
    </div>
  </div>
  <div class="modal fade" id="exampleModal" data-bs-backdrop="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Details du bon</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <table class="table">
          <thead>
            <th>Ref</th>
            <th>Ref</th>
            <th>Ref</th>
          </thead>
          <tr>
            <td>AA</td>
            <td>AA</td>
            <td>AA</td>
          </tr>
        </table>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
  </div>
    </div>
@endsection