const textoInput = document.getElementById("tareaInput");
const btonAgregar = document.getElementById("agregarTareaBtn");
const listaTareas = document.getElementById("listaDeTareas");
const tareaMensaje = document.getElementById("noTareasMensaje");
btonAgregar.addEventListener("click", function() {
    const textoTarea = textoInput.value.trim(); //Eliminar espacios al inicio y al final del texto.
    // Validar que el campo no esté vacío
    if (textoTarea === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }
    // eliminar el mensaje de "No hay tareas"
    tareaMensaje.textContent = "";

    const nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = textoTarea;

    const btonEliminar = document.createElement("button");
    const btonCompletar = document.createElement("button");
    btonCompletar.textContent = "Completar";
    btonCompletar.addEventListener("click", function() {
        nuevaTarea.classList.toggle("tarea-completada");
    });
    btonEliminar.textContent = "Eliminar";
    btonEliminar.addEventListener("click", function() {
        listaTareas.removeChild(nuevaTarea);
    });

    nuevaTarea.appendChild(btonCompletar);
    nuevaTarea.appendChild(btonEliminar);
    listaTareas.appendChild(nuevaTarea);
    // Limpiar el campo de entrada
    textoInput.value = "";
});