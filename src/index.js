let num_btn = document.getElementsByClassName("white");

for(let i=0;i<num_btn.length-1;i++){
    num_btn[i].addEventListener('click', function (event) {
        document.getElementsByClassName("result")[0].innerText += event.target.value;
    });
}

document.getElementsByClassName("clear_everything")[0].addEventListener('click',function () {

    document.getElementsByClassName("result")[0].innerText = "";
});

let simp_operator = document.getElementsByClassName("yellow");

for(let i=0;i<simp_operator.length-1;i++){
    simp_operator[i].addEventListener("click",function (event){
        let last = document.getElementsByClassName("result")[0].innerText[document.getElementsByClassName("result")[0].innerText.length-1];
        let value = document.getElementsByClassName("result")[0].innerText;
        if(last == "+" || last == "-" || last == "÷" || last == "x"){
            document.getElementsByClassName("result")[0].innerText = value.slice(0, -1)+event.target.value;
        }
        else{
            document.getElementsByClassName("result")[0].innerText += event.target.value;
        }
    });
}

document.getElementsByClassName("yellow")[4].addEventListener('click', function () {
    document.getElementsByClassName("result")[0].innerText = eval(document.getElementsByClassName("result")[0].innerText);
});