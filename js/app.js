// =======================================================
// 1. FASE DE SELECCIÓN (Buscando a los actores)
// =======================================================
// Atrapamos el botón que creamos en el HTML usando su ID único
const botonTema = document.getElementById('btn-tema');

// Atrapamos toda la página. El body es tan importante que tiene su propio atajo directo en el DOM
const cuerpoPagina = document.body; 


// =======================================================
// 2. FASE DE ESCUCHA Y ACCIÓN (Event Listeners)[cite: 2]
// =======================================================
// addEventListener es una función que recibe dos parámetros:
// Parámetro 1: El nombre del evento que estamos esperando ('click', 'mouseenter', 'scroll')[cite: 2].
// Parámetro 2: Una función (callback) que contiene el código que se ejecutará CUANDO ocurra el evento.

botonTema.addEventListener('click', function() {
    
    // === ESTO OCURRE SOLO CUANDO SE HACE CLIC ===

    // La función toggle() actúa como un interruptor de luz:
    // Si el body NO tiene la clase 'dark-theme', se la agrega.
    // Si el body YA TIENE la clase 'dark-theme', se la quita.
    cuerpoPagina.classList.toggle('dark-theme');

    // Ahora vamos a darle retroalimentación al usuario cambiando el texto del botón.
    // contains() nos devuelve 'true' si la clase existe, y 'false' si no existe.
    if (cuerpoPagina.classList.contains('dark-theme')) {
        // Si el modo oscuro está activo, el botón debe ofrecer cambiar al claro
        botonTema.textContent = "☀️ Claro";
    } else {
        // Si no está activo, el botón debe ofrecer cambiar al oscuro
        botonTema.textContent = "🌙 Oscuro";
    }
});