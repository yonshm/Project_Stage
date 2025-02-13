<x-colis>  
    <div class="main px-3">
        {{-- <h3 class="mt-3">Colis relance</h> --}}
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
                <div class="filtre-etat search me-2">
                  <select name="" id="" class="rounded-pill px-4 py-2" style="width: 150px;">
                    <option value="-1" selected>Etat</option>
                    <option value="1">Payé</option>
                    <option value="2">Non payé</option>
                  </select>
                </div>
                <div class="filtre-status search me-2">
                  <select name="" id="" class="rounded-pill px-4 py-2" style="width: 150px;">
                    <option value="-1" selected>Status</option>
                    <option value="1">Boite vocale</option>
                    <option value="2">Client pas intéressé</option>
                    <option value="2">Livre</option>
                    <option value="2">Refuse</option>
                  </select>
                </div>
                
                <div class="form-group me-2">
                  <input type="datetime-local" class="form-control" value="2008-05-13T22:33:00">
                </div>
              </div>
              <div>
                <button type="button" class="btn btn-danger px-5">Reporté pour aujourd'hui</button>
              </div>
            </div>
          </div>
        </div>
      
      
        <div class="items d-flex justify-content-between align-items-center mt-3">
          <div class="paginate mt text-success">Paginate</div>
          <div class="search">
            <input
              type="search"
              name="search"
              id="search"
              class="rounded-pill px-4 py-2 mt-0"
              placeholder="search"
            />
          </div>
        </div>
      </div>

      <div class="colis-reporte mt-3">
        <table id="p-table" class="table table-striped table-hover ">
          <thead class="table-dark">
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
              <td>
                <select name="" id="" class="status-liv px-2" style="width: 140px;">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select> 
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
              <td>
                <select name="" id="" class="status-liv px-2">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select>
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
              <td>
                <select name="" id="" class="status-liv px-2">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select>
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
              <td>
                <select name="" id="" class="status-liv px-2">
                  <option value="-1" selected>attend livré</option>
                  <option value="1">Livre</option>
                  <option value="2">le client ne répond pas</option>
                  <option value="3">le client n'est pas intéressé</option>
                  <option value="4">Refuse</option>
                </select>
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
        <div class="submit d-flex justify-content-end">
          <button
            id="btn-imprimer"
            type="button"
            class="btn btn-primary px-4 py-2"
          >
            imprimer
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"
  ></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
   
</x-colis>



