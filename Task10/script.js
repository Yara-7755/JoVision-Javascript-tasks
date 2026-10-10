async function getIp() {
  try {
    const response = await fetch("https://api.ipify.org/");

    if (!response.ok) {
      throw new Error("Request failed with status " + response.status);
    }

    const ip = await response.text();
    document.getElementById("ipBtn").textContent = ip;
  } 
  catch (error) {
    console.error("Something went wrong:", error);
  }
}