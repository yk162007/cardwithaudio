let currentPage = 1;
const totalPages = 3;

// Get the audio element
const song = document.getElementById('birthdaySong');

function showPage(pageNum) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page, index) => {
    page.style.display = (index + 1 === pageNum) ? 'block' : 'none';
  });

  // Play the song on page 2 and 3
  if (pageNum === 2 || pageNum === 3) {
    if (song.paused) {
      song.play();
    }
  } else {
    song.pause();
    song.currentTime = 0;
  }

  currentPage = pageNum;
}

function nextPage() {
  currentPage = (currentPage % totalPages) + 1;
  showPage(currentPage);
}

function prevPage() {
  currentPage = (currentPage - 2 + totalPages) % totalPages + 1;
  showPage(currentPage);
}

document.addEventListener("DOMContentLoaded", () => {
  showPage(currentPage); // Show first page on load
});
