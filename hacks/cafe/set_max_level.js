const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
for (let i = 0; i < Object.keys(obj.state.items).length; i++) {
    obj.state.items[Object.keys(obj.state.items)[i]] = 5;
}
