for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.items.length; i++) {
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.items[i] = 5;
}
