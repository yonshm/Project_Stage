@extends('components.master')
@section('content')
<div class="home ">
    @include('components.sideBar')
    <div class="main container">
        <div>
            <h4>Ajouter Bon De distribution</h4>
        </div>
        <form>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Zone</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option selected>Choisier une zone</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
            <div class="input-group mb-3">
                <label class="input-group-text" for="inputGroupSelect01">Livreur</label>
                <select class="form-select" id="inputGroupSelect01">
                    <option value="0">Choisier un Livreur</option>
                    @foreach ($livreur as $item)
                        <option value="{{$item->id}}">{{$item->nom}}</option>
                    @endforeach
                </select>
            </div>
            <button class="btn btn-primary hstack gap-6" type="submit">
                +
                Créer Un bon de distribution
              </button>
        </form>

    </div>
