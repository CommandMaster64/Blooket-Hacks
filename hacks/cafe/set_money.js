const setMoney = (money) => {
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.cafeCash = money;
};
