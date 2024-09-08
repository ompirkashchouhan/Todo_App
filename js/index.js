var mainDetail = document.getElementById("mainDetail");
var inpTop = document.getElementById("inputTop");

function inpPrompt(){
    if(inpTop.value === ""){
        alert("Please Type Data ?")
    }else{
        
        var domDivMain = document.createElement("div");
        domDivMain.setAttribute("id","domDivMain")
        mainDetail.appendChild(domDivMain)

        var message = document.createElement("p");
        domDivMain.appendChild(message)

        var messageTxt = document.createTextNode(inpTop.value)
        message.appendChild(messageTxt)

        var editBtn = document.createElement("button");
        domDivMain.appendChild(editBtn)
        editBtn.setAttribute("id","editBtn")
        editBtn.innerHTML = "Edit"

        editBtn.addEventListener('click',edit)
        function edit(){
            var editPro = prompt("Enter data which you want to edit ?",message.innerHTML) 
            if(editPro){
                message.innerHTML = editPro
            } else if(editPro === null){
                alert("Cancel Edited !")
            } else{
                message.innerHTML = editPro
            }
        }

        var deleteBtn = document.createElement("button");
        domDivMain.appendChild(deleteBtn)
        deleteBtn.setAttribute("id","deleteBtn")
        deleteBtn.innerHTML = "Delete"

        deleteBtn.addEventListener("click",del)
        function del(){
            domDivMain.style.display = "none"
        }
    }

    inpTop.value = ""
}