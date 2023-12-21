const apiUrl = "https://random.dog/woof.json";

const showDog = ({ url }) => {
  const image = document.getElementsByClassName("image");
  image.src = url;
};

const callApi = async () => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    showDog(data);
    console.log(data.url);
  } catch (err) {
    console.log("ERRORRR:", err);
    alert("Error at API Fetching");
  }
};

callApi();
