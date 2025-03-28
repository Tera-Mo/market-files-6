let sel = document.querySelector("#sel")
let nun= document.querySelector("#nun")
let dea = document.querySelector("#dea")

sel.onchange=function name() {
    nun.innerHTML=sel.value
    if (sel.value=="599$") {
        dea.innerHTML="1,300$"
        
    }

    if (sel.value=="799$") {
        dea.innerHTML="1,699$"
    }

    if (sel.value=="1,199$") {
        dea.innerHTML="2,999$"
        
    }


}


