function set_chest_cheat() {
    if (!!document.getElementsByClassName("styles__choice1___27uim-camelCase")[0]) {
        if (!document.getElementsByClassName("styles__choice1___27uim-camelCase")[0].innerHTML.includes(Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.choices[0].text)) {
            document.getElementsByClassName("styles__choice1___27uim-camelCase")[0].innerHTML += Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.choices[0].text;
        }
        if (!document.getElementsByClassName("styles__choice2___1aP2D-camelCase")[0].innerHTML.includes(Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.choices[1].text)) {
            document.getElementsByClassName("styles__choice2___1aP2D-camelCase")[0].innerHTML += Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.choices[1].text;
        }
        if (!document.getElementsByClassName("styles__choice3___2L6Q--camelCase")[0].innerHTML.includes(Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.choices[2].text)) {
            document.getElementsByClassName("styles__choice3___2L6Q--camelCase")[0].innerHTML += Object.values(document.querySelector("#aeffdabedffdb > div > div"))[1].children[0]._owner.stateNode.state.choices[2].text;
        }
    }
}
setInterval(set_chest_cheat, 1);
