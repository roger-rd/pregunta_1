document.getElementById("btn-guardar").addEventListener("click", function () {
    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const rut = document.getElementById("rut").value.trim();
    const edad = document.getElementById("edad").value.trim();


    if (!validarRut(rut)) {
        alert("El RUT ingresado no es válido.");
        return;
    }

    alert(`¡Hola ${nombre} ${apellido}!\n\nTus datos son:\nRUT: ${rut}\nEdad: ${edad}`);
});
