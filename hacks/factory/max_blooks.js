const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
for (let i = 0; i < obj().state.choices.length; i++) {
    obj().state.choices[i].cash = [999999];
    obj().state.choices[i].time = [0.01];
    obj().state.choices[i].price = [];
}
for (let i = 0; i < obj().state.blooks.length; i++) {
    obj().state.blooks[i].cash = [999999];
    obj().state.blooks[i].time = [0.01];
    obj().state.blooks[i].price = [];
}
