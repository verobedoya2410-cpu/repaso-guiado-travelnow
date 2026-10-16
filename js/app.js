// =======================================================
 // 1. FASE DE SELECCIÓN (Buscando a los actores)
 // =======================================================
 // Atrapamos el botón que creamos en el HTML usando su ID
 const botonTema = document.getElementById('btn-tema');

 // Atrapamos toda la página
 const cuerpoPagina = document.body;


 // =======================================================
 // 2. FASE DE RECUPERACIÓN (Leyendo la memoria)
 // =======================================================
 // Consultamos si el usuario tiene una preferencia guardada
 const temaGuardado = localStorage.getItem('preferenciaTema');

 // Si anteriormente seleccionó el modo oscuro,
 // lo activamos automáticamente al cargar la página
 if (temaGuardado === 'oscuro') {
     cuerpoPagina.classList.add('dark-theme');
     botonTema.textContent = "☀️ Claro";
 } else {
     // Si no hay preferencia o eligió modo claro
     cuerpoPagina.classList.remove('dark-theme');
     botonTema.textContent = "🌙 Oscuro";
 }


 // =======================================================
 // 3. FASE DE ESCUCHA Y ACCIÓN (Event Listeners)
 // =======================================================
 // Escuchamos cuando el usuario hace clic en el botón
 botonTema.addEventListener('click', function() {

     // Alternamos la clase dark-theme en el body
     cuerpoPagina.classList.toggle('dark-theme');

     // Verificamos si quedó activado el modo oscuro
     if (cuerpoPagina.classList.contains('dark-theme')) {

         // Actualizamos el texto del botón
         botonTema.textContent = "☀️ Claro";

         // Guardamos la preferencia en el navegador
         localStorage.setItem('preferenciaTema', 'oscuro');

     } else {

         // Actualizamos el texto del botón
         botonTema.textContent = "🌙 Oscuro";

         // Guardamos la preferencia en el navegador
         localStorage.setItem('preferenciaTema', 'claro');
     }
 });