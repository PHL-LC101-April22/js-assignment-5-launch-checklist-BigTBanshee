// Write your JavaScript code here!

//const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {

    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        let list = document.getElementById("faultyItems");
        const launchStatus = document.getElementById("launchStatus");
        if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        } else {
            if (formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) === "Error") {
                event.preventDefault();
            } else {
                launchStatus.innerHTML = "Shuttle is Ready for Launch";
                launchStatus.style.color = "green";
                event.preventDefault();
            };
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
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetChoice = pickPlanet(listedPlanets);
        console.log(planetChoice);
        addDestinationInfo(document, planetChoice.name, planetChoice.diameter, planetChoice.star, planetChoice.distance, planetChoice.moons, planetChoice.image);
    });

});

