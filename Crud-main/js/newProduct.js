function guardar() {
    let r = document.getElementById("id").value
    let n = document.getElementById("nombre").value
    let p = parseFloat(document.getElementById("precio").value)
    let s = parseInt(document.getElementById("stock").value)
    let i = document.getElementById("imagen").value


    let producto = {
        id: r,
        nombre: n,
        precio: p,
        stock: s,
        imagen: i
    }
    let url = 'https://agusange01.pythonanywhere.com/productos'
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    if (producto.nombre !== "" && producto.precio !== "" && producto.stock !== null && producto.imagen !== null) {
        fetch(url, options)
            .then(function () {
                alert("Grabado")
                window.location.href = "../index.html";
            })
            .catch(err => {
                alert("Error al grabar")
                console.error(err);
            })
    }
    else {
        alert("Debe completar todos los campos")
        window.location.href = "../newProduct.html";
    }
}

function cancel(){window.location.href="/";}