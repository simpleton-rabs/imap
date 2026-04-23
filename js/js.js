
//constant for picture
let pic = document.getElementById("picture");
console.log(pic);

//constant for start boulder and behaviours
const start_boulders = document.getElementById("startboulders");
console.log(start_boulders);
start_boulders.onmouseover = () => {
        pic.src = "../pictures/startboulders.gif"
}
start_boulders.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//howtobuild
const build = document.getElementById("howtobuild");
console.log(build);
build.onmouseover = () => {
        pic.src = "../pictures/howtobuild.jpg"
}
build.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//smallboulders
const small_boulders = document.getElementById("smallboulders");
console.log(small_boulders);
small_boulders.onmouseover = () => {
        pic.src = "../pictures/smallboulders.jpg"
}
small_boulders.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//createinnovate
const create_innovate = document.getElementById("createinnovate");
console.log(create_innovate);
create_innovate.onmouseover = () => {
        pic.src = "../pictures/createinnovate.jpg"
}
create_innovate.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//howtothink
const how_think = document.getElementById("howtothink");
console.log(how_think);
how_think.onmouseover = () => {
        pic.src = "../pictures/howtothink.jpg"
}
how_think.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//collaborate
const collab = document.getElementById("collaborate");
console.log(collab);
collab.onmouseover = () => {
        pic.src = "../pictures/collab.jpg"
}
collab.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//discovering
const discover = document.getElementById("discovering");
console.log(discover);
discover.onmouseover = () => {
        pic.src = "../pictures/discover.gif"
}
discover.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}

//endgoal
const end_goal = document.getElementById("endgoal");
console.log(end_goal);
end_goal.onmouseover = () => {
        pic.src = "../pictures/end.gif"
}
end_goal.onmouseleave = () => {
        pic.src = "../pictures/spaceship.gif"
}