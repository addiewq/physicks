const rooms = [
    35,
    20,
    25,
    18,
    15,
    20,
    12,
    14
];

const pricePerSquareMeter = 192.38;
const wattsPerSquareMeter = 55;

let totalArea = 0;

for (let i = 0; i < rooms.length; i++) {
    totalArea += rooms[i];
}

let totalPower = totalArea * wattsPerSquareMeter;

let secondsInMonth = 30 * 24 * 60 * 60;

let energy = totalPower * secondsInMonth;

let monthlyPrice = totalArea * pricePerSquareMeter;

let sixMonthPrice = monthlyPrice * 6;

document.getElementById("area").textContent =
    totalArea + " m²";

document.getElementById("power").textContent =
    totalPower + " W";

document.getElementById("energyValue").textContent =
    (energy / 1000).toLocaleString() + " kJ";

document.getElementById("monthPrice").textContent =
    monthlyPrice.toLocaleString() + " ₸";

document.getElementById("sixMonthPrice").textContent =
    sixMonthPrice.toLocaleString() + " ₸";