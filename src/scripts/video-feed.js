// Define your video sources here (relative paths to video files)
const videoSources = [
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid1.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid2.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid3.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid4.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid5.mp4',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid6.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid7.mp4',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid8.mp4',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid9.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid10.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid11.mov',
  'https://pub-47d44b4e2e4c43d7922bf3cc7715f8b0.r2.dev/vid12.mov'
];

// Reference the video feed container
const videoFeed = document.getElementById('video-feed');
const popupOverlay = document.querySelector('.video-popup-overlay');
const popupContent = document.querySelector('.video-popup-content');

// Create intersection observer for autoplay
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target.querySelector('video');
    if (entry.isIntersecting && !isMobile()) {
      video.play();
    } else {
      video.pause();
    }
  });
}, {
  threshold: 0.7 // Video will play when 70% is visible
});

// Handle popup close
popupOverlay.addEventListener('click', (e) => {
  if (e.target === popupOverlay) {
    const video = popupContent.querySelector('video');
    if (video) {
      video.pause();
    }
    popupOverlay.classList.remove('active');
    popupContent.innerHTML = '';
  }
});

function isMobile() {
    return window.innerWidth <= 480;
}

function createVideoElement(video) {
    const videoElement = document.createElement('div');
    videoElement.className = 'video-item';
    videoElement.innerHTML = `
        <img src="${video.thumbnail}" alt="${video.title}" />
        <div class="video-info">
            <h3>${video.title}</h3>
            <p>${video.description}</p>
        </div>
        <button class="play-button">Play</button>
    `;
    if (!isMobile()) {
        videoElement.addEventListener('click', () => showVideoPopup(video));
    } else {
        const playButton = videoElement.querySelector('.play-button');
        playButton.addEventListener('click', () => {
            const video = videoElement.querySelector('video');
            if (video) {
                video.play();
            }
        });
    }
    return videoElement;
}

// Dynamically create and insert each video block
videoSources.forEach((src, index) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('video-wrapper-dynamic');

  // Use backticks for the template literal!
  wrapper.innerHTML = `
    <div class="video-frame-custom">
      <video id="phonkVideo_${index}" src="${src}" muted loop></video>
      <img src="assets/videoframe.png" alt="Video Frame" class="video-frame-png">
    </div>
  `;

  videoFeed.appendChild(wrapper);

  // Observe the wrapper for autoplay
  observer.observe(wrapper);

  // Handle video click for popup (desktop only)
  const videoFrame = wrapper.querySelector('.video-frame-custom');
  videoFrame.addEventListener('click', () => {
    if (window.innerWidth > 600) { // Only on desktop
      const video = wrapper.querySelector('video').cloneNode(true);
      const frame = wrapper.querySelector('.video-frame-png').cloneNode(true);
      popupContent.innerHTML = '';
      popupContent.appendChild(video);
      popupContent.appendChild(frame);
      popupOverlay.classList.add('active');
      video.play();
    }
  });
});
