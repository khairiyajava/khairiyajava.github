// list of textarray
const textArray = [
  "Welcome to my blog.",
  "Read my latest blog post.",
  "Join my newsletter for exclusive content.",
  "Connect with me on social media."
];

let index = 0;
const changingText = document.querySelector("#changing-text");
//to set length of text in array and time of changing text
setInterval(() => {
  index = (index + 1) % textArray.length;
  changingText.innerHTML = `
    <h2>${textArray[index]}</h2>
    <p>Check out my amazing worderfull webpages below.</p>`;
}, 3000);