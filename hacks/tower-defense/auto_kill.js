const obj = (() => {
    return Object.values(document.getElementsByClassName("arts__body___3acI_-camelCase")[0])[1].children[0]._owner.stateNode;
})();
function killAll() {
    for (let i = 0; i < obj.enemies.length; i++) {
        obj.enemies[i].kill();
    }
}
setInterval(killAll, 1);
