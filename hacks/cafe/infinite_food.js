const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function restock() {
    if (!!obj.children[0]._owner.stateNode.state.foods) {
        for (let i = 0; i < obj.children[0]._owner.stateNode.state.foods.length; i++) {
            obj.children[0]._owner.stateNode.state.foods[i].stock = 99;
        }
    }
}
setInterval(restock, 1);
