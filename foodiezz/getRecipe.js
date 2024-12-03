import { getING } from "./getAPI.js";

export function getRecipe(){
    let meals = document.querySelectorAll(".rn");
    let ingre = document.querySelector(".recipe");

    for(let ele of meals){  
        ele.addEventListener("click",async function(){
            ingre.innerHTML=``;
            let a = ele.getAttribute("value");
            let ING = await getING(a);
            let ING2 = await ING.json();
            let ingredient = Object.values(ING2.meals[0]);
            ingre.innerHTML=`<img src=${ING2.meals[0].strMealThumb}>`;
            let heading = document.createElement("h1");
            heading.style.margin=`70px`
            heading.innerText=`Ingredients`;
            ingre.appendChild(heading);



            for(let i=9 ; i<ingredient.length;i++){
                if(ingredient[i]=="")
                    break;
                else{
                   let ingredientName = document.createElement("h3");
                   ingredientName.innerText= `--> ${ingredient[i]}`;
                   ingredientName.style.textAlign=`center`;
                   ingre.appendChild(ingredientName);
                }
            }

        })
    }

}   