const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
function answer() {
    if (!!document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase")[0]) {
        for (let i = 0; i < document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase").length; i++) {
            if (document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase")[i].innerText == obj().props.client.question.correctAnswers[0]) {
                document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase")[i].click();
            }
        }
    }
    if (!!document.getElementsByClassName("arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase")[0]) {
        document.getElementsByClassName("arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase")[0].click();
    }
}
setInterval(answer, 1);
