const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
const setXP = (xp) => {
    obj.state.xp = xp;
    obj.state.totalXp = xp;
    obj.xp = xp;
    obj.totalXp = xp;
};
