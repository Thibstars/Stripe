// Instantiate the horde
var horde = gremlins.createHorde();

//Specify the gremlin species
var clicker = gremlins.species.clicker().clickTypes(['click', 'dblclick', 'mouseover', 'mousedown', 'mouseup','mousemove', 'mouseout']);
var scroller = gremlins.species.scroller();

horde.gremlin(clicker);
horde.gremlin(scroller);

// horde.gremlin(gremlins.species.clicker();       // Clicker
// horde.gremlin(gremlins.species.scroller();      // Scroller
// horde.gremlin(gremlins.species.formFiller());   // Make sure to run on a page with a form
// horde.gremlin(gremlins.species.typer());        // Mobile inputs
// horde.gremlin(gremlins.species.toucher());      // Mobile inputs

// Custom gremlin
/*
horde.gremlin(function() {
    console.log("Test");
  });
  */

// Seed the randomizer (makes the attack repeatable)
horde.seed(1234);

// Code executing before unleashing the horde
horde.before(function startProfiler() {
    console.profile('gremlins');
});

// Code executing after unleashing the horde
horde.after(function stopProfiler() {
    console.profileEnd();
});

// Set the strategy to be applied to the horde
horde.strategy(gremlins.strategies.distribution()
    // .delay(50) // wait 50 ms between each action
    .distribution([0.3, 0.3, 0.3, 0.1]) // the first three gremlins have more chances to be executed than the last
);

// horde.strategy(gremlins.strategies.allTogether());

// Unleash the horde
horde.unleash({nb : 10000});