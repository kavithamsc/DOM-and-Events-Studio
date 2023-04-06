// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(event) {
    let button_takeoff = document.getElementById("takeoff");
    let button_landing = document.getElementById("landing");
    let flightStatusText = document.getElementById("flightStatus");
    let flightStatusBg = document.getElementById("shuttleBackground");
    // let originalflightStatusBg =
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");
    button_takeoff.addEventListener("click",() => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if(response) {
            flightStatusText.innerText = "Shuttle in flight."
            // flightStatusText.value = "";
            flightStatusBg.style.backgroundColor = "blue";
            // flightStatusBg.style["background-color"] = "blue";
            // shuttleHeight.innerHTML += Number(10000);
            let currentShuttleHeight = Number(spaceShuttleHeight.innerHTML);
            spaceShuttleHeight.innerHTML = currentShuttleHeight + 10000;
        }
    })
    button_landing.addEventListener('click',function(event){
window.alert('The shuttle is landing. Landing gear engaged.')
    flightStatusBg.innerHTML = 'The shuttle has landed'
        flightStatusBg.style.backgroundColor = "green"; 
        spaceShuttleHeight.innerHTML= 0;
    })
});