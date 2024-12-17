const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
for (let i = 0; i < document.getElementsByClassName("styles__button___2OOoS-camelCase").length; i++) {
    if (document.getElementsByClassName("styles__button___2OOoS-camelCase")[i].innerText == obj().state.correctPassword) {
        document.getElementsByClassName("styles__button___2OOoS-camelCase")[i].click();
    }
}
