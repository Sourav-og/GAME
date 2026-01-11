let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".show-img");
const msg = document.querySelector(".msg");
const userscorePara = document.querySelector(".user-score");
const compscorePara = document.querySelector(".comp-score");

//FUN TO GET USER CHOICE
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("clicked", userchoice);
    playgame(userchoice); //fun call
  });
});

//FUN TO GET COMPUTER CHOICE
const getcompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randindex = Math.floor(Math.random() * 3);
  return options[randindex];
};

// PRINTING THE USER & COMP> CHOICE
const playgame = (userchoice) => {
  console.log("User choice:", userchoice);
  //get the computer choice
  const compchoice = getcompchoice();
  console.log("Computer choice:", compchoice);

  // PRINTING IN THE DISPLAY
  if (userchoice === compchoice) {
    console.log("GAME IS DRAW 😏");
    msg.innerText = "GAME IS DRAW 😏";
    msg.style.backgroundColor = "#081b31";
  } else if (
    (userchoice === "rock" && compchoice === "scissors") ||
    (userchoice === "paper" && compchoice === "rock") ||
    (userchoice === "scissors" && compchoice === "paper")
  ) {
    console.log("YOU WIN 🔥");
    msg.innerText = "CONGRATS, YOU WIN 🥳";
    msg.style.backgroundColor = "green";
    userscore++;
    userscorePara.innerText = userscore;
  } else {
    console.log("U LOSE, COMPUTER WINS");
    msg.innerText = "YOU LOSE🙁, COMPUTER WINS";
    msg.style.backgroundColor = "red";
    compscore++;
    compscorePara.innerText = compscore;
  }
};
