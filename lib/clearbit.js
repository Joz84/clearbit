const button = document.getElementById("clearbitSubmit");
const input = document.getElementById("clearbitEmail");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");

const getInformation =(event) => {
  event.preventDefault();
  const email = input.value;
  console.log(email);
  fetch(`https://person.clearbit.com/v1/people/email/${email}`,{
  headers: {'Authorization': 'Bearer sk_ebac5f9cf33d3f89d0c17d0c895b42ba'}
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
    const name = data.name.fullName;
    const email = data.email;
    const bio = data.bio;
    const location = data.location;
    userName.innerText = name;
    userEmail.innerText = email;
    userBio.innerText = bio;
    userLocation.innerText = location;
  });
}

button.addEventListener("click", getInformation);
