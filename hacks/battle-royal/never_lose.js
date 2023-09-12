const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function set_energy() {
    if (!!obj.state.winner) {
        obj.state.winner.energy = 5;
    }
}
setInterval(set_energy, 1);
