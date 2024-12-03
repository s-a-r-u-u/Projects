import { getMeal } from "./getAPI.js";
import { getRecipe } from "./getRecipe.js";

//

let btn = document.querySelector(".button");
let recipe= document.querySelector(".recipeList");
async function searchedMeal(){
    recipe.innerHTML=``;
    let search = document.querySelector("input").value;
    let promise1 = await getMeal(search);
    let promise2 = await promise1.json();
    console.log(promise2);
    for(let i=0;i<promise2.meals.length;i++){
        let recipeName = document.createElement("div");
        recipeName.setAttribute("class","rn");
        recipeName.setAttribute("value",`${promise2.meals[i].idMeal}`);
        recipeName.innerText=`${promise2.meals[i].strMeal}`;
        recipe.appendChild(recipeName);
    }
    getRecipe();

}


btn.addEventListener('click',async ()=>{
   
    searchedMeal();
  
})





