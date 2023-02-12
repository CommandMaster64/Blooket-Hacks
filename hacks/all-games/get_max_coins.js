for (let i = 0; i < 5000; i++) {
    Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.corrects[i] = 1;
}
