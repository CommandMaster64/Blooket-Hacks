const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
obj().state.towers[0].stats.dmg = 9999;
obj().state.towers[0].stats.fireRate = 100;
obj().state.towers[0].stats.maxTargets = 9999;
obj().state.towers[0].stats.range = 9999;
