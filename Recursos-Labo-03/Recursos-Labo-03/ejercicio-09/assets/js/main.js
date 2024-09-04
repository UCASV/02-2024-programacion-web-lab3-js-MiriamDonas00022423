const filterAvailableProducts = (products) => {
    return products.filter(product =>
        product.stok > 0
    )
}

const showProducts = (/*recibe*/) => {
    //code
}

const main = () => {
    const products = [{ nombre: "silla", stok: 2 },
    { nombre: "cama", stok: 4 },
    { nombre: "pelota cuadrada", stok: 1 },
    { nombre: "botella sin fondo", stok: 6 },]

    const result = filterAvailableProducts(products);
    console.log(result);
}

main();
