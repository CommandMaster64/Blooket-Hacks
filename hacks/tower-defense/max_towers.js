const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
for (let i = 0; i < obj.towers.length; i++) {
    obj.towers[i].range = 999;
    obj.towers[i].damage = 999;
    obj.towers[i].fullCd = 0;
    obj.p5._targetFrameRate = 999;
}
