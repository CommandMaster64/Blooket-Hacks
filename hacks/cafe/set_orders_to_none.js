function toast() {
    if (!!Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers) {
        for (let i = 0; i < Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers.length; i++) {
            if (!!Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers[i].order) {
                Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner.stateNode.state.customers[i].order.Toast = 0;
            }
        }
    }
}
setInterval(toast, 1);
