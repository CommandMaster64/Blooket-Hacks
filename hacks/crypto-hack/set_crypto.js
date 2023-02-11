const set_crypto = (crypto) => {
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.crypto = crypto;
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.crypto2 = crypto;
};
