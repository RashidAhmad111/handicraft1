function searchOngoogle(){
    var searchQuery=document.getElementById('.searchinput').Value;
    var searchURL='https://www.google.com/search?q='+searchQuery;
window.open(searchURL,'self');
}
const batteryLevel=document.getElementById('batteryLevel');
navigator.getBattery().then(battery=>{
    const update =()=>{
        batteryLevel.textContent=` ${Math.round(battery.level *100)}%;`
    }
    update();
    battery.addEventListener('levelchange ',update)
});
