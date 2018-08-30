function checkIdNumber() {
  const input = document.getElementsByClassName("idNumberInput")[0].value;
  const output = !isNaN(input)
    ? "id is a valid number"
    : "id is not a valid number";

  document.getElementsByClassName("isValidNumber")[0].innerHTML = output;
}

// function getAge(dateString) {
//   const today = new Date();
//   const birthDate = new Date(dateString);
//   const age = today.getFullYear() - birthDate.getFullYear();
//   const m = today.getMonth() - birthDate.getMonth();
//   if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
//   }
//   return age;
// }

// function checkbirthday() {
//   const input = document.getElementsByClassName("bDayInput")[0].value;
//   const age = getAge(input);
//   const isAgeValid = age > 21 && age < 80 ? true : false;
//   const validMessage = isAgeValid ? "age is valid" : "age is not valid";
//   document.getElementsByClassName("age")[0].innerHTML = "Age: " + age;
//   document.getElementsByClassName("isAgeValid")[0].innerHTML = validMessage;
// }

