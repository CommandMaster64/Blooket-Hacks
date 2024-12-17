const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
function set_chest_cheat() {
    if (!!document.getElementsByClassName("styles__choice1___27uim-camelCase")[0]) {
        if (!document.getElementsByClassName("styles__choice1___27uim-camelCase")[0].innerHTML.includes(obj().state.choices[0].text)) {
            document.getElementsByClassName("styles__choice1___27uim-camelCase")[0].innerHTML += obj().state.choices[0].text;
        }
        if (!document.getElementsByClassName("styles__choice2___1aP2D-camelCase")[0].innerHTML.includes(obj().state.choices[1].text)) {
            document.getElementsByClassName("styles__choice2___1aP2D-camelCase")[0].innerHTML += obj().state.choices[1].text;
        }
        if (!document.getElementsByClassName("styles__choice3___2L6Q--camelCase")[0].innerHTML.includes(obj().state.choices[2].text)) {
            document.getElementsByClassName("styles__choice3___2L6Q--camelCase")[0].innerHTML += obj().state.choices[2].text;
        }
    }
}
setInterval(set_chest_cheat, 1);
