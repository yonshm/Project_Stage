<x-layout>

<!-- Nav -->
    <nav class="navbar">
      <img src="https://fakeimg.pl/250x50/" alt="logo">
      <!-- links -->
      <ul class="links">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li id="icon-profile">
            <img src="https://fakeimg.pl/250x250/" alt="profile">
        </li>
      </ul>
      <!-- menu bar -->
      <div id="menu-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
    <div class="home">
      <div id="sidebar" class="sidebar">
        <!-- Colis :::: -->
        <div class="part">
          <h6>Colis</h6>
          <div class="item">
            <span>1 - Colis</span>
            <ul>
              <li><a href="{{route('colis.create')}}">nouveau coli </a></li>
              <li><a href="#">liste colis </a></li>
              <li><a href="#">colis pour ramasage </a></li>
              <li><a href="#">colis mon expedies </a></li>
            </ul>
          </div>
          <div class="item">
            <span>2 - Gestion d'inventaire</span>
            <ul>
              <li><a href="#">Ajouter Produit </a></li>
              <li><a href="#">Inventaire </a></li>
            </ul>
          </div>
        </div>

        <!-- Bons Et Factures :::: -->
        <div class="part">
          <h6>Bons Et Factures</h6>
          <div class="item">
            <span>1 - Bons de ramassage</span>
            <ul>
              <li><a href="#">liste bons de ramassage </a></li>
              <li><a href="#">ajouter bon de ramassage </a></li>
            </ul>
          </div>
          <div class="item">
            <span>2 - Bons de retour</span>
            <ul>
              <li><a href="#">liste bons de retour </a></li>
              <li><a href="#">ajouter bon de retour </a></li>
            </ul>
          </div>
          <div class="item">
            <span>3 - Liste Factures</span>
          </div>
        </div>
        <!-- Utilite -->
        <div class="part">
          <h6>Utilite</h6>
          <div class="item">
            <span>1 - utilisateurs</span>
          </div>
          <div class="item">
            <span>2 - Supports</span>
          </div>
        </div>
      </div>
        <div class="main">
            <div class="card right-side">
                <h4 class="text-center">Nouveau colis</h4>
                <span>Rotour List colis</span>

                <div class="card-body">
                        <div class="card">
                            <div class="card-body div-form">
                                <h4 class="card-title mb-3">Basic Form</h4>
                                <form action="{{route('colis.store')}}" method="POST">
                                    @csrf
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="inputDestinataire" class="form-label">Destinataire</label>
                                                <input type="text" class="form-control" name="destinataire" id="inputDestinataire" placeholder="Destinataire">
                                                </div>
                                            </div>
                                            
                                            <div class="col-md-6">
                                                <div class="mb-3">
                                                    <label for="inputCommande" class="form-label">N Commande</label>
                                                    <input type="text" name="bon_ramassage" class="form-control" id="inputCommande" placeholder="N Commande">
                                                </div>
                                            </div>
                                            
                                        
                                            <div class="col-md-6">
                                            <div class=" mb-3">
                                                <label for="inputTelephone" class="form-label">Telephone</label>
                                                <input type="text" class="form-control" name="telephone" id="inputTelephone" min="10" max="15" placeholder="Telephone">
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                            <label class="form-label">Ville</label>
                                            <select class="form-select" name="id_ville" aria-label="Default select example">
                                                <option selected="">Ville</option>
                                                <option value="1">United Kingdom</option>
                                                <option value="2">Srilanka</option>
                                            </select>
                                            </div>
                                        </div>
                                        
                                        <div class="col-md-6">
                                            <div class="mb-3">
                                                <label for="inputAdresse" class="form-label">Adresse</label>
                                                <input type="text" name="adresse" class="form-control" id="inputAdresse" placeholder="Adresse">
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class=" mb-3">
                                                <label for="inputMarchabdise" class="form-label">Marchandise</label>
                                                <input type="text" class="form-control" id="inputMarchabdise" placeholder="Marchabdise">
                                            </div>
                                        </div>
                            
                                        <div class="col-md-6">
                                            <div class=" mb-3">
                                                <label for="inputQuantite" class="form-label">Quantite</label>
                                                <input type="number" class="form-control" id="inputQuantite" placeholder="Quantite">
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class=" mb-3">
                                                <label for="inputPrix" class="form-label">Prix</label>
                                                <input type="number" name="prix" step="0.01" class="form-control" id="inputPrix" placeholder="Prix">
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="col-md-6">
                                                <div class=" mb-3 ">
                                                    <label for="inputCommentaire" class="form-label">Commentaire ( Autre telephone, Date de livraison,..)</label>
                                                    <textarea class="form-control" name="commentaire" id="inputCommentaire" cols="20" rows="3" placeholder="Commentaire ( Autre telephone, Date de livraison, ...)"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        <div class="row my-1">
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="ouvrirColis">
                                                    <label class="form-check-label" for="ouvrirColis">
                                                        interdit d'ouvrir le colis
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="colisRemplacer">
                                                    <label class="form-check-label" for="colisRemplacer">
                                                        Colis a Remplacer
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="colisDuStock">
                                                    <label class="form-check-label" for="colisDuStock">
                                                        Colis du Stock
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <hr>
                                        <div class="col-md-12">

                                    </div>
                                    <hr>
                                    <div class="col-12 mb-2">
                                        <div class="d-md-flex align-items-center">
                                            <div class="ms-auto d-flex mt-3 gap-10 mt-md-0">
                                                <button type="reset" class="btn bg-danger-subtle text-danger hstack gap-6">
                                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  
                                                        stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-restore">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3.06 13a9 9 0 1 0 .49 -4.087" />
                                                        <path d="M3 4.001v5h5" /><path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                </svg>
                                                Reinitialiser
                                                </button>

                                                <button type="submit" class="btn btn-primary hstack gap-6">
                                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  
                                                        fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  
                                                        class="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy">
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                        <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
                                                        <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" />
                                                </svg>
                                                Enregistrer
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between mt-2">
                                        <div class="mb-3">
                                            <label for="inputAdresse" class="form-label">Frais de livraison: </label>
                                            <span id="fraisLivraison">00.00 DH</span>
                                        </div>
                                        <div class="mb-3">
                                            <label for="inputAdresse" class="form-label">Frais de retour: </label>
                                            <span id="fraisRetour">00.00 DH</span>
                                        </div>
                                        <div class="mb-3">
                                            <label for="inputAdresse" class="form-label">Frais de refus: </label>
                                            <span id="fraisRefus">00.00 DH</span>
                                        </div>
                                    </div>
                                </form>
                            </div>        
                        </div>
                </div>
            </div>
        </div>

    <script>
      const menu_bar = document.getElementById("menu-bar");
      const sidebar = document.getElementById("sidebar");
      menu_bar.addEventListener("click", () => {
        sidebar.classList.toggle("show");
        menu_bar.classList.toggle("close");
      });
    </script>
    <script>
        let room = 1;
        function education_fields() {
        room++;
        let objTo = document.getElementById("education_fields");
        let divtest = document.createElement("div");
        divtest.setAttribute("class", "mb-3 removeclass" + room);
        let rdiv = "removeclass" + room;
        divtest.innerHTML =
            `<form class="row">
                <div class="col-sm-3">
                    <div class="form-group mb-3">
                        <input type="text" class="form-control" id="Schoolname" name="Schoolname" placeholder="School Name"></div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group mb-3">
                            <input type="text" class="form-control" id="Age" name="Age" placeholder="Age">
                        </div>
                    </div>
                <div class="col-sm-2">
                    <div class="form-group mb-3">
                        <input type="text" class="form-control" id="Degree" name="Degree" placeholder="Degree">
                    </div>
                </div>
                <div class="col-sm-3">
                    <div class="form-group mb-3">
                <select class="form-select" id="educationDate" name="educationDate">
                    <option>Date</option> <option value="2015">2015</option>
                    <option value="2016">2016</option> <option value="2017">2017</option>
                    <option value="2018">2018</option> </select> </div></div><div class="col-sm-2">
                        <div class="form-group">
                            <button class="btn btn-danger" type="button" onclick="remove_education_fields('${room}' );">
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-minus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
                            </button>
                        </div>
                    </div>
                </form>`;

        objTo.appendChild(divtest);
        }

        function remove_education_fields(rid) {
        var elements = document.querySelectorAll('.removeclass' + rid);
        elements.forEach(function(element) {
            element.remove();
        });
        }
</script>

</x-layout>