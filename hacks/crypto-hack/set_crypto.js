const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
const set_crypto = (crypto) => {
    obj().state.crypto = crypto;
    obj().state.crypto2 = crypto;
};
