@extends('components.master')
@section('content')
    <style>
        .table-cont{
            width: 95% !important;
        }

        #myTable th{
            background-color: #635bff !important;
            color: #FFF !important;
        }
        #myTable td{
          color: black;
          text-align: center;
        }

        .alert {
        padding: 10px;
        margin: 10px 0;
        border-radius: 5px;
        }

        .alert-success {
          background-color: #d4edda;
          color: #155724;
        }

        .alert-danger {
          background-color: #f8d7da;
          color: #721c24;
        }
    </style>
    <div class="home ">
      @include('components.sideBar')
    <div class="main">
      @include('components.navBar')
      {{-- <div>{{$status}}</div> --}}
      {{-- <div>{{$bonDist}}</div> --}}
      <div class="table-cont mx-auto">
        <div class="table-responsive">
            <table id="myTable" class="display">
                <thead>
                    <th>Reférence</th>
                    <th>Date de creation</th>
                    <th>Zone</th>
                    <th>Status</th>
                    <th>Colis</th>
                    <th>Action</th>
                </thead>
                <tbody>
                  @foreach ($bonEnvoi as $item)
                    <tr>
                      <td>{{$item->ref}}</td>
                      <td>{{$item->date_debut}}</td>
                      <td>{{$item->zoneTable->nom_zone}}</td>
                      <td>{{$item->arrivee == 1 ? 'reçue' : 'en route'}}</td>
                      <td>{{$item->bon_ramassage->count()}}</td>
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
    <div>
      <p>ARRIVAGE BON D'ENVOI : </p>
    </div>
      <div class="w-3">
        <form id="status-form" action="{{ route('update.status') }}" method="POST">
          @csrf
          <input 
            type="text" 
            name="ref" 
            placeholder="Scannez ou tapez le référence" 
            class="input-group w-3" 
            required 
            onkeydown="handleScanner(event)"
            style="width: 50%; max-width: 300px; min-width: 200px; padding: 10px; text-align: center; border: 1px solid #ccc; border-radius: 5px;">
        </form>
      </div>
      <div class="accordion" id="accordionExample">
        
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
              @if(session('success'))
          <div class="alert alert-success">
            {{ session('success') }}
          </div>
        @endif

        @if(session('error'))
          <div class="alert alert-danger">
            {{ session('error') }}
          </div>
        @endif

        @if(session('info'))
          <div class="alert alert-info">
            {{ session('info') }}
          </div>
        @endif

        @error('ref')
            <span style="color: red;">{{ $message }}</span>
        @enderror


      <script>
        function handleScanner(event) {
          if (event.key === "Enter") {
            event.preventDefault(); 
            document.getElementById('status-form').submit();
          }
        }
      </script>

  </div>
  @if(session('colis'))
    <div class="alert alert-info">
        Colis: {{ session('colis') }}
    </div>
    @endif
</div>
@endsection