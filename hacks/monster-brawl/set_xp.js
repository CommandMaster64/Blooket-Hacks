const setXP = (xp) => {
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.xp = xp;
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.totalXp = xp;
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.xp = xp;
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.totalXp = xp;
};
