/// <reference types="../@types/jquery"/>
$(function loaderShow(){
  $('.loader').fadeIn(10,function(){
      $('.loading').fadeIn(10);
      $('body').css({overflow:'hidden'});
  });
})

$(function loaderRemove(){
  $('.loader').fadeOut(1000,function(){
      $('.loading').fadeOut(500);
      $('body').css({overflow:'auto'});
      
  });
})
$('#slideUp').on('click',function () {
  // $('.navbar li').fadeOut(1000);
  $(".navbar li").animate({top: '150px'},10,function (){
    $(".navbar li").animate({top: 0},1000)
  });
})

let foodName=document.getElementById('FoodInputName');
let foodFirstLetter=document.getElementById('foodFirstLetter');


async function getRecipes() {
    try {
        // let newRecipes=resipies.value;
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        let data = await response.json();
        let meals = data.meals
        // console.log(meals);
        
    } catch (error) {
        console.error(error);
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
        // let data = await response.json();
        // weather = data.forecast.forecastday;
        // makan=data.location.name;
        // console.log(weather);

        // displayWeather();
    }
}
getRecipes();

async function display(){
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let data = await response.json();
    let meals = data.meals
    let cartona = ``;
    for (let i = 0; i < 20; i++) {
        
        cartona+=`<div class="col-md-3  ">
          <div class="imgWrapper overflow-hidden position-relative">
            <img class="w-100 rounded-2 "  src="${meals[i].strMealThumb}" alt="">
          <div class="layer  d-flex justify-content-center align-items-center">
          <h2>${meals[i].strMeal}</h2></div>
          </div>
        </div>`

        $('.front>.row').html(cartona);
        $(`.search`).css(`display`,`none`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`none`)
        $(`.firstLetter`).css(`display`,`none`)





        // console.log(meals[0].strMeal);
        
    }
}
display();

async function displayCat(){
  $(function loaderShow(){
    $('.loader').fadeIn(10,function(){
        $('.loading').fadeIn(10);
        $('body').css({overflow:'hidden'});
    });
  })
  
  $(function loaderRemove(){
    $('.loader').fadeOut(1000,function(){
        $('.loading').fadeOut(500);
        $('body').css({overflow:'auto'});
        
    });
  })
  
 
    let responseCat = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let dataCat = await responseCat.json();
    let cat=dataCat.categories;
   let cartonaCat=``;
  for (let i = 0; i < 14; i++) {
    cartonaCat+=`<div class="col-md-3">
          <div class="imgWrapper overflow-hidden position-relative">
            <img class="w-100 rounded-2 "  src="${cat[i].strCategoryThumb}" alt="">
          <div class="layer  d-flex justify-content-start align-items-center flex-column"><h2>${cat[i].strCategory}</h2>
          <p>${cat[i].strCategoryDescription} </p></div>
        
          </div>
      </div>`

        $('.categories>.row').html(cartonaCat);
        
  }
    }

    $( "#categories" ).on( "click", function() {
        displayCat();
        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`flex`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`none`)
        $(`.catFood`).css(`display`,`none`)
        $(`.search`).css(`display`,`none`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`none`)
        $(`.firstLetter`).css(`display`,`none`)







          } );



async function displayArea(){
  $(function loaderShow(){
    $('.loader').fadeIn(10,function(){
        $('.loading').fadeIn(10);
        $('body').css({overflow:'hidden'});
    });
  })
  
  $(function loaderRemove(){
    $('.loader').fadeOut(1000,function(){
        $('.loading').fadeOut(500);
        $('body').css({overflow:'auto'});
        
    });
  })
  
  let responseArea = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  let dataArea = await responseArea.json();
  let area=dataArea.meals
  let cartonaArea='';
  for (let i = 0; i < area.length; i++) {
    cartonaArea+=` <div class="col-md-3">
      <div class="area d-flex justify-content-center align-items-center flex-column text-white">
        <i class="fa-solid fa-flag fa-2x"></i>
        <h2 class"text-white"=>${area[i].strArea}</h2>
      </div>
    </div>`

  $('.area>.row').html(cartonaArea);
    
  }
}
$( "#area" ).on( "click", function() {
  displayArea();
  $(`.front`).css(`display`,`none`)
  $(`.categories`).css(`display`,`none`)
  $(`.area`).css(`display`,`flex`)
  $(`.ingredients`).css(`display`,`none`)
  $(`.countryFood`).css(`display`,`none`)
  $(`.catFood`).css(`display`,`none`)
  $(`.search`).css(`display`,`none`)
  $(`.contact`).css(`display`,`none`)
  $(`.details`).css(`display`,`none`)
  $(`.firstName`).css(`display`,`none`)
  $(`.firstLetter`).css(`display`,`none`)







    } );



    $( "#home" ).on( "click", function() {
      displayCat();
      $(`.front`).css(`display`,`flex`)
      $(`.area`).css(`display`,`none`)
      $(`.categories`).css(`display`,`none`)
      $(`.ingredients`).css(`display`,`none`)
      $(`.countryFood`).css(`display`,`none`)
      $(`.catFood`).css(`display`,`none`)
      $(`.search`).css(`display`,`none`)
      $(`.contact`).css(`display`,`none`)
      $(`.details`).css(`display`,`none`)
      $(`.firstName`).css(`display`,`none`)
      $(`.firstLetter`).css(`display`,`none`)






        } );


async function displayIngredients(){
  $(function loaderShow(){
    $('.loader').fadeIn(10,function(){
        $('.loading').fadeIn(10);
        $('body').css({overflow:'hidden'});
    });
  })
  
  $(function loaderRemove(){
    $('.loader').fadeOut(2000,function(){
        $('.loading').fadeOut(500);
        $('body').css({overflow:'auto'});
        
    });
  })
  
  let responseIngredients = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list');
  let dataIngredients = await responseIngredients.json();
  let ingredients=dataIngredients.meals
  let cartonaIngredients=``
  for (let i = 0; i < ingredients.length; i++) {
    cartonaIngredients+=` <div class="col-md-3">
      <div class="Ingredients d-flex justify-content-center align-items-center flex-column w-100  overflow-hidden">
        <i class="fa-solid fa-utensils fa-2x text-white"></i>
        <h2 class="text-white">${ingredients[i].strIngredient}</h2>
      </div>
    </div>`
    console.log(ingredients);
  $('.ingredients>.row').html(cartonaIngredients);
    
  }
  }
  $( "#ingredients" ).on( "click", function() {
    displayIngredients();
    $(`.front`).css(`display`,`none`)
    $(`.area`).css(`display`,`none`)
    $(`.categories`).css(`display`,`none`)
    $(`.ingredients`).css(`display`,`flex`)
    $(`.countryFood`).css(`display`,`none`)
    $(`.catFood`).css(`display`,`none`)
    $(`.search`).css(`display`,`none`)
    $(`.contact`).css(`display`,`none`)
    $(`.details`).css(`display`,`none`)
    $(`.firstName`).css(`display`,`none`)
    $(`.firstLetter`).css(`display`,`none`)







      } );

  // displayIngredients();
  $('.area').on('click',async function (e){
    $(function loaderShow(){
      $('.loader').fadeIn(10,function(){
          $('.loading').fadeIn(10);
          $('body').css({overflow:'hidden'});
      });
    })
    
    $(function loaderRemove(){
      $('.loader').fadeOut(1000,function(){
          $('.loading').fadeOut(500);
          $('body').css({overflow:'auto'});
          
      });
    })
    
    let country = $(e.target).text();
    console.log(country);

  let responsecountryFood = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
  let dataCountryFood = await responsecountryFood.json();
  console.log(dataCountryFood);
  let cartonaCountryFood=``;

  for (let i = 0; i < dataCountryFood.meals.length; i++) {
    cartonaCountryFood+=`<div class="col-md-3">
          <div class="imgWrapper overflow-hidden position-relative">
            <img class="w-100 rounded-2 "  src="${dataCountryFood.meals[i].strMealThumb}" alt="">
          <div class="layer  d-flex justify-content-start align-items-center flex-column"><h2>${dataCountryFood.meals[i].strMeal}</h2>
          </div>
          </div>
      </div>`

        $('.countryFood>.row').html(cartonaCountryFood);

        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`none`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`flex`)
        $(`.catFood`).css(`display`,`none`)
        $(`.search`).css(`display`,`none`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`none`)
        $(`.firstLetter`).css(`display`,`none`)







  }
  
    
    })









     $('.ingredients').on('click',async function (e){
      $(function loaderShow(){
        $('.loader').fadeIn(10,function(){
            $('.loading').fadeIn(10);
            $('body').css({overflow:'hidden'});
        });
      })
      
      $(function loaderRemove(){
        $('.loader').fadeOut(1000,function(){
            $('.loading').fadeOut(500);
            $('body').css({overflow:'auto'});
            
        });
      })
      
    let ingFood = $(e.target).text();
    console.log(ingFood);

  let responseIngFood = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingFood}`);
  let dataIngFood = await responseIngFood.json();
  console.log(dataIngFood);
  let cartonaIngFood=``;

  for (let i = 0; i < dataIngFood.meals.length; i++) {
    cartonaIngFood+=`<div class="col-md-3">
          <div class="imgWrapper overflow-hidden position-relative">
            <img class="w-100 rounded-2 "  src="${dataIngFood.meals[i].strMealThumb}" alt="">
          <div class="layer  d-flex justify-content-start align-items-center flex-column"><h2>${dataIngFood.meals[i].strMeal}</h2>
          </div>
          </div>
      </div>`

        $('.countryFood>.row').html(cartonaIngFood);

        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`none`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`flex`)
        $(`.catFood`).css(`display`,`none`)
        $(`.search`).css(`display`,`none`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`none`)
        $(`.firstLetter`).css(`display`,`none`)







  }
  
    
    })




     $('.categories').on('click',async function (e){
      $(function loaderShow(){
        $('.loader').fadeIn(10,function(){
            $('.loading').fadeIn(10);
            $('body').css({overflow:'hidden'});
        });
      })
      
      $(function loaderRemove(){
        $('.loader').fadeOut(1000,function(){
            $('.loading').fadeOut(500);
            $('body').css({overflow:'auto'});
            
        });
      })
      
    let CatFood = $(e.target).text();
    console.log(CatFood);

  let responseCatFood = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${CatFood}`);
  let dataCatFood = await responseCatFood.json();
  console.log(dataCatFood);
  let cartonaCatFood=``;

  for (let i = 0; i < dataCatFood.meals.length; i++) {
    cartonaCatFood+=`<div class="col-md-3">
          <div class="imgWrapper overflow-hidden position-relative">
            <img class="w-100 rounded-2 "  src="${dataCatFood.meals[i].strMealThumb}" alt="">
          <div class="layer  d-flex justify-content-start align-items-center flex-column"><h2>${dataCatFood.meals[i].strMeal}</h2>
          </div>
          </div>
      </div>`

        $('.catFood>.row').html(cartonaCatFood);

        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`none`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`none`)
        $(`.catFood`).css(`display`,`flex`)
        $(`.search`).css(`display`,`none`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`none`)
        $(`.firstLetter`).css(`display`,`none`)





  }
  
    
    })

    $('#search').on('click', function() {
      $(`.front`).css(`display`,`none`)
      $(`.area`).css(`display`,`none`)
      $(`.categories`).css(`display`,`none`)
      $(`.ingredients`).css(`display`,`none`)
      $(`.countryFood`).css(`display`,`none`)
      $(`.catFood`).css(`display`,`none`)
      $(`.search`).css(`display`,`flex`)
      $(`.contact`).css(`display`,`none`)
      $(`.details`).css(`display`,`none`)
      $(`.firstName`).css(`display`,`none`)
      $(`.firstLetter`).css(`display`,`none`)





  });
  $('#contact').on('click', function() {
    $(`.front`).css(`display`,`none`)
    $(`.area`).css(`display`,`none`)
    $(`.categories`).css(`display`,`none`)
    $(`.ingredients`).css(`display`,`none`)
    $(`.countryFood`).css(`display`,`none`)
    $(`.catFood`).css(`display`,`none`)
    $(`.search`).css(`display`,`none`)
    $(`.contact`).css(`display`,`flex`)
    $(`.details`).css(`display`,`none`)
    $(`.firstName`).css(`display`,`none`)
    $(`.firstLetter`).css(`display`,`none`)



});




$('.front , .countryFood ,.ingFood, .catFood , .firstName, .firstLetter').on('click',async function (e){
  let detailFood = $(e.target).text();
  // console.log(detailFood);
  $(function loaderShow(){
    $('.loader').fadeIn(10,function(){
        $('.loading').fadeIn(10);
        $('body').css({overflow:'hidden'});
    });
  })
  
  $(function loaderRemove(){
    $('.loader').fadeOut(1000,function(){
        $('.loading').fadeOut(500);
        $('body').css({overflow:'auto'});
        
    });
  })
  

let responseDetailFood = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${detailFood}`);
let dataDetailFood = await responseDetailFood.json();
console.log(dataDetailFood.meals[0]);
let cartonaDetailFood=``;
cartonaDetailFood=` <div class="col-md-4 text-white">
          <img class="w-100" src="${dataDetailFood.meals[0].strMealThumb}" alt="" />
          <h3>${dataDetailFood.meals[0].strMeal}</h3>
        </div>
        <div class="col-md-8 text-white">
          <h3>Instructions</h3>
          <p>${dataDetailFood.meals[0].strInstructions}</p>
          <h3>Area: ${dataDetailFood.meals[0].strArea}</h3>
          <h3>Category: ${dataDetailFood.meals[0].strCategory}</h3>
          <h3>Recipies:</h3>
             <ul class="d-flex align-items-center gap-3">
        <li>${dataDetailFood.meals[0].strIngredient1}</li>
        <li>${dataDetailFood.meals[0].strIngredient2}</li>
        <li>${dataDetailFood.meals[0].strIngredient3}</li>
        <li>${dataDetailFood.meals[0].strIngredient4}</li>
        <li>${dataDetailFood.meals[0].strIngredient5}</li>
        <li>${dataDetailFood.meals[0].strIngredient6}</li>
        <li>${dataDetailFood.meals[0].strIngredient7}</li>
        <li>${dataDetailFood.meals[0].strIngredient8}</li>
        <li>${dataDetailFood.meals[0].strIngredient9}</li>
        <li>${dataDetailFood.meals[0].strIngredient10}</li>
        <li>${dataDetailFood.meals[0].strIngredient11}</li>
        <li>${dataDetailFood.meals[0].strIngredient12}</li>
        <li>${dataDetailFood.meals[0].strIngredient13}</li>
        <li>${dataDetailFood.meals[0].strIngredient14}</li>
        <li>${dataDetailFood.meals[0].strIngredient15}</li>
        <li>${dataDetailFood.meals[0].strIngredient16}</li>
        <li>${dataDetailFood.meals[0].strIngredient17}</li>
        <li>${dataDetailFood.meals[0].strIngredient18}</li>
        <li>${dataDetailFood.meals[0].strIngredient19}</li>
        <li>${dataDetailFood.meals[0].strIngredient20}</li>
      </ul>
      <h3>Tags:</h3>
      <h3>${dataDetailFood.meals[0].strTags}</h3>
      <a href="${dataDetailFood.meals[0].strSource}"><button class="btn btn-warning">Source</button></a>
      <a href="${dataDetailFood.meals[0].strYoutube}"><button class="btn btn-danger">Youtube</button></a>

        </div>`
        $('.details>.row').html(cartonaDetailFood);
        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`none`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`none`)
        $(`.catFood`).css(`display`,`none`)
        $(`.search`).css(`display`,`none`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`flex`)
        $(`.firstName`).css(`display`,`none`)
        $(`.firstLetter`).css(`display`,`none`)

})



async function getFoodFirst() {
  try {
      let newFoodName=foodName.value;
      let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${newFoodName}`);
      let newFoodData = await response.json();
     console.log(newFoodData.meals);
     let cartonaFirstName=``;
  
if (newFoodData.meals!==null) {
  for (let i = 0; i < newFoodData.meals.length; i++) {
    cartonaFirstName+=`<div class="col-md-3">
          <div class="imgWrapper overflow-hidden position-relative">
            <img class="w-100 rounded-2 "  src="${newFoodData.meals[i].strMealThumb}" alt="">
          <div class="layer  d-flex justify-content-start align-items-center flex-column"><h2>${newFoodData.meals[i].strMeal}</h2>
          </div>
          </div>
      </div>`

        $('.firstName>.row').html(cartonaFirstName);

        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`none`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`none`)
        $(`.catFood`).css(`display`,`flex`)
        $(`.search`).css(`display`,`flex`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`flex`)
        $(`.firstLetter`).css(`display`,`none`)


  }
}else{
  cartonaFirstName+=``

        $('.firstName>.row').html(cartonaFirstName);

        $(`.front`).css(`display`,`none`)
        $(`.area`).css(`display`,`none`)
        $(`.categories`).css(`display`,`none`)
        $(`.ingredients`).css(`display`,`none`)
        $(`.countryFood`).css(`display`,`none`)
        $(`.catFood`).css(`display`,`flex`)
        $(`.search`).css(`display`,`flex`)
        $(`.contact`).css(`display`,`none`)
        $(`.details`).css(`display`,`none`)
        $(`.firstName`).css(`display`,`flex`)
        $(`.firstLetter`).css(`display`,`none`)



}
  

  } catch (error) {
  

} 
  }



  async function getFoodLetter() {
    try {
        let newfoodFirstLetter=foodFirstLetter.value;
        let responseFirst = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${newfoodFirstLetter}`);
        let newFoodFirst = await responseFirst.json();
       console.log(newFoodFirst.meals);
       let cartonaFirstLetter=``;
    
  if (newFoodFirst.meals!==null) {
    for (let i = 0; i < newFoodFirst.meals.length; i++) {
      cartonaFirstLetter+=`<div class="col-md-3">
            <div class="imgWrapper overflow-hidden position-relative">
              <img class="w-100 rounded-2 "  src="${newFoodFirst.meals[i].strMealThumb}" alt="">
            <div class="layer  d-flex justify-content-start align-items-center flex-column"><h2>${newFoodFirst.meals[i].strMeal}</h2>
            </div>
            </div>
        </div>`
  
          $('.firstLetter>.row').html(cartonaFirstLetter);
  
          $(`.front`).css(`display`,`none`)
          $(`.area`).css(`display`,`none`)
          $(`.categories`).css(`display`,`none`)
          $(`.ingredients`).css(`display`,`none`)
          $(`.countryFood`).css(`display`,`none`)
          $(`.catFood`).css(`display`,`none`)
          $(`.search`).css(`display`,`flex`)
          $(`.contact`).css(`display`,`none`)
          $(`.details`).css(`display`,`none`)
          $(`.firstName`).css(`display`,`none`)
          $(`.firstLetter`).css(`display`,`flex`)

  
    }
  }else{
    cartonaFirstLetter+=``
  
          $('.firstLetter>.row').html(cartonaFirstLetter);
  
          $(`.front`).css(`display`,`none`)
          $(`.area`).css(`display`,`none`)
          $(`.categories`).css(`display`,`none`)
          $(`.ingredients`).css(`display`,`none`)
          $(`.countryFood`).css(`display`,`none`)
          $(`.catFood`).css(`display`,`flex`)
          $(`.search`).css(`display`,`flex`)
          $(`.contact`).css(`display`,`none`)
          $(`.details`).css(`display`,`none`)
          $(`.firstName`).css(`display`,`none`)
          $(`.firstLetter`).css(`display`,`flex`)
  
  
  }
    
  
    } catch (error) {
    
  
  } 
    }
  


    function validateInputs(element) {

      var regex={
        userEmail:/^\w{3,20}@[a-z]{2,10}\.[a-z]{3,10}$/,
        userPassword:/^\w{5,20}$/,
        userPhone:/[0-9]{11}/,
        userAge:/[0-9]{1}[0-9]{1}/
         
      }
  
  
      if (regex[element.id].test(element.value)){
          element.classList.add('is-valid');
          element.classList.remove('is-invalid');
          element.nextElementSibling.classList.add('d-none');
          element.classList.remove('nodalBlock');
      }else{
          element.classList.remove('is-valid');
          element.nextElementSibling.classList.remove('d-none');  
          element.classList.add('is-invalid');
          element.classList.add('nodalBlock');
      }}

      if (rePassword!==userPassword){
        rePassword.classList.add('is-valid');
        rePassword.classList.remove('is-invalid');
        rePassword.nextElementSibling.classList.add('d-none');
        rePassword.classList.remove('nodalBlock');
    }else{
        rePassword.classList.remove('is-valid');
        rePassword.nextElementSibling.classList.remove('d-none');  
        rePassword.classList.add('is-invalid');
        rePassword.classList.add('nodalBlock');
    }


  
