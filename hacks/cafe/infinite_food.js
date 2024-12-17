const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
function restock() {
    if (!!obj().state.foods) {
        for (let i = 0; i < obj().state.foods.length; i++) {
            obj().state.foods[i].stock = 99;
        }
    }
}
setInterval(restock, 1);
