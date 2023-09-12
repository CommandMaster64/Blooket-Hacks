const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
const set_gold = (gold) => {
    obj().state.gold = gold;
    obj().state.gold2 = gold;
};
