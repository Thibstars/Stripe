function hideAction() {
    gremlins.species.clicker().clickTypes(['click', 'dblclick', 'mouseover', 'mousedown', 'mouseup','mousemove', 'mouseout'])
        .showAction(function(x, y) {
            /*
            By default, the clicker gremlin shows its action by a red circle
            overriding showAction() with an empty function makes the gremlin action invisible
             */
        })
    gremlins.species.scroller().showAction(function(x, y) {
        /*
        By default, the clicker gremlin shows its action by a red circle
        overriding showAction() with an empty function makes the gremlin action invisible
         */
    })
}

function hideAction(species) {
    species.showAction(function(x, y) {
        /*
        By default, the clicker gremlin shows its action by a red circle
        overriding showAction() with an empty function makes the gremlin action invisible
         */
    })
}

// Checks if the current document contains at least one input field.
function hasInputField() {
    return document.getElementsByTagName("input")[0] != null;
}