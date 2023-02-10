function answer() {
    if (!!document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase")[0]) {
        for (let i = 0; i < document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase").length; i++) {
            if (document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase")[i].innerText == Object.values(document.querySelector("#app > div > div"))[1].children[1]._owner.stateNode.state.question.correctAnswers[0]) {
                document.getElementsByClassName("styles__answerContainer___3WS-k-camelCase")[i].click();
            }
        }
    }
    if (!!document.getElementsByClassName("arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase")[0]) {
        document.getElementsByClassName("arts__regularBody___1TM6E-camelCase styles__background___2GulD-camelCase")[0].click();
    }
}
setInterval(answer, 1);
