const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function set_chest_cheat() {
    if (!!document.getElementsByClassName("styles__choice1___27uim-camelCase")[0]) {
        if (!document.getElementsByClassName("styles__choice1___27uim-camelCase")[0].innerHTML.includes(obj.state.choices[0].text)) {
            document.getElementsByClassName("styles__choice1___27uim-camelCase")[0].innerHTML += obj.state.choices[0].text;
        }
        if (!document.getElementsByClassName("styles__choice2___1aP2D-camelCase")[0].innerHTML.includes(obj.state.choices[1].text)) {
            document.getElementsByClassName("styles__choice2___1aP2D-camelCase")[0].innerHTML += obj.state.choices[1].text;
        }
        if (!document.getElementsByClassName("styles__choice3___2L6Q--camelCase")[0].innerHTML.includes(obj.state.choices[2].text)) {
            document.getElementsByClassName("styles__choice3___2L6Q--camelCase")[0].innerHTML += obj.state.choices[2].text;
        }
    }
}
setInterval(set_chest_cheat, 1);
