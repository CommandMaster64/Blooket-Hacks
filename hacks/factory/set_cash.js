const setCash = (cash) => {
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.cash = cash;
};
