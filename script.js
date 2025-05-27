let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let mg=document.querySelector("#msg");
let turn0=false;
let count=0;
const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetGame=()=>{
    turn0=false;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");

}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0){
            turn0=false;
            box.style.color="red";
            box.innerText="O";
        } 
        else{
            turn0=true;
            box.style.color="black";
            box.innerText="X";
        }
        box.disabled=true;
        count++;
        winnerCheck();
    });
});
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}
const winnerCheck=()=>{
    for(let pattern of winPatterns){
        pos1Val=boxes[[pattern[0]]].innerText;
        pos2Val=boxes[[pattern[1]]].innerText;
        pos3Val=boxes[[pattern[2]]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                showWinner(pos1Val);
                boxes.forEach((box)=>{
                box.disabled=true;
                });
            }
            else if(count==9){
                msg.innerText=`Draw`;
                msgContainer.classList.remove("hide");
            }
        }
    }
};
