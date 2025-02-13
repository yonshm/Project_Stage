<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="{{asset('css/global_styles.css')}}">
    <link rel="stylesheet" href="{{asset('css/datatable.css')}}" />
    <link rel="stylesheet" href="{{asset('css/colis.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body >
    <nav class="nav">
        <a class="nav-link active" aria-current="page" href="#">Active</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link" href="#">Link</a>
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </nav>
  
      <div class="home">
        <div class="sidebar">
          <!-- Colis :::: -->
          
            
            <div class="item">
              <a href="/moderateur/colis">Accueil</a>
            </div>
            <div class="item">
              <a href="/moderateur/colis">Colis</a>
            </div>
            <div class="item">
              <a href="#">Retourné agence</a>
            </div>
          <!-- Bons Et Factures :::: -->
          <div class="part">
            <h6>Bons</h6>
            <div class="item">
              <a href="/moderateur/bonDistribution">Bons de distribution</a>
            </div>
            <div class="item">
                <a href="/moderateur/bonEnvoi">Bons d'envoi</a>
              </div>
            <div class="item">
              <a href="#">Bons de payement</a>
            </div>
            <div class="item">
                <a href="#">Bons de retour</a>
              </div>
          </div>
        </div>
    
    
    
  <script src="{{asset('js/bootstrap.bundle.min.js')}}"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="{{asset('js/colis.js')}}"></script>
  <script src="{{ asset('js/jquery.js')}}"></script>
  <script src="{{ asset('js/datables.js') }}"></script>
  <script>
    $(document).ready( function () {
      $('#myTable').DataTable();
    } );
    </script>
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
  crossorigin="anonymous"
  ></script>
</body>