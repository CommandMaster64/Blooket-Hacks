const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
function removeCustomers() {
    if (!!obj().state.customers) {
        for (let i = 0; i < obj().state.customers.length; i++) {
            if (!!obj().state.customers[i].order && !obj().state.customers[i].w) {
                obj().removeCustomer(i, 1);
                obj().state.customers[i].w = 1;
            }
        }
    }
}
setInterval(removeCustomers, 1);
