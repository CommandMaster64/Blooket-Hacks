function toast() {
    if (!!Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers[0].order) {
        for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers.length; i++) {
            Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers[0].order.Toast = 0;
        }
    }
}
setInterval(toast, 1);
