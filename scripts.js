<<<<<<< HEAD
// Seleccionamos el botón
const toggleButton = document.getElementById("toggle-dark-mode");

// Verificamos si el usuario ya activó el modo oscuro antes
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Modo Claro";
}

// Evento para cambiar entre modos
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "🌙 Modo Oscuro";
    }
});
=======
// Seleccionamos el botón
const toggleButton = document.getElementById("toggle-dark-mode");

// Verificamos si el usuario ya activó el modo oscuro antes
if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Modo Claro";
}

// Evento para cambiar entre modos
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Guardar la preferencia en localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleButton.textContent = "☀️ Modo Claro";
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleButton.textContent = "🌙 Modo Oscuro";
    }
});
>>>>>>> 3bbab6735d99f8a1b1c215c39d54353794e0ee64
