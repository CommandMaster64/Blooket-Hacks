const obj=()=>{for(i=0;i<document.getElementsByTagName("*").length;i++){try{for(j=0;j<Object.values(document.getElementsByTagName("*")[i]).length;j++){try{for(k=0;k<Object.values(document.getElementsByTagName("*")[i])[j].children.length;k++){try{return(Object.values(document.getElementsByTagName("*")[i])[j].children[k].props.children._owner.stateNode)}catch(err){}}}catch(err){}}}catch(err){}}};
for (let i = 0; i < obj().state.levelUpOptions.length; i++) {
    if (obj().state.levelUpOptions[i].name == "darkEnergy") {
        obj().state.levelUpOptions[i].data.dmg = 999;
        obj().state.levelUpOptions[i].data.speed = 999;
        obj().state.levelUpOptions[i].data.knockback = 999;
        obj().state.levelUpOptions[i].rate = 0.1;
    }
    if (obj().state.levelUpOptions[i].name == "nut") {
        obj().state.levelUpOptions[i].data.dmg = 999;
        obj().state.levelUpOptions[i].data.speed = 999;
        obj().state.levelUpOptions[i].data.knockback = 999;
        obj().state.levelUpOptions[i].data.fireRate = 1;
        obj().state.levelUpOptions[i].data.intervalRate = 1;
        obj().state.levelUpOptions[i].data.numProjectiles = 99;
        obj().state.levelUpOptions[i].rate = 0.1;
    }
    if (obj().state.levelUpOptions[i].name == "pizza") {
        obj().state.levelUpOptions[i].data.dmg = 999;
        obj().state.levelUpOptions[i].data.speed = 999;
        obj().state.levelUpOptions[i].data.knockback = 999;
        obj().state.levelUpOptions[i].data.fireRate = 1;
        obj().state.levelUpOptions[i].data.intervalRate = 1;
        obj().state.levelUpOptions[i].data.numProjectiles = 999;
        obj().state.levelUpOptions[i].rate = 0.1;
    }
    if (obj().state.levelUpOptions[i].name == "horseshoe") {
        obj().state.levelUpOptions[i].data.dmg = 999;
        obj().state.levelUpOptions[i].data.speed = 999;
        obj().state.levelUpOptions[i].data.knockback = 999;
        obj().state.levelUpOptions[i].data.fireRate = 1;
        obj().state.levelUpOptions[i].data.intervalRate = 1;
        obj().state.levelUpOptions[i].data.numProjectiles = 99;
        obj().state.levelUpOptions[i].data.maxTargets = 999;
        obj().state.levelUpOptions[i].rate = 0.1;
    }
    if (obj().state.levelUpOptions[i].name == "bubble") {
        obj().state.levelUpOptions[i].data.dmg = 999;
        obj().state.levelUpOptions[i].data.speed = 999;
        obj().state.levelUpOptions[i].data.knockback = 999;
        obj().state.levelUpOptions[i].data.fireRate = 1;
        obj().state.levelUpOptions[i].data.intervalRate = 1;
        obj().state.levelUpOptions[i].data.numProjectiles = 99;
        obj().state.levelUpOptions[i].data.maxTargets = 999;
        obj().state.levelUpOptions[i].rate = 0.1;
    }
}
