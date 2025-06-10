// Change text to the selected font
function changeFont(fontName) {
    document.body.style.fontFamily = fontName;
    localStorage.setItem('selectedFont', fontName);
}
//changes the colours of the webpage to darker ones
function togglelightmode() {
  var mode = document.getElementById("mode");
  if (mode) {
    if (mode.style.backgroundColor === "rgb(138, 228, 250)") {
      mode.style.backgroundColor = "rgb(21, 23, 131)";
      mode.style.color = "white";
    } else {
      mode.style.backgroundColor = "rgb(138, 228, 250)";
      mode.style.color = "black";
    }
  }

  // Toggle mode2 element
  var mode2 = document.getElementById("mode2");
  if (mode2) {
    if (mode2.style.background === "white") {
      mode2.style.background = "black";
      mode2.style.color = "white";
    } else {
      mode2.style.background = "white";
      mode2.style.color = "black";
    }
  }

  savelightmode();
}
// Save the toggled light mode to local storage
function savelightmode() {
    const mode = document.getElementById("mode");
    const currentColor = mode.style.backgroundColor;
    localStorage.setItem('lightModeColor', currentColor);
    const mode2 = document.getElementById("mode2");
    const currentColor2 = mode2.style.background;
    localStorage.setItem('lightModeColor2', currentColor2);
}
//apply saved functions to the page
window.onload = function() {
  // Apply saved font
  const savedFont = localStorage.getItem('selectedFont');
  if (savedFont) {
    document.body.style.fontFamily = savedFont;
  }

  // Apply saved light mode color
  const savedColor = localStorage.getItem('lightModeColor');
  const mode = document.getElementById("mode");
  if (savedColor && mode) {
    mode.style.backgroundColor = savedColor;
    mode.style.color = (savedColor === "rgb(21, 23, 131)") ? "white" : "black";
  }
  const savedColor2 = localStorage.getItem('lightModeColor2');
  const mode2 = document.getElementById("mode2");
  if (savedColor && mode2) {
    mode2.style.backgroundColor = savedColor2;
    mode2.style.color = (savedColor2 === "black") ? "white" : "black";
};
}
// content arrays for generator
const headings = [
    "The Joy of Learning",
    "In the Classroom",
    "School Adventures",
    "The Power of Education",
    "School is a World of Knowledge",
    "Students Are More Than Just Numbers",
    "A step to the future"
];


const images = [
    "https://images.squarespace-cdn.com/content/v1/608a3b0a5fd3dd7f6c6f7a38/a4a0f984-b12c-4512-9827-4099400df453/Books+Vanuatu.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh2qyBu4fnXmqoXB-eeqfm-Rzs6ED9MYAUtg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT8TiB4N6VhNO1A76ZpnhjZPnN5yv6nWDDPg&s",
    "https://sfx.act.edu.au/wp-content/uploads/2023/04/bencalvert-13april23-41-e1682300210380.jpg",
    "https://www.shutterstock.com/image-photo/stack-books-against-background-library-260nw-2459213053.jpg",
    "https://sfx.act.edu.au/wp-content/uploads/2024/07/IMG_8456-scaled-e1721194865119.jpg",
    "https://sfx.act.edu.au/wp-content/uploads/2022/11/home-banner.png"
];

const paragraphs = [
    "Discover the excitement that comes with learning something new every day, making school a place of joy and growth.",
    "Classrooms are where ideas come alive, with hands-on activities and teamwork helping students understand and connect.",
    "From excursions to special events, school adventures create lasting memories and help students learn beyond the classroom.",
    "Education empowers individuals, opening doors to opportunities and shaping a brighter future for everyone.",
    "With endless resources and inspiring teachers, school is a gateway to a world filled with knowledge and discovery.",
    "Every student brings unique talents and perspectives, showing that education is about personal growth, not just grades.",
    "Take a step to the future with every lesson learned and every challenge overcome."
];

// Arrays for custom content 
let customHeadings = [];
let customImages = [];
let customParagraphs = [];

// Load custom arrays from localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
  customHeadings = JSON.parse(localStorage.getItem("customHeadings") || "[]");
  customImages = JSON.parse(localStorage.getItem("customImages") || "[]");
  customParagraphs = JSON.parse(localStorage.getItem("customParagraphs") || "[]");

  // check if the "Add Custom Content" button should be enabled
  document.getElementById("custom-heading").addEventListener("input", checkCustomContent);
  document.getElementById("custom-image").addEventListener("input", checkCustomContent);
  document.getElementById("custom-paragraph").addEventListener("input", checkCustomContent);
});  
    document.addEventListener("DOMContentLoaded", function() {
      // Load saved custom content from localStorage
      if (savedHeading && savedImage && savedParagraph) {
        document.getElementById("heading").textContent = savedHeading;
        document.getElementById("image").src = savedImage;
        document.getElementById("paragraph").textContent = savedParagraph;
      }

      document.getElementById("custom-heading").addEventListener("input", checkCustomContent);
      document.getElementById("custom-image").addEventListener("input", checkCustomContent);
      document.getElementById("custom-paragraph").addEventListener("input", checkCustomContent);
    });


// functions for the randomiser buttons
function getRandomItem(defaultArr, customArr) {
  const all = defaultArr.concat(customArr);
  return all[Math.floor(Math.random() * all.length)];
}

function changeHeading() {
  document.getElementById("heading").textContent = getRandomItem(headings, customHeadings);
}

function changeImage() {
  document.getElementById("image").src = getRandomItem(images, customImages);
}

function changeParagraph() {
  document.getElementById("paragraph").textContent = getRandomItem(paragraphs, customParagraphs);
}

function randomizeAll() {
  changeHeading();
  changeImage();
  changeParagraph();
}

    // Enable/disable the "Add Custom Content" button based on input fields
    function checkCustomContent() {
      const heading = document.getElementById("custom-heading").value;
      const image = document.getElementById("custom-image").value;
      const paragraph = document.getElementById("custom-paragraph").value;
      const addButton = document.getElementById("add-button");
      addButton.disabled = !(heading && image && paragraph);
    }

    // Add the custom content to the page and save to localStorage
    function addCustomContent() {
      const heading = document.getElementById("custom-heading").value;
      const image = document.getElementById("custom-image").value;
      const paragraph = document.getElementById("custom-paragraph").value;

      customHeadings.push(heading);
      customImages.push(image);
      customParagraphs.push(paragraph);

      // Save arrays to localStorage
      localStorage.setItem("customHeadings", JSON.stringify(customHeadings));
      localStorage.setItem("customImages", JSON.stringify(customImages));
      localStorage.setItem("customParagraphs", JSON.stringify(customParagraphs));

      event.preventDefault();

      // Save custom content to localStorage
      localStorage.setItem("custom-heading", heading);
      localStorage.setItem("custom-image", image);
      localStorage.setItem("custom-paragraph", paragraph);

      // Clear the input fields after adding and disable the add custom content button again
      document.getElementById("custom-heading").value = "";
      document.getElementById("custom-image").value = "";
      document.getElementById("custom-paragraph").value = "";
    document.getElementById("add-button").disabled = true; 
  }
//adds custom content into the randomiser
   function getRandomWithCustom(defaultArr, customArr) {
   const all = defaultArr.concat(customArr);
   const index = Math.floor(Math.random() * all.length);
   const isCustom = index >= defaultArr.length;
   return { value: all[index], isCustom };
}