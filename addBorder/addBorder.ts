function addBorder(picture: string[]): string[] {
    
    const topLength = picture[0].length + 2;
    let wall = "";;
    for(let i = 0; i < topLength; i++){
        wall = wall.concat('*')
    }
    picture.push(wall);
    picture.unshift(wall);


    for(let i = 1; i < picture.length-1; i++){
        picture[i] = '*'.concat(picture[i], '*')
    }
    console.log(picture)
    return picture;

}

console.log(addBorder(["abc", "ded"]));