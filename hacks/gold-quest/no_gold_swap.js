const obj = () => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
};
obj().state.gold = "b";
obj().state.gold2 = "b";
obj().state.choices[0].type = "swap";
obj().state.choices[0].text = "swap";
