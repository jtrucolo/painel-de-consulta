const playButtons = document.querySelectorAll('.play_btn');
const iframes = document.querySelectorAll('iframe');

playButtons.forEach((playButton, index) => {
  const iframe = iframes[index];
  const closeButton = document.createElement('button');
  closeButton.classList.add('close-button');
  closeButton.innerHTML = '&times;';
  iframe.parentElement.insertBefore(closeButton, iframe);

  playButton.addEventListener('click', () => {
    playButton.style.display = 'none';
    iframe.style.display = 'block';
    closeButton.style.display = 'block';
  });

  closeButton.addEventListener('click', () => {
    iframe.style.display = 'none';
    closeButton.style.display = 'none';
    playButton.style.display = 'block';
  });
});

document.addEventListener('keydown', event => {
  if (event.keyCode === 27) {
    iframes.forEach((iframe, index) => {
      if (iframe.style.display === 'block') {
        const playButton = playButtons[index];
        const closeButton = iframe.previousElementSibling;

        iframe.style.display = 'none';
        closeButton.style.display = 'none';
        playButton.style.display = 'block';
      }
    });
  }
});
