<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accordion Sidebar Navigation</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">
    <style>
        .sidebar {
            height: 100vh;
            width: 250px;
            background-color: #635bff;
            color: white;
        }
        .nav-link {
            color: white;
        }
        .nav-link:hover {
            background-color: rgba(255, 255, 255, 0.1);

        }
        .nav-link.active {
            background-color: rgba(255, 255, 255, 0.2);
            color: black;
        }
        .submenu {
            padding-left: 2rem;
        }
        .submenu .nav-link {
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="d-flex">
        <nav class="sidebar">
            <div class="p-3">
                <h3 class="mb-4"><i class="bi bi-box me-2"></i>PALACE</h3>
                <ul class="nav flex-column" id="sidebarNav">
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center" href="#dashboard" data-bs-toggle="collapse">
                            <i class="bi bi-grid me-2"></i>
                            Dashboard
                            <i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <div class="collapse submenu" id="dashboard">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a class="nav-link" href="#">Overview</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Analytics</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Reports</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center" href="#users" data-bs-toggle="collapse">
                            <i class="bi bi-people me-2"></i>
                            Colis
                            <i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <div class="collapse submenu" id="users">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a class="nav-link" href="#">Liste des colis</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Retourné agence</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link d-flex align-items-center" href="#messages" data-bs-toggle="collapse">
                            <i class="bi bi-chat-square-text me-2"></i>
                            Bons
                            <i class="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <div class="collapse submenu" id="messages">
                            <ul class="nav flex-column">
                                <li class="nav-item"><a class="nav-link" href="#">Bons de distribution</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Bons d'envoi</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Bons de payement</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Bons de retour</a></li>
                            </ul>
                        </div>
                    </li>
                   
                </ul>
            </div>
            <div class="mt-auto p-3">
                <a href="#" class="nav-link d-flex align-items-center">
                    <i class="bi bi-box-arrow-right me-2"></i>
                    Sign Out
                </a>
            </div>
        </nav>
        <main class="flex-grow-1 p-3">            
                {{$slot}}
        </main>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var navLinks = document.querySelectorAll('#sidebarNav .nav-link[data-bs-toggle="collapse"]');
            
            navLinks.forEach(function(link) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all links
                    navLinks.forEach(function(innerLink) {
                        innerLink.classList.remove('active');
                    });
                    
                    // Add active class to clicked link
                    this.classList.add('active');
                    
                    // Toggle the chevron icon
                    var chevron = this.querySelector('.bi-chevron-down');
                    chevron.classList.toggle('bi-chevron-up');
                });
            });
        });
    </script>
</body>
</html>