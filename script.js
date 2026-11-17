function entrar() {

    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    /*
        AQUÍ PUEDES CAMBIAR
        EL NOMBRE Y LA CONTRASEÑA
    */

    const nombreCorrecto = "Cris";
    const passwordCorrecta = "2109";

    if (
        usuario.toLowerCase() === nombreCorrecto.toLowerCase()
        &&
        password === passwordCorrecta
    ) {

        document.getElementById("login").style.display = "none";

        document.getElementById("contenido").classList.remove("oculto");

        window.scrollTo(0, 0);

    } else {

        document.getElementById("error").innerText =
            "Ups... esa no es nuestra contraseña ❤️";

    }

}


/* Ir a la propuesta */

function irAPropuesta() {

    document.getElementById("propuesta").scrollIntoView({
        behavior: "smooth"
    });

}


/* Cuando dice que sí */

function aceptar() {

    document.getElementById("respuesta").innerHTML =
        "😭❤️ ¡SABÍA QUE DIRÍAS QUE SÍ! 💍❤️";

    lanzarCorazones();

}


/* Botón NO */

function noAceptar() {

    const boton = document.getElementById("noBtn");

    const x =
        Math.random() * 250 - 125;

    const y =
        Math.random() * 150 - 75;

    boton.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* Corazones */

function lanzarCorazones() {

    for (let i = 0; i < 30; i++) {

        const corazon =
            document.createElement("div");

        corazon.innerHTML = "❤️";

        corazon.style.position = "fixed";

        corazon.style.left =
            Math.random() * 100 + "%";

        corazon.style.top =
            Math.random() * 100 + "%";

        corazon.style.fontSize =
            Math.random() * 25 + 15 + "px";

        corazon.style.zIndex = "9999";

        document.body.appendChild(corazon);

        setTimeout(() => {

            corazon.remove();

        }, 3000);

    }

}