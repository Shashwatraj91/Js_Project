
const form=document.querySelector('form');

form.addEventListener('submit',function(e){

    e.preventDefault();
    const height=parseInt(document.getElementById('height').value);
    const weight=parseInt(document.getElementById('weight').value);
    const results=document.getElementById('results');
    const bmi=((weight*10000)/(height*height)).toFixed(2);
    if(height ==='' || height<0 || isNaN(height)){
        results.innerHTML=`this is a invalid height ${height}`;
    }
    else if(weight ==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`this is a invalid weight ${weight}`;
    }
    else{
        if(bmi<18.6){
            results.innerHTML=`your bmi is ${bmi}. You are underweight`;
        }
        else if(bmi<=24.9 && bmi>=18.6){
            results.innerHTML=`your bmi is ${bmi}. You are Normal`;
        }
        else{
            results.innerHTML=`your bmi is ${bmi}. You are overweight`;
        
        }
        
    }



})