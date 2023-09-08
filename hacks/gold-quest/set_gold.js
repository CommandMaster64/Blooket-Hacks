const set_gold = (gold) => {
    Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.gold = gold;
    Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.gold2 = gold;
};
