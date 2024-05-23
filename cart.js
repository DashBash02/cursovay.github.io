const cartSide = document.querySelector(".cart")
let fio = document.querySelector("#fio")
let adress = document.querySelector("#adress")
let dostavka = document.querySelector("#dostavka")
let oplata = document.querySelector("#oplata")
let zakaz = document.querySelector("#zakaz")

console.log(cartSide);
const korzinaStorage = JSON.parse(localStorage.getItem("korzina") || "[]")

if (korzinaStorage.length) {
    korzinaStorage.forEach(el => {
        const {name, price} = el
        const newBlock1 = document.createElement('div')
        newBlock1.innerHTML = `<p>${name}</p> <div class="price"><p>${price}</p></div>`
        cartSide.appendChild(newBlock1)
    });

}

let buyers = {}

function Buyer(fio, adress, dostavka, oplata){
    this.fio = fio;
    this.adress = adress;
    this.dostavka = dostavka;
    this.oplata = oplata;
}

function createId(buyers){
    return Object.keys(buyers).length;
}

zakaz.addEventListener("click", () => {
    const fioBuyer = fio.value;
    const adressBuyer = adress.value;
    const dostavkaBuyer = dostavka.value;
    const oplataBuyer = oplata.value;

    const buyer = new Buyer(fioBuyer, adressBuyer, dostavkaBuyer, oplataBuyer);

    const buyerId = "Buyer" + createId(buyers);
    buyers[buyerId] = buyer;

    console.log(buyers);

    alert(`${fioBuyer}, спасибо за заказ!`);
})