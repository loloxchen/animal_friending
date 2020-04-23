console.log("welcome to Animal Friending, target Panda");

window.addEventListener("load", start);

console.log("love Apple, Hate cherry, meh Peach");

let meterValue = 50;
let iconPosition = 9;
let lives = 3;

function start() {
    console.log("start");
    startApple1();
    startApple2();
    startCherry1();
    startCherry2();
    startPeach1();
    startPeach2();
}

function startApple1() {
    console.log("startApple1");
    //    document.querySelector("#apple_container1").removeEventListener("mousedown", apple1Clicked);
    document.querySelector("#apple_container1").classList.add("falling");
    document.querySelector("#apple_container1").addEventListener("mousedown", apple1Clicked);
    document.querySelector("#apple_container1").addEventListener("animationend", apple1ReachBottom);

}

function apple1Clicked() {
    console.log("apple1Clicked");
    document.querySelector("#apple_container1").removeEventListener("mousedown", apple1Clicked);

    //pause the falling and add zoom effect;
    document.querySelector("#apple_container1").classList.add("pause");
    document.querySelector("#apple_container1 .apple_sprite").classList.add("zoom");

    //add meter value
    meterValue += 5;

    //move meter coin
    console.log(meterValue);
    iconPosition = meterValue * 0.08 + 5;
    console.log(iconPosition);
    document.querySelector("#coin_container").style.left = iconPosition + "vw";

    // check current meter value with if;
    if (meterValue < 100) {
        document.querySelector("#apple_container1 .apple_sprite").addEventListener("animationend", apple1Restart);
    } else {
        levelComplete();
    }

}



function apple1Restart() {
    console.log("apple1Restart");
    document.querySelector("#apple_container1 .apple_sprite").removeEventListener("animationend", apple1Restart);
    document.querySelector("#apple_container1 .apple_sprite").classList.remove("zoom");

    //restart falling from top
    document.querySelector("#apple_container1").classList.remove("pause");
    document.querySelector("#apple_container1").classList.remove("falling");
    document.querySelector("#apple_container1").offsetHeight;
    document.querySelector("#apple_container1").classList.add("falling");
    //randomise speed of apple1 that is clicked
    document.querySelector("#apple_container1").classList.remove("speed1");
    document.querySelector("#apple_container1").classList.remove("speed2");
    document.querySelector("#apple_container1").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#apple_container1").classList.add("speed" + speed);

    document.querySelector("#apple_container1").addEventListener("mousedown", apple1Clicked);

}

function apple1ReachBottom() {
    console.log("apple 1 has rached bottom");
    //somwhoe if include below line, the apple no longer appear afte 1st time
    //document.querySelector("#apple_container1").removeEventListener("animationend", apple1ReachBottom);

    //restart falling from top
    document.querySelector("#apple_container1").classList.remove("falling");
    document.querySelector("#apple_container1").offsetHeight;
    document.querySelector("#apple_container1").classList.add("falling");

    //randomising drop position;
    document.querySelector("#apple_container1").style.left = Math.floor((Math.random() * 70) + 20) +
        "vw";

    //randomise speed of apple1 that reached bottom
    document.querySelector("#apple_container1").classList.remove("speed1");
    document.querySelector("#apple_container1").classList.remove("speed2");
    document.querySelector("#apple_container1").classList.remove("speed3");

    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#apple_container1").classList.add("speed" + speed);
    document.querySelector("#apple_container1").addEventListener("mousedown", apple1Clicked);

}


function startApple2() {
    console.log("startApple1");
    document.querySelector("#apple_container2").classList.add("falling");
    document.querySelector("#cherry_container1").classList.add("delay2");

    document.querySelector("#apple_container2").addEventListener("mousedown", apple2Clicked);
    document.querySelector("#apple_container2").addEventListener("animationend", apple2ReachBottom);

}

function apple2Clicked() {
    console.log("apple2Clicked");
    document.querySelector("#apple_container2").removeEventListener("mousedown", apple1Clicked);
    document.querySelector("#apple_container2").classList.add("pause");
    document.querySelector("#apple_container2 .apple_sprite").classList.add("zoom");

    //add metervalue
    meterValue += 5;

    //move meter coin
    console.log(meterValue);
    iconPosition = meterValue * 0.08 + 5;
    console.log(iconPosition);
    document.querySelector("#coin_container").style.left = iconPosition + "vw";

    // check current meter value with if;
    if (meterValue < 100) {
        document.querySelector("#apple_container2 .apple_sprite").addEventListener("animationend", apple2Restart);
    } else {
        levelComplete();
    }


}


function apple2Restart() {
    console.log("apple2Restart");
    document.querySelector("#apple_container2 .apple_sprite").removeEventListener("animationend", apple2Restart);
    document.querySelector("#apple_container2 .apple_sprite").classList.remove("zoom");

    //restart falling from top
    document.querySelector("#apple_container2").classList.remove("pause");
    document.querySelector("#apple_container2").classList.remove("falling");
    document.querySelector("#apple_container2").offsetHeight;
    document.querySelector("#apple_container2").classList.add("falling");

    //randomising drop position;
    document.querySelector("#apple_container2").style.left = Math.floor((Math.random() * 80) + 20) +
        "vw";

    //randomise speed of apple2 that is clicked
    document.querySelector("#apple_container2").classList.remove("speed1");
    document.querySelector("#apple_container2").classList.remove("speed2");
    document.querySelector("#apple_container2").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#apple_container2").classList.add("speed" + speed);

    document.querySelector("#apple_container2").addEventListener("mousedown", apple2Clicked);

}

function apple2ReachBottom() {
    console.log("apple 2 has rached bottom");
    //somwhoe if include below line, the apple no longer appear afte 1st time
    //document.querySelector("#apple_container2").removeEventListener("animationend", apple2ReachBottom);

    //restart falling from top
    document.querySelector("#apple_container2").classList.remove("falling");
    document.querySelector("#apple_container2").offsetHeight;
    document.querySelector("#apple_container2").classList.add("falling");

    //randomising drop position;
    document.querySelector("#apple_container2").style.left = Math.floor((Math.random() * 70) + 20) +
        "vw";


    //randomise speed of apple2 that reached bottom
    document.querySelector("#apple_container2").classList.remove("speed1");
    document.querySelector("#apple_container2").classList.remove("speed2");
    document.querySelector("#apple_container2").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#apple_container2").classList.add("speed" + speed);
    document.querySelector("#apple_container2").addEventListener("mousedown", apple1Clicked);

}

function startCherry1() {
    console.log("startCherry1");
    document.querySelector("#cherry_container1").classList.add("falling");
    document.querySelector("#cherry_container1").classList.add("delay1");

    document.querySelector("#cherry_container1").addEventListener("mousedown", cherry1Clicked);
    document.querySelector("#cherry_container1").addEventListener("animationend", cherry1ReachBottom);


}


function cherry1Clicked() {
    console.log("cherry1Clicked");
    document.querySelector("#cherry_container1").removeEventListener("mousedown", cherry1Clicked);
    document.querySelector("#cherry_container1").classList.add("pause");
    document.querySelector("#cherry_container1 .cherry_sprite").classList.add("zoom");

    //    document.querySelector("#cherry_container1 .cherry_sprite").addEventListener("animationend", cherry1Restart);

    //add meter value;
    meterValue -= 10;
    console.log(meterValue);
    //move meter coin;
    iconPosition = meterValue * 0.08 + 5;
    console.log(iconPosition);
    document.querySelector("#coin_container").style.left = iconPosition + "vw";
    //reduce lives
    lives--;
    console.log("lose lives");
    console.log(lives);
    document.querySelector("#heart" + (lives + 1)).classList.add("skull");

    // check current meter value with if;
    if (lives < 1) {
        gameover();

    } else {
        document.querySelector("#cherry_container1 .cherry_sprite").addEventListener("animationend", cherry1Restart);

    }

}


function cherry1Restart() {
    console.log("cherry1Restart");
    document.querySelector("#cherry_container1 .cherry_sprite").removeEventListener("animationend", cherry1Restart);
    document.querySelector("#cherry_container1 .cherry_sprite").classList.remove("zoom");

    //restart falling from top
    document.querySelector("#cherry_container1").classList.remove("pause");
    document.querySelector("#cherry_container1").classList.remove("falling");
    document.querySelector("#cherry_container1").offsetHeight;
    document.querySelector("#cherry_container1").classList.add("falling");
    //randomise speed of cherry1 that is clicked
    document.querySelector("#cherry_container1").classList.remove("speed1");
    document.querySelector("#cherry_container1").classList.remove("speed2");
    document.querySelector("#cherry_container1").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#cherry_container1").classList.add("speed" + speed);

    document.querySelector("#cherry_container1").addEventListener("mousedown", cherry1Clicked);

}


function cherry1ReachBottom() {
    console.log("cherry 1 has rached bottom");
    //somwhoe if include below line, the cherry no longer appear afte 1st time
    //document.querySelector("#cherry_container1").removeEventListener("animationend", cherry1ReachBottom);

    //restart falling from top
    document.querySelector("#cherry_container1").classList.remove("falling");
    document.querySelector("#cherry_container1").offsetHeight;
    document.querySelector("#cherry_container1").classList.add("falling");

    //randomising drop position;
    document.querySelector("#cherry_container1").style.left = Math.floor((Math.random() * 70) + 20) +
        "vw";

    //randomise speed of cherry1 that reached bottom
    document.querySelector("#cherry_container1").classList.remove("speed1");
    document.querySelector("#cherry_container1").classList.remove("speed2");
    document.querySelector("#cherry_container1").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#cherry_container1").classList.add("speed" + speed);
    document.querySelector("#cherry_container1").addEventListener("mousedown", cherry1Clicked);

}




function startCherry2() {
    console.log("startCherry2");
    document.querySelector("#cherry_container2").classList.add("falling");
    document.querySelector("#cherry_container2").addEventListener("mousedown", cherry2Clicked);
    document.querySelector("#cherry_container2").addEventListener("animationend", cherry2ReachBottom);



}


function cherry2Clicked() {
    console.log("cherry2Clicked");
    document.querySelector("#cherry_container2").removeEventListener("mousedown", cherry2Clicked);
    document.querySelector("#cherry_container2").classList.add("pause");
    document.querySelector("#cherry_container2 .cherry_sprite").classList.add("zoom");

    //add meter value;
    meterValue -= 10;
    console.log(meterValue);
    //move meter coin;
    iconPosition = meterValue * 0.08 + 5;
    console.log(iconPosition);
    document.querySelector("#coin_container").style.left = iconPosition + "vw";

    //reduce lives
    lives--;
    console.log("lose lives");
    console.log(lives);
    document.querySelector("#heart" + (lives + 1)).classList.add("skull");

    // check current meter value with if;
    if (lives < 1) {
        gameover();

    } else {
        document.querySelector("#cherry_container2 .cherry_sprite").addEventListener("animationend", cherry2Restart);

    }


}


function cherry2Restart() {
    console.log("cherry2Restart");
    document.querySelector("#cherry_container2 .cherry_sprite").removeEventListener("animationend", cherry2Restart);
    document.querySelector("#cherry_container2 .cherry_sprite").classList.remove("zoom");

    //restart falling from top
    document.querySelector("#cherry_container2").classList.remove("pause");
    document.querySelector("#cherry_container2").classList.remove("falling");
    document.querySelector("#cherry_container2").offsetHeight;
    document.querySelector("#cherry_container2").classList.add("falling");
    //randomise speed of cherry2 that is clicked
    document.querySelector("#cherry_container2").classList.remove("speed1");
    document.querySelector("#cherry_container2").classList.remove("speed2");
    document.querySelector("#cherry_container2").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#cherry_container2").classList.add("speed" + speed);

    document.querySelector("#cherry_container2").addEventListener("mousedown", cherry2Clicked);

}


function cherry2ReachBottom() {
    console.log("cherry 2 has rached bottom");
    //somwhoe if include below line, the cherry no longer appear afte 1st time
    //document.querySelector("#cherry_container2").removeEventListener("animationend", cherry1ReachBottom);

    //restart falling from top
    document.querySelector("#cherry_container2").classList.remove("falling");
    document.querySelector("#cherry_container2").offsetHeight;
    document.querySelector("#cherry_container2").classList.add("falling");

    //randomising drop position;
    document.querySelector("#cherry_container2").style.left = Math.floor((Math.random() * 70) + 20) +
        "vw";

    //randomise speed of cherry1 that reached bottom
    document.querySelector("#cherry_container2").classList.remove("speed1");
    document.querySelector("#cherry_container2").classList.remove("speed2");
    document.querySelector("#cherry_container2").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#cherry_container2").classList.add("speed" + speed);
    document.querySelector("#cherry_container2").addEventListener("mousedown", cherry2Clicked);

}


function startPeach1() {
    console.log("startPeach1");
    document.querySelector("#peach_container1").classList.add("falling");
    document.querySelector("#peach_container1").classList.add("delay2");

    document.querySelector("#peach_container1").addEventListener("mousedown", peach1Clicked);
    document.querySelector("#peach_container1").addEventListener("animationend", peach1ReachBottom);


}

function peach1Clicked() {
    console.log("peach1Clicked");
    document.querySelector("#peach_container1").removeEventListener("mousedown", peach1Clicked);
    document.querySelector("#peach_container1").classList.add("pause");
    document.querySelector("#peach_container1 .peach_sprite").classList.add("zoom");
    // document.querySelector("#peach_container1 .peach_sprite").addEventListener("animationend", addFriendship);
    document.querySelector("#peach_container1 .peach_sprite").addEventListener("animationend", peach1Restart);

}

function peach1Restart() {
    console.log("peach1Restart");
    document.querySelector("#peach_container1 .peach_sprite").removeEventListener("animationend", peach1Restart);
    document.querySelector("#peach_container1 .peach_sprite").classList.remove("zoom");

    //restart falling from top
    document.querySelector("#peach_container1").classList.remove("pause");
    document.querySelector("#peach_container1").classList.remove("falling");
    document.querySelector("#peach_container1").offsetHeight;
    document.querySelector("#peach_container1").classList.add("falling");
    //randomise speed of peach1 that is clicked
    document.querySelector("#peach_container1").classList.remove("speed1");
    document.querySelector("#peach_container1").classList.remove("speed2");
    document.querySelector("#peach_container1").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#peach_container1").classList.add("speed" + speed);

    document.querySelector("#peach_container1").addEventListener("mousedown", peach1Clicked);

}

function peach1ReachBottom() {
    console.log("peach 1 has rached bottom");
    //somwhoe if include below line, the peach no longer appear afte 1st time
    //document.querySelector("#peach_container1").removeEventListener("animationend", peach1ReachBottom);

    //restart falling from top
    document.querySelector("#peach_container1").classList.remove("falling");
    document.querySelector("#peach_container1").offsetHeight;
    document.querySelector("#peach_container1").classList.add("falling");

    //randomising drop position;
    document.querySelector("#peach_container1").style.left = Math.floor((Math.random() * 70) + 20) +
        "vw";

    //randomise speed of peach1 that reached bottom
    document.querySelector("#peach_container1").classList.remove("speed1");
    document.querySelector("#peach_container1").classList.remove("speed2");
    document.querySelector("#peach_container1").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#peach_container1").classList.add("speed" + speed);
    document.querySelector("#peach_container1").addEventListener("mousedown", peach1Clicked);

}



function startPeach2() {
    console.log("startPeach2");
    document.querySelector("#peach_container2").classList.add("falling");
    document.querySelector("#peach_container2").addEventListener("mousedown", peach2Clicked);
    document.querySelector("#peach_container2").addEventListener("animationend", peach2ReachBottom);


}


function peach2Clicked() {
    console.log("peach2Clicked");
    document.querySelector("#peach_container2").removeEventListener("mousedown", peach1Clicked);
    document.querySelector("#peach_container2").classList.add("pause");
    document.querySelector("#peach_container2 .peach_sprite").classList.add("zoom");
    // document.querySelector("#peach_container1 .peach_sprite").addEventListener("animationend", addFriendship);
    document.querySelector("#peach_container2 .peach_sprite").addEventListener("animationend", peach2Restart);

}


function peach2Restart() {
    console.log("peach2Restart");
    document.querySelector("#peach_container2 .peach_sprite").removeEventListener("animationend", peach2Restart);
    document.querySelector("#peach_container2 .peach_sprite").classList.remove("zoom");

    //restart falling from top
    document.querySelector("#peach_container2").classList.remove("pause");
    document.querySelector("#peach_container2").classList.remove("falling");
    document.querySelector("#peach_container2").offsetHeight;
    document.querySelector("#peach_container2").classList.add("falling");
    //randomise speed of peach2 that is clicked
    document.querySelector("#peach_container2").classList.remove("speed1");
    document.querySelector("#peach_container2").classList.remove("speed2");
    document.querySelector("#peach_container2").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#peach_container2").classList.add("speed" + speed);

    document.querySelector("#peach_container2").addEventListener("mousedown", peach2Clicked);

}


function peach2ReachBottom() {
    console.log("peach 2 has rached bottom");
    //somwhoe if include below line, the peach no longer appear afte 1st time
    //document.querySelector("#peach_container2").removeEventListener("animationend", peach2ReachBottom);

    //restart falling from top
    document.querySelector("#peach_container2").classList.remove("falling");
    document.querySelector("#peach_container2").offsetHeight;
    document.querySelector("#peach_container2").classList.add("falling");

    //randomising drop position;
    document.querySelector("#peach_container2").style.left = Math.floor((Math.random() * 70) + 20) +
        "vw";


    //randomise speed of peach1 that reached bottom
    document.querySelector("#peach_container2").classList.remove("speed1");
    document.querySelector("#peach_container2").classList.remove("speed2");
    document.querySelector("#peach_container2").classList.remove("speed3");
    let speed = Math.floor(Math.random() * 3) + 1;
    document.querySelector("#peach_container2").classList.add("speed" + speed);
    document.querySelector("#peach_container2").addEventListener("mousedown", peach2Clicked);

}


function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelcomplete").textContent = "You are now best friends forever";
    document.querySelector("#levelcomplete").style.opacity = 100;

}

function gameover() {
    console.log("levelComplete");
    document.querySelector("#gameover").textContent = "Panda is now hospitalised due to his allergy to cherry";
    document.querySelector("#gameover").style.opacity = 100;

}
