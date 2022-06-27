// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
                let missionTarget = document.getElementById("missionTarget");
                missionTarget.innerHTML = 
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if (validateInput(pilot) === "Number" || validateInput(copilot) === "Number"){
        alert("Invalid Entry. Pilot and Copilot names should be of type string");
        event.preventDefault();
        return;
   } else if (validateInput(fuelLevel)=== "Not a Number" || validateInput(cargoMass)=== "Not a Number"){
        alert("Invalid Entry. Fuel level and cargo mass should be numbers.");
        event.preventDefault();
        return;
   } 

   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   pilotStatus.innerHTML = `Pilot ${pilot} Ready`;
   copilotStatus.innerHTML = `Co-Pilot ${copilot} Ready`;

   if (Number(fuelLevel) < 10000 ){
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = `Fuel level is less than 10000 liters. There is not enough fuel for the journey.`;
        launchStatus.innerHTML = "Shuttle Not ready for launch."
        launchStatus.style.color = "red";
        event.preventDefault();
   };

    if (Number(cargoMass) > 10000){
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = `Mass is greater than 10000 kg. Too much mass for shuttle to take off.`;
        launchStatus.innerHTML = "Shuttle Not ready for launch."
        launchStatus.style.color = "red";
        event.preventDefault();
    };

    if (Number(fuelLevel) >= 10000 && Number(cargoMass) <= 10000){
        launchStatus.innerHTML = "Shuttle is ready for launch."
        launchStatus.style.color = "green";
       event.preventDefault();
    };

    
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let choice = Math.floor(Math.random()*planets.length);
    return planets[choice];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
