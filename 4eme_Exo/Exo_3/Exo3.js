function motPlusLong(tableauMots){
    let length = 0
    let motLong;
    for (i=0; i < tableauMots.length; i++){
        if (tableauMots[i].length > length){
            length = tableauMots[i].length;
            motLong = tableauMots[i]
        }
    }
    return motLong
}

let x =["un","mot","long","ici"]

console.log(motPlusLong(x));