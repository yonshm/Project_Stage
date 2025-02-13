<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="{{asset('css/datatable.css')}}" />
</head>
<body>
    <table id="myTable" class="display">
        <thead>
            <tr>
              <th># (4)</th>
              <th>Code d'envoi</th>
              <th>date d'expidition</th>
              <th>Telephone</th>
              <th>Destinataire</th>
              <th>Ville</th>
              <th>address</th>
              <th>Crbt</th>
              <th>Etat</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</th>
              <td>001</td>
              <td>27-12-2024</td>
              <td>+212 600000000</td>
              <td>Said amine</td>
              <td>Casa Blanca</td>
              <td>hay salam</td>
              <td>450 DH</td>
              <td>Payé
                <!-- <select name="" id="" class="status-liv px-2" style="width: 140px;">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select> -->
              </td>
              
              <td id="actions">
                  <i class="fa-solid fa-list" onclick="showActionsMenu(event)"></i>
                  <div class="custom-menu" id="actions-menu" style="display: none;">
                    <ul>
                      <li onclick="handleAction(-1)">Informations</li>
                      <li onclick="handleAction(1)">Appeler le destinataire</li>
                      <li onclick="handleAction(2)">SMS au destinataire</li>
                      <li onclick="handleAction(3)">WhatsApp MSG</li>
                      <li onclick="handleAction(4)">Imprimer ticket</li>
                      <li onclick="handleAction(5)">Imprimer E-ticket</li>
                    </ul>
                  </div>
                </td>
                
            </tr>
            <tr>
              <td>2</th>
              <td>002</td>
              <td>25-12-2024</td>
              <td>+212 600000000</td>
              <td>Said amine</td>
              <td>Casa Blanca</td>
              <td>hay salam</td>
              <td>450 DH</td>
              <td>Non payé
                <!-- <select name="" id="" class="status-liv px-2">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select> -->
              </td>
              <td id="actions">
                <i class="fa-solid fa-list" onclick="showActionsMenu(event)"></i>
                <div class="custom-menu" id="actions-menu" style="display: none;">
                  <ul>
                    <li onclick="handleAction(-1)">Informations</li>
                    <li onclick="handleAction(1)">Appeler le destinataire</li>
                    <li onclick="handleAction(2)">SMS au destinataire</li>
                    <li onclick="handleAction(3)">WhatsApp MSG</li>
                    <li onclick="handleAction(4)">Imprimer ticket</li>
                    <li onclick="handleAction(5)">Imprimer E-ticket</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">3</th>
              <td>003</td>
              <td>27-12-2024</td>
              <td>+212 600000000</td>
              <td>Said amine</td>
              <td>Casa Blanca</td>
              <td>hay salam</td>
              <td>450 DH</td>
              <td>Payé
                <!-- <select name="" id="" class="status-liv px-2">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select> -->
              </td>
              <td id="actions">
                <i class="fa-solid fa-list" onclick="showActionsMenu(event)"></i>
                <div class="custom-menu" id="actions-menu" style="display: none;">
                  <ul>
                    <li onclick="handleAction(-1)">Informations</li>
                    <li onclick="handleAction(1)">Appeler le destinataire</li>
                    <li onclick="handleAction(2)">SMS au destinataire</li>
                    <li onclick="handleAction(3)">WhatsApp MSG</li>
                    <li onclick="handleAction(4)">Imprimer ticket</li>
                    <li onclick="handleAction(5)">Imprimer E-ticket</li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td scope="row">4</th>
              <td>004</td>
              <td>27-12-2024</td>
              <td>+212 600000000</td>
              <td>Said amine</td>
              <td>Casa Blanca</td>
              <td>hay salam</td>
              <td>450 DH</td>
              <td>Non payé
                <!-- <select name="" id="" class="status-liv px-2">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select> -->
              </td>
              <td id="actions">
                <i class="fa-solid fa-list" onclick="showActionsMenu(event)"></i>
                <div class="custom-menu" id="actions-menu" style="display: none;">
                  <ul>
                    <li onclick="handleAction(-1)">Editer le status</li>
                    <li onclick="handleAction(1)">Informations</li>
                    <li onclick="handleAction(2)">Appeler le destinataire</li>
                    <li onclick="handleAction(3)">SMS au destinataire</li>
                    <li onclick="handleAction(4)">WhatsApp MSG</li>
                    <li onclick="handleAction(5)">Imprimer ticket</li>
                    <li onclick="handleAction(6)">Imprimer E-ticket</li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
    </table>
    <script src="{{ asset('js/jquery.js')}}"></script>
    <script src="{{ asset('js/datables.js') }}"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
      <script>
        $(document).ready( function () {
            $('#myTable').DataTable();
        } );
    </script>
</body>
</html>