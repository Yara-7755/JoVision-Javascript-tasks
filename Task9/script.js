function convertToText(response) {
  if (!response.ok) {
    throw new Error("Request failed with status " + response.status);
  }
  return response.text();
}

function printIp(ip) {
  console.log("Your IP is:", ip);
}

function printError(error) {
  console.error("Something went wrong:", error);
}

function getIp() {
  fetch("https://api.ipify.org/")
    .then(convertToText)
    .then(printIp)
    .catch(printError);
}