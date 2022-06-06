// P = two params (num)
// R = str
// E = if bmi <= 18.5 return "Underweight"
// P = construct formula into a var
//      use a switch statement to evalueate to boolean each test case and return its value.

function bmi(weight, height) {
    let bMi = weight/(height**2)
    switch(true){
        case (bMi <= 18.5):
        return "Underweight"
        break;
        case (bMi <= 25.0):
        return "Normal"
        break;
        case (bMi <= 30.0):
        return "Overweight"
        break;
        default:
        return "Obese"
    }
  }