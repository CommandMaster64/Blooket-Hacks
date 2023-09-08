function killAll() {
    for (let i = 0; i < Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[1]._owner.stateNode.enemies.length; i++) {
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[1]._owner.stateNode.enemies[i].kill();
    }
}
setInterval(killAll, 1);
