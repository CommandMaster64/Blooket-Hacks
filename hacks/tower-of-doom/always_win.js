function set() {
    if (!!Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.enemyCard) {
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.enemyCard.strength = 0;
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.enemyCard.charisma = 0;
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.enemyCard.wisdom = 0;
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.myCard.strength = 999;
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.myCard.charisma = 999;
        Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.myCard.wisdom = 999;
    }
}
setInterval(set, 1);
