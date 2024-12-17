const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
for (let i = 0; i < obj().state.choices.length; i++) {
    obj().state.choices[i].cash = [999999];
    obj().state.choices[i].time = [0.01];
    obj().state.choices[i].price = [];
}
for (let i = 0; i < obj().state.blooks.length; i++) {
    obj().state.blooks[i].cash = [999999];
    obj().state.blooks[i].time = [0.01];
    obj().state.blooks[i].price = [];
}
