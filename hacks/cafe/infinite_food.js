function restock() {
    for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.foods.length; i++) {
        Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.foods[i].stock = 99;
    }
}
setInterval(restock, 1);
