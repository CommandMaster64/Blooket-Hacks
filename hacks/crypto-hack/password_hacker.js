const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
for (let i = 0; i < document.getElementsByClassName("styles__button___2OOoS-camelCase").length; i++) {
    if (document.getElementsByClassName("styles__button___2OOoS-camelCase")[i].innerText == obj().state.correctPassword) {
        document.getElementsByClassName("styles__button___2OOoS-camelCase")[i].click();
    }
}
