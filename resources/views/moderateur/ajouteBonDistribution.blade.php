@extends('components.master')
@section('content')
    <div class="home ">
      @include('components.sideBar')
    <div class="main">
      @include('components.navBar')
      <div class="card mx-3 mt-2">
        <div class="card-body">
          <h4 class="card-title">Ajouter Bon Distribution</h4>
          <form class="mt-4">
            <div class="form-group">
              <div class="row">
                <div class="col-md-12">
                      <div class="mb-3">
                        <select class="select2 form-control">
                          <option value="">Zone</option>
                          <option value="">Option1</option>
                          <option value="">Option1</option>
                        </select>
                      </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                      <div class="mb-3">
                        <select class="select2 form-control">
                          <option value="-1">Livreur</option>
                          @foreach($livreur as $liv)
                            <option value={{$liv->id}}>{{$liv->nom}}</option>
                          @endforeach
                        </select>
                      </div>
                </div>
              </div>
              <div class="form-actions mt-3">
                <div class="d-flex justify-content-end gap-6">
                  <button type="reset" class="btn bg-danger-subtle text-danger ">
                    Reset
                  </button>
                  <button type="submit" class="btn btn-primary ">
                    Crée Bon
                  </button>
                </div>
              </div>
            </form>
        </div>
      </div>
     
    </div>
  </div>

