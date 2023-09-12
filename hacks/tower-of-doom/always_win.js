const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function set() {
    if (!!obj.state.enemyCard) {
        obj.state.enemyCard.strength = 0;
        obj.state.enemyCard.charisma = 0;
        obj.state.enemyCard.wisdom = 0;
        obj.state.myCard.strength = 999;
        obj.state.myCard.charisma = 999;
        obj.state.myCard.wisdom = 999;
    }
}
setInterval(set, 1);
