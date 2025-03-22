const squadMembers = [
    { name: "ADITYA", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "aditya.jpg" },
    { name: "AARYAN CHHABRA", linkedin: "https://www.linkedin.com/in/aaryan-chhabra-5a55b9337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", image: "aaryan-chabra.jpg" },
    { name: "ANSH WALIA", linkedin: "https://linkedin.com/in/ansh-walia", image: "ansh_walia.jpg" },
    { name: "ARNAV GUPTA", linkedin: "https://www.linkedin.com/in/arnav-gupta-80656a337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", image: "arnav_gupta.jpg" },
    { name: "ARUN KUMAR", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "arun_kumar.jpg" },
    { name: "ANUPRIYA", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "anupriya.jpg" },
    { name: "ARCHIE MAINI", linkedin: "https://linkedin.com/in/archie-maini", image: "archie_maini.jpg" },
    { name: "ABHAY GANDOTRA", linkedin: "http://linkedin.com/in/abhay-gandotra-55551b332", image: "abhay_gandotra.jpg" },
    { name: "AARYAN VERMA", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "aaryan_verma.jpg" },
    { name: "GURROOP SINGH VIRK", linkedin: "https://www.linkedin.com/in/gurroop-singh-519b3a339/", image: "gurroop_singh_virk.jpg" },
    { name: "DEV", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "dev.jpg" },
    { name: "HARGUNEET KAUR", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "harguneet_kaur.jpg" },
    { name: "AMAN ARORA", linkedin: "https://www.linkedin.com/in/aman-arora-991a48357?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", image: "aman_arora.jpg" },
    { name: "ASHISH SHARMA", linkedin: "https://linkedin.com/in/ashish-sharma", image: "ashish_sharma.jpg" },
    { name: "AVNEET KAUR", linkedin: "https://www.linkedin.com/in/avneet-chahal-a08a98324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "avneet_kaur.jpg" },
    { name: "HARDIK", linkedin: "https://www.linkedin.com/in/hardik-994103337/", image: "hardik.jpg" },
    { name: "ARYAN KANAS", linkedin: "https://linkedin.com/in/aryan-kanas", image: "aryan_kanas.jpg" },
    { name: "AVNI", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "avni.jpg" },
    { name: "AADIL SOOD", linkedin: "https://www.linkedin.com/in/arun-sama-8b6582330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "aadil_sood.jpg" },
    { name: "DHRUV GUPTA", linkedin: "https://www.linkedin.com/in/dhruv-gupta-b34388326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", image: "dhruv_gupta.jpg" },
    { name: "ARADHYA SHARMA", linkedin: "https://www.linkedin.com/in/aradhya-sharma-277956337?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "aradhya_sharma.jpg" },
    { name: "AARUSH BANSAL", linkedin: "https://www.linkedin.com/in/aarush-bansal-a60547321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "aarush_bansal.jpg" },
    { name: "AADIT AGGARWAL", linkedin: "https://www.linkedin.com/in/aadit-aggarwal-1b4240324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "aadit_aggarwal.jpg" },
    { name: "GUNIT BATRA", linkedin: "http://www.linkedin.com/in/gunit-batra-50755b324", image: "gunit_batra.jpg" },
    { name: "ADITYANSH", linkedin: "https://www.linkedin.com/in/adityansh-318703323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", image: "adityansh.jpg" }
];

const teamList = document.getElementById("team-list");

squadMembers.forEach(member => {
    const div = document.createElement("div");
    div.classList.add("squad-card");

    // Use the image property for the squad member's photo
    div.innerHTML = `
        <div class="squad-img">
            <img src="${member.image}" alt="${member.name}" class="mentor-img">
        </div>
        <h3 class="mt-4 text-lg font-semibold text-gray-300">${member.name}</h3>
        ${member.linkedin !== "#" ? `
            <a href="${member.linkedin}" target="_blank" class="linkedin-icon">
                <img src="LinkedIn_icon.svg.webp" alt="LinkedIn">
            </a>
        ` : ""}
    `;

    teamList.appendChild(div);
});

// Explore button scroll function
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

// Full-screen hero section
document.addEventListener("DOMContentLoaded", function () {
    const heroSection = document.getElementById("hero");
    heroSection.style.height = window.innerHeight + "px";

    window.addEventListener("resize", function () {
        heroSection.style.height = window.innerHeight + "px";
    });
});

// Remove Splash Screen After Animation
window.onload = () => {
    setTimeout(() => {
        const splash = document.getElementById("splash-screen");
        splash.style.opacity = "0";
        splash.style.transform = "scale(1.1)";  // Zoom effect
        setTimeout(() => {
            splash.style.display = "none";
        }, 1000);
    }, 1000);
};

// Tic-Tac-Toe Game Logic
let currentPlayer = "X";
let board = Array(9).fill(null); // Represents the game board
const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

// Winning combinations
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]              // Diagonals
];

// Handle cell click
function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = Array.from(cells).indexOf(cell);

    if (board[cellIndex] || checkWinner()) return; // Prevent overwriting or playing after a win

    board[cellIndex] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        return;
    }

    if (board.every(cell => cell !== null)) {
        statusText.textContent = "It's a draw!";
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
}

// Check for a winner
function checkWinner() {
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }
    return false;
}

// Reset the game
function resetGame() {
    board.fill(null);
    cells.forEach(cell => cell.textContent = "");
    currentPlayer = "X";
    statusText.textContent = "Player X's turn";
}

// Add event listeners to cells
cells.forEach(cell => cell.addEventListener("click", handleCellClick));