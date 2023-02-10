for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.towers.length; i++) {
    Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.towers[i].range = 999;
    Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.towers[i].damage = 999;
}
