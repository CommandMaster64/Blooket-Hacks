function removeCustomers() {
    if (!!Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.customers) {
        for (let i = 0; i < Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.customers.length; i++) {
            if (!!Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.customers[i].order && !Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.customers[i].w) {
                Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.removeCustomer(i, 1);
                Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.customers[i].w = 1;
            }
        }
    }
}
setInterval(removeCustomers, 1);
