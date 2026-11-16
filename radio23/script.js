
const stations = document.getElementsByName("radiostation");
let resultId = document.getElementById("result");
console.log("Stations: "+stations)
console.dir(stations);
console.log("Length: "+stations.length);
for (let i=0; i<stations.length; i++) {
    //console.log("["+i+"]: "+stations[i]);
    console.log("[" + i + "]: " + stations[i].value);

}

function updateResult() {
    let indexSelect = 0;
    for (let i = 0; i < stations.length; i++) {
        if (stations[i].checked) {
            indexSelect = i;
        }
    }
   
    resultId.textContent = "Выбрана радиостанция: " + stations[indexSelect].value;
}


updateResult();


for (let i = 0; i < stations.length; i++) {
    stations[i].addEventListener("change", updateResult);
}