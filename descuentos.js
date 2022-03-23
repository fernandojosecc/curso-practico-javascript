const precioOriginal = 120;
const descuento = 15;
const coupons = [
    "FernandoDC_es_Superman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
]

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio*porcentajePrecioConDescuento)/100;

    return precioConDescuento;
}

function PriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue= inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue= inputCoupon.value;

    let descuento;
    switch(couponValue){
        case coupons[0]: //"FernandoDC_es_Superman"
        descuento=15;
        break;
        case coupons[1]: //"pero_no_le_digas_a_nadie"
        descuento=30;
        break;
        case coupons[2]: //"es_un_secreto"
        descuento=25;
        break;
    }
    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $"+precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// } );