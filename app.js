console.log("app Working ???");

// function hideMenu(id) {
//     console.log("arrow clicked!")
//     console.log(id)

//     menu = document.getElementById(id);
//     menu.classList.toogle("hideMenu")
// }

function showMenu(id) {
    let menu = document.getElementById(id);
    menu.classList.add("hideMenu");
}

function hideMenu(id) {
    let menu = document.getElementById(id);
    menu.classList.remove("hideMenu");

    let dropdowns = document.getElementsByClassName("dropdowns");
    
    for (const item of dropdowns) {
        item.classList.add("hideDropdown")

    }
    
    
}

function dropdownMenu(id) {
    let menu = document.getElementById(id);
    menu.classList.toggle("hideDropdown")
}

