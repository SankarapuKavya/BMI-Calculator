let calcBMI=document.getElementById("calcBMI");
let result=document.createElement("div")
document.querySelector("section").appendChild(result);

calcBMI.addEventListener("click",function(event){
    event.preventDefault()
    let weight=Number(document.getElementById("wt").value)
    let height=Number(document.getElementById("ht").value)
    ht=height/100
    if(weight>0 && height>0){
        let bmiValue = weight/(ht * ht)
        bmi=bmiValue.toFixed(1)
        let category
        if (bmiValue<18.5){
            category="under weight"
        }
        else if (bmiValue>=18.5 && bmiValue<=24.9){
            category="Normal Weight";
        }
        else if (bmiValue >=25 && bmiValue<=29.9){
            category = "Over Weight";
        }
        else{
            category = "Obese"
        }
        result.innerHTML=`
        <div class="table">
         <h2>Your BMI: ${bmi}</h2>
         <h3>${category}</h3>
         <table>
         <tr>
                 <td><18.5</td>
                 <td>Underweight</td>
             </tr>
             <tr>
                 <td>18.5 - 24.9</td>
                 <td>Normal Weight</td>
             </tr>
             <tr>
                 <td>25 - 29.9</td>
                 <td>Overweight</td>
             </tr>
             <tr>
                 <td>>=30</td>
                 <td>Obese</td>
             </tr>
         </table>
         </div>
        `
    }
    else {
        result.innerHTML = "<p>Please enter valid weight and height!</p>";
    }
})