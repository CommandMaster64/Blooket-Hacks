function fish() {
    if (!!Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.fish) {
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.fish = {isSpecial: false, name: "Frog", rarity: "Hacks", tier: "Hacks", weight: 99999};
    }
}
setInterval(fish, 1);
