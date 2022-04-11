var noOfDrums = document.querySelectorAll(".drum").length;
for(var i = 0; i < noOfDrums; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function()
    {
        var choice = this.innerHTML;
        makeSound(choice);
        animateButton(choice);
    });
}

document.addEventListener("keydown", function(event)
    {
        var choice = (event.key);
        makeSound(choice);
        animateButton(choice);
    });

function makeSound(choice)
{
    switch (choice) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:    
            console.log(choice);
            break;
    }
}

function animateButton(choice)
{
    document.querySelector("." + choice).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("." + choice).classList.remove("pressed");
    }, 100);
}