var Angle1 = document.querySelector("#Angle1");
var Angle2 = document.querySelector("#Angle2");
var Angle3 = document.querySelector("#Angle3")
var btn = document.querySelector("#QuizBtn");
var input = document.querySelector("input[name = option]")
var output = document.querySelector("#quizOutput")
var A1 =Math.floor(Math.random() * 181)
console.log(A1);
Angle1.innerHTML = A1;
var A2 = Math.floor(Math.random() * (181-A1))
Angle2.innerHTML = A2;
var A3 = 180 - (A1+A2);
Angle3.innerHTML = A3;


function ClickHandler()
{
        if(A1==90||A2==90||A3==90)
        {
            if(input.value == "right")
            output.innerHTML = "correct answer";
            else
            output.innerHTML = "wrong answer"
        }
        else if(A1<90 && A2<90 && A3<90)
        {
            if(input.value == "acute")
            output.innerHTML = "correct answer"
            else
            output.innerHTML = "wrong answer"
        }
        else{
            output.innerHTML = "right answer"
        }
        
}

btn.addEventListener("click", ClickHandler);



