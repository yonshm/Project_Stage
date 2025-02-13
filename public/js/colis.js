// const btn_print = document.getElementById("btn-imprimer");
// btn_print.addEventListener("click", () => {
//     window.print();
// });
const status = document.querySelectorAll("table tbody tr .status-liv");
status.forEach((element) => {
    element.addEventListener("change", () => {
        const selectOpt = element.options[element.selectedIndex].text;
        // console.log(element.value, selectOpt);
        Swal.fire({
            title: "vous êtes sur?",
            text: `${selectOpt}`,
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui ",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    text: `Status : ${selectOpt}`,
                    icon: "success",
                });
                element.parentElement.parentElement.remove();
            }
        });
    });
});
function showActionsMenu(event) {
    event.stopPropagation();

    const menu = document.getElementById("actions-menu");
    const parentTd = event.target.closest("td");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        return;
    }

    // Hide any other open menus
    document
        .querySelectorAll(".custom-menu")
        .forEach((m) => (m.style.display = "none"));

    menu.style.display = "block";

    // Positioning relative to the parent <td>
    const rect = parentTd.getBoundingClientRect();
    menu.style.top = `${
        rect.top + window.scrollY + event.target.offsetHeight
    }px`;
    menu.style.left = `${rect.left + window.scrollX}px`;
}

// Close menu when clicking elsewhere
document.addEventListener("click", () => {
    document.querySelectorAll(".custom-menu").forEach((menu) => {
        menu.style.display = "none";
    });
});

function handleAction(actionId) {
    alert(`Action ID: ${actionId}`);
    const menu = document.getElementById("actions-menu");
    if (menu) menu.style.display = "none";
}

// var acc = document.getElementsByClassName("accordion");
//         var i;

//         for (i = 0; i < acc.length; i++) {
//           acc[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//             var panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//               panel.style.maxHeight = null;
//             } else {
//               panel.style.maxHeight = panel.scrollHeight + "px";
//             } 
//           });
    // }