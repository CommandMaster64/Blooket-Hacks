function set_energy() {
    if (!!Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.winner) {
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.winner.energy = 5;
    }
}
setInterval(set_energy, 1);
