

let GlobalConfig = {
    selected: "",
    defaultFocus: "",
    candidates: {}
}

let KEYMAP = {
    "37": "left",
    "38": "up",
    "39": "right",
    "40": "down",
    "13": "enter"
}

let _ready = false;

function getCandidates() {
    GlobalConfig.candidates = document.getElementsByClassName("focusItem");
}

function getCandidatePostion() {
    var candidates = GlobalConfig.candidates
    var candidatePostion = []

    for (let index = 0; index < candidates.length; index++) {
        candidatePostion.push(getRectPosition(candidates[index]));
    }
    return candidatePostion;
}

function getRectPosition(e){
    var currRect = e.getBoundingClientRect();
    var rect = {
        left: currRect.left,
        top: currRect.top,
        right: currRect.right,
        bottom: currRect.bottom,
        width: currRect.width,
        height: currRect.height
    };
    rect.element = e;
    rect.center = {
        x: rect.left + Math.floor(rect.width / 2),
        y: rect.top + Math.floor(rect.height / 2)
    }
    rect.center.left = rect.center.right = rect.center.x;
    rect.center.top = rect.center.bottom = rect.center.y;

    return rect;
}

function onKeyDown(e) {
    console.log(`${KEYMAP[e.keyCode]} - ${e.keyCode}`);
    console.log(getCandidatePostion())
}

function onKeyUp(e) {
    console.log(`${KEYMAP[e.keyCode]} - ${e.keyCode}`);
}

function onFocus(){
    getRectPosition(document.activeElement);
}

let SpatialNav = {
    initialize: function(config){
        if(!_ready){
            if(config){
                GlobalConfig = config;
            };
            window.addEventListener("keydown", onKeyDown);
            // window.addEventListener("keyup", onKeyUp);
            window.addEventListener("focus", onFocus, true);
            _ready = true;
            getCandidates();
            console.log("Navigation initialized");
        }
    },
    
    terminate: function(){
        window.removeEventListener("keydown", onKeyDown);
        // window.removeEventListener("keyup", onKeyUp);
        window.removeEventListener("focus", onFocus, true);
        _ready = false;
        console.log("Navigation Terminated")
    }
}

export default SpatialNav;