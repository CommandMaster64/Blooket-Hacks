const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
const setMoney = (money) => {
    obj().state.cafeCash = money;
};
