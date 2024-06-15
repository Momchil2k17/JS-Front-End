const loadMealsButtonElement = document.getElementById('load-meals');
const editMealButtonElement = document.getElementById('edit-meal');
const addMealButtonElement = document.getElementById('add-meal');
const listOfMealElement = document.getElementById('list');
const mealButtons = document.querySelector('#meal-buttons');

const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');

const baseUrl = 'http://localhost:3030/jsonstore/tasks';

function showMeals(){listOfMealElement.innerHTML = '';
fetch(baseUrl)
    .then(res => res.json())
    .then(data => Object.values(data).forEach(meal => {
        let mealNameh2 = document.createElement('h2');
        mealNameh2.textContent = meal.food;
        let timeH3 = document.createElement('h3');
        timeH3.textContent = meal.time;
        let caloriesH3 = document.createElement('h3');
        caloriesH3.textContent = meal.calories;
        let divMeal = document.createElement('div');
        divMeal.classList.add('meal');
        let divButtons = document.createElement('div');
        divButtons.id = 'meal-buttons'
        let changeButton = document.createElement('button');
        changeButton.textContent = 'Change'
        changeButton.classList.add('change-meal');
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete'
        deleteButton.classList.add('delete-meal');
        divButtons.appendChild(changeButton);
        divButtons.appendChild(deleteButton);
        divMeal.appendChild(mealNameh2);
        divMeal.appendChild(timeH3);
        divMeal.appendChild(caloriesH3);
        divMeal.appendChild(divButtons);
        listOfMealElement.appendChild(divMeal);let mealId=meal._id
        changeButton.addEventListener('click',()=>{
            listOfMealElement.removeChild(divMeal);
            foodInput.value=meal.food;
            timeInput.value=meal.time;
            caloriesInput.value=meal.calories;
            
            editMealButtonElement.removeAttribute('disabled');
            addMealButtonElement.setAttribute('disabled','disabled');
            editMealButtonElement.addEventListener('click',()=>{
                let editMeal={
                    food:foodInput.value,
                    time:timeInput.value,
                    calories:caloriesInput.value,
                    _id:mealId,
                }
                fetch(`${baseUrl}/${mealId}`,{
                    method:'put',
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(editMeal),
                })
                addMealButtonElement.removeAttribute('disabled');
                editMealButtonElement.setAttribute('disabled','disabled');
                showMeals();
                foodInput.value='';
                timeInput.value='';
                caloriesInput.value='';
            })

        })
        deleteButton.addEventListener('click',()=>{
            fetch(`${baseUrl}/${mealId}`,{
                method:'delete',
            })
            listOfMealElement.removeChild(divMeal);
        })
    }))

}
loadMealsButtonElement.addEventListener('click', showMeals)
addMealButtonElement.addEventListener('click', () => {
    const foodValue = foodInput.value;
    const timeValue = timeInput.value;
   
    const caloriesValue = caloriesInput.value;
    
    let newMeal={
        food:foodValue,
        time:timeValue,
        calories:caloriesValue
    }
    fetch(baseUrl,{
        method:'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(newMeal),
    })
    foodInput.value=''; timeInput.value='';caloriesInput.value='';
    showMeals();
})