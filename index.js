const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")


const apikey = "itEQjEgijycvkMiWOc/Lrw==768OAPGqopkUc9ud";

const options = {
    method:"GET",
    headers:{
        "X-Api-Key":apikey,
    },
};


const apiurl ="https://api.api-ninjas.com/v1/dadjokes"

async function getjoke(){
try {jokeEl.innerText = "Updating..."
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
      const response = await fetch(apiurl,options);
      const data = await response.json();
      btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE"
      jokeEl.innerText = data[0].joke;
     }
     catch(error){
        jokeEl.innerText = " An error happened,try again later.."
        
            btnEl.disabled = false;
    btnEl.innerText = "TELL ME A JOKE";
    console.log(error);
     }
 
}




btnEl.addEventListener("click", getjoke);