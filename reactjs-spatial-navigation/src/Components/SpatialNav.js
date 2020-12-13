let GlobalConfig = {
    selected: "",
    defaultFocus: ""
}

let KEYMAP = {
    "37": "left",
    "38": "up",
    "39": "right",
    "40": "down"
}

let _ready = false;

// let direction = KEYMAP[keyEvent.keyCode];

function onKeyDown(e) {
    console.log(KEYMAP[e.keyCode]);
}

function onKeyUp(e) {
    console.log(KEYMAP[e.keyCode]);
}

function onFocus(e){
    console.log(e);
}

let SpatialNav = {
    initialize: function(config){
        if(!_ready){
            if(config){
                GlobalConfig = config;
            };
            window.addEventListener("keydown", onKeyDown);
            window.addEventListener("keyup", onKeyUp);
            window.addEventListener("focus", onFocus, true);
            _ready = true;

            console.log("Navigation initialized");
        }
    },
    
    terminate: function(){
        window.removeEventListener("keydown", onKeyDown);
        window.removeEventListener("keyup", onKeyUp);
        window.removeEventListener("focus", onFocus, true);
        _ready = false;
        console.log("Navigation Terminated")
    }
}

export default SpatialNav;