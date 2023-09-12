const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function restock() {
    if (!!obj.state.foods) {
        for (let i = 0; i < obj.state.foods.length; i++) {
            obj.state.foods[i].stock = 99;
        }
    }
}
setInterval(restock, 1);
