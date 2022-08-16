
  let button = document.querySelector("#btn");

  button.addEventListener("click", function(){
     
    document.querySelector("#list").innerHTML += `<li><input id="radio" type="checkbox">&nbsp;${document.querySelector("#input").value} </li>`;
    
    

  });


let boldHim = document.querySelectorAll("#bro");
    

boldHim.addEventListener("click", function myFunction(){

    for(var i = 0; i < dodger.length; i++) {
        dodger[i] = function() {
            this.parentNode.remove();
        }

    }
})


