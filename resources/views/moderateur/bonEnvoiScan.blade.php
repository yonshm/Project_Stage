@extends('components.master')
@section('content')

<style>
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

    .alert-info {
      background-color: #d1ecf1;
      color: #0c5460;
    }

    .mb-3 {
      margin-bottom: 1rem;
    }

    .mt-1 {
      margin-top: 0.25rem;
    }

    .infos {
      margin-top: 0.5rem; /* Adjust this value as needed */
    }
</style>
<div class="home">
    @include('components.sideBar')
  <div class="main">
    @include('components.navBar')
    <div class="mx-2">

    <div class="card mt-3">
        <div class="card-body">
          <h4 class="card-title">Arrivage</h4>
          <form id="status-form" action="{{ route('update.status') }}" method="POST">
            @csrf
            <div class="row">
              <div class="col-md-12">
                <div class="floating mb-3">
                <input 
              type="text" 
              name="ref" 
              placeholder="Scannez ou tapez le référence" 
              class="form-control" 
              required 
              onkeydown="handleScanner(event)"/>
            </div>
              </div>
            </div>
          </form>
          @error('ref')
          <span style="color: rgb(255, 0, 0);">{{ $message }}</span>
      @enderror
        </div>



      <div class="infos mx-4">

          <div>
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

    {{-- @if(session('colis'))
    <div class="alert alert-info">
        {{ session('colis') }}
    </div>
    @endif --}}
    
</div>
</div>


{{-- Tables of colis --}}

</div>
@if(session()->has('colis') && session('colis')->isNotEmpty())
    <div class="table-responsive mb-4 border rounded-1 mt-2">
        <table class="table text-nowrap mb-0 align-middle">
            <thead class="text-dark fs-4">
                <tr>
                    <th><h6 class="fs-4 fw-semibold mb-0">Reference</h6></th>
                    <th><h6 class="fs-4 fw-semibold mb-0">Status</h6></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach(session('colis') as $colisItem)
                    <tr>
                        <td><h6 class="fs-4 fw-semibold mb-0">{{ $colisItem->ref }}</h6></td>
                        <td>
                            <span class="badge text-bg-light text-dark fw-semibold fs-2 gap-1 d-inline-flex align-items-center">
                                <i class="ti ti-clock-hour-4 fs-3"></i> {{$colisItem->status->nom_status ?? ''}}
                            </span>
                        </td>
                        <td>
                            <div class="dropdown dropstart">
                                <a href="javascript:void(0)" class="text-muted" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="ti ti-dots fs-5"></i>
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
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endif
</div>
</div>

</div>
@endsection