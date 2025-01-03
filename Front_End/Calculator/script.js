let calculation = localStorage.getItem('calculation') || '';
    displayCalculation();

    function updateCalculation(value) {
      calculation = calculation + value;
      
      //call the function for display the value
      displayCalculation();

    localStorage.setItem('calculation',calculation)
    }

    //view the result
    function displayCalculation(){
      document.querySelector('.js-calculation').innerHTML = calculation
    }