const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function fish() {
    if (!!obj.state.fish) {
        obj.state.fish = {isSpecial: false, name: "Frog", rarity: "Hacks", tier: "Hacks", weight: 99999};
    }
}
setInterval(fish, 1);
