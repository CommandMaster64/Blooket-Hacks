for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions.length; i++) {
    if (Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].name == "darkEnergy") {
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.dmg = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.speed = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.knockback = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].rate = 0.1;
    }
    if (Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].name == "nut") {
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.dmg = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.speed = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.knockback = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.fireRate = 1;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.intervalRate = 1;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.numProjectiles = 99;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].rate = 0.1;
    }
    if (Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].name == "pizza") {
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.dmg = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.speed = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.knockback = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.fireRate = 1;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.intervalRate = 1;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].data.numProjectiles = 999;
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.levelUpOptions[i].rate = 0.1;
    }
}
