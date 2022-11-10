let button = document.querySelector('button');
let mainDiv = document.querySelectorAll('div');



button.onclick = function(){
    for(let i = 0; i < mainDiv.length ; i++){
        if(mainDiv[i].style.opacity == 0){
            mainDiv[i].style.opacity = '1' ;

        }else{
            mainDiv[i].style.opacity = '0';
        }
    }
}