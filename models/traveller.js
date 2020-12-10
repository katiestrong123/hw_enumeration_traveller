const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const longJourneys = this.journeys.filter(journey => journey.distance >= minDistance);
  return longJourneys;
};



Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = 0
  this.journeys.forEach((journey ) => {
    total += journey.distance;
  });
  return total;
};
    

Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.map((journey) => {
    return journey.transport;
  });
};


module.exports = Traveller;

 