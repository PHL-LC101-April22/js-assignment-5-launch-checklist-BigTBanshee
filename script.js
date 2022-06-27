// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    let launchStatus = document.getElementById("launchStatus");

    form.addEventListener("submit", function(event){
        pilotName = document.querySelector("input[name=pilotName]").value;
        copilotName = document.querySelector("input[name=copilotName]").value;
        fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        cargoMass = document.querySelector("input[name=cargoMass]").value;
                
        if (pilotName === "" || copilotName ==="" || fuelLevel=== "" || cargoMass === ""){
            alert("All fields are required!");
            event.preventDefault();
        } else { 
            formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass)
        }; 
    });

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment, call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
        let planetChoice = pickPlanet(listedPlanets);
        console.log(planetChoice);
        addDestinationInfo(document, planetChoice.name, planetChoice.diameter, planetChoice.star, planetChoice.distance, planetChoice.moons, planetChoice.image);
    });

   
});