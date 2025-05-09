// Button Click
const btn = document.getElementById('magicButton');
btn.addEventListener('click', () => {
  btn.innerText = "You clicked me!";
  btn.style.backgroundColor = "#2196F3";
});

// Hover effect
btn.addEventListener('mouseenter', () => {
  btn.style.opacity = 0.8;
});
btn.addEventListener('mouseleave', () => {
  btn.style.opacity = 1;
});

// Keypress
document.addEventListener('keydown', (e) => {
  document.getElementById('keyDisplay').innerText = `You pressed: ${e.key}`;
});

// Secret double click
function showSecret() {
  alert("🎉 Secret Unlocked!");
}

// Image Gallery
const images = [
  "Images/pexels-photo-206359.jpeg",
  "Images/pexels-photo-1064162.jpeg",
  "Images/pexels-photo-1796727.jpeg"
];
let index = 0;

function showImage() {
  const img = document.getElementById("galleryImage");
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 300);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

// Tabs
document.querySelectorAll(".tabBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tabContent").forEach(tc => tc.style.display = "none");
    document.getElementById("tab" + btn.dataset.tab).style.display = "block";
  });
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters.");
    return;
  }

  alert("Form submitted successfully!");
});

// Real-time password feedback
document.getElementById("password").addEventListener("input", (e) => {
  const feedback = document.getElementById("passwordFeedback");
  if (e.target.value.length < 8) {
    feedback.textContent = "Password too short";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "✅ Password length OK";
    feedback.style.color = "green";
  }
});
