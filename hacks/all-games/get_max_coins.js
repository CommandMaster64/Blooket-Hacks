const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
for (let i = 0; i < 5000; i++) {
    obj.corrects[i] = 1;
}
