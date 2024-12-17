const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
function set() {
    if (!!obj().state.enemyCard) {
        obj().state.enemyCard.strength = 0;
        obj().state.enemyCard.charisma = 0;
        obj().state.enemyCard.wisdom = 0;
        obj().state.myCard.strength = 999;
        obj().state.myCard.charisma = 999;
        obj().state.myCard.wisdom = 999;
    }
}
setInterval(set, 1);
