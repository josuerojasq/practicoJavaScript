/* const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

// console.log("El precio original es " + precioOriginal);
// Otra manera de usar el console.log()
console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
}); */

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultPrice = document.getElementById("resultPrice");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
}

/** Aplicacion de Cupones
const coupons = [
    "JoeRojas",
    "Lucianita",
    "CarlitaCamila",
];*/
/** Array de cupones junto con sus descuentos */
const coupons = [
    {
        name: "JoeRojas",
        discount: 15,
    },
    {
        name: "Lucianita",
        discount: 30,
    },
    {
        name: "CarlitaCamila",
        discount: 25,
    },
];

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("inputPriceCoupon");
    const inputCoupon = document.getElementById("inputCoupon");
    const priceValue = inputPrice.value;
    const couponValue = inputCoupon.value;

    let descuento = 0;

    /* switch (couponValue) {
        case "JoeRojas":
            descuento = 15;
            break;
        case "Lucianita":
            descuento = 30;
            break;
        case "CarlitaCamila":
            descuento = 25;
            break;
    } */
    /** Otra alternativa al switch con array.includes
     * nos permite validar si un elemento ha sido almacenado en el array.*/
    /* if (!coupons.includes(couponValue)) {
        alert("El cupón \"" + couponValue + "\" no es válido");
    } else if (couponValue === "JoeRojas") {
        descuento = 15;
    } else if (couponValue === "Lucianita") {
        descuento = 30;
    } else if (couponValue === "CarlitaCamila"){
        descuento = 25;
    } */
    /** Alternativa 3 con el array de dos valores */
    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;
    };

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón \"" + couponValue + "\" no es válido");
    } else {
        const descuento = userCoupon.discount;
        const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("resultPriceCoupon");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;
    }

    /* Esta parte la ingresamos en el else del ultimo ejemplo
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultPrice = document.getElementById("resultPriceCoupon");
    resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento; */
}