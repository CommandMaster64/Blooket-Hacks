const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function removeCustomers() {
    if (!!obj.state.customers) {
        for (let i = 0; i < obj.state.customers.length; i++) {
            if (!!obj.state.customers[i].order && !obj.state.customers[i].w) {
                obj.removeCustomer(i, 1);
                obj.state.customers[i].w = 1;
            }
        }
    }
}
setInterval(removeCustomers, 1);
