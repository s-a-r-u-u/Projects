export function getMeal(search){
    if(search){
    let promise = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    return promise;
    }
  

}

export function getING(recipe){
    let promise = fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipe}`);
    return promise;
}


