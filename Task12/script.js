function submitForm() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  if (name === "") {
    alert("Please enter your name");
    return;
  }
  if (age === "" || isNaN(age) || Number(age) <= 0 || Number(age) > 130) {
    alert("Please enter a valid age");
    return;
  }

  const person = {
    name: name,
    age: age,
    timestamp: new Date().toLocaleString()
  };

  const { name: personName, age: personAge, timestamp } = person;
  alert(
    "Your name is: " + personName +
    "\nYour age is: " + personAge +
    "\nTimestamp: " + timestamp
  );
}