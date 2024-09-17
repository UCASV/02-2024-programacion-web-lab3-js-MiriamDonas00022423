const filterAvailableProducts = (products) => {
    // Validar
    if (!Array.isArray(products)) return [];

    return products.filter(product =>
        // Validar
        typeof product.stock === 'number' && product.stock > 0
    );
}

//Mostrar productos
const showProducts = (products) => {
    if (products.length > 0) {
        products.forEach(product => {
            alert(`Producto: ${product.name}, Stock: ${product.stock}`)
        });
    } else {
        alert("No tenemos productos :(")
    }
}

const main = () => {
    //Arreglo de productos
    const produtcs = [
        { name: "chair", stock: 2 },
        { name: "bed", stock: 4 },
        { name: "square ball", stock: 0 },
        { name: "bottle wihtout end", stock: 3 }
    ]

    //Guarda el resultado de la funcion
    const result = filterAvailableProducts(produtcs)

    console.log(result)

    showProducts(result)

    //Muestra el resultado
    console.log(`El numero ingresado es: $`)
}

main();