function checkIdNumber() {
  const input = document.getElementsByClassName("idNumberInput")[0].value;
  const output = !isNaN(input)
    ? "id is a valid number"
    : "id is not a valid number";

  document.getElementsByClassName("isValidNumber")[0].innerHTML = output;
}


function checkBirthday() {
	// validate of age code should go here
}

