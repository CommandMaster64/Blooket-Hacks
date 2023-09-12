const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function setThings() {
    obj.state.happiness = 999;
    obj.state.materials = 999;
    obj.state.people = 999;
    obj.state.gold = 999;
}
setInterval(setThings, 1);
