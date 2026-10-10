async function submitName() {
  const inputName = document.getElementById("name").value.trim();

  if (inputName === "") {
    alert("Please enter your name");
    return;
  }

  try {
    const url = "https://api.agify.io?name=" + encodeURIComponent(inputName);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const data = await response.json();
    const { name, age } = data;

    alert("Your name is: " + name + "\nYour age is: " + age);
  }
   catch (error) {
    alert("Error: " + error.message);
  }
}