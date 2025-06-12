// Define your video sources here (absolute paths for GitHub Pages)
const videoSources = [
  '/phonktopia/assets/vid2.mov',
  '/phonktopia/assets/vid3.mov',
  '/phonktopia/assets/vid4.mov',
  '/phonktopia/assets/vid5.mp4',
  '/phonktopia/assets/vid6.mov',
  '/phonktopia/assets/vid7.mp4',
  '/phonktopia/assets/vid8.mp4',
  '/phonktopia/assets/vid9.mov',
  '/phonktopia/assets/vid10.mov',
  '/phonktopia/assets/vid11.mov',
  '/phonktopia/assets/vid12.mov'
];

// Reference the video feed container
const videoFeed = document.getElementById('video-feed');
const popupOverlay = document.querySelector('.video-popup-overlay');
const popupContent = document.querySelector('.video-popup-content');

// Create intersection observer for autoplay
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const video = entry.target.querySelector('video');
    if (entry.isIntersecting) {
      video.play().catch(error => console.log('Autoplay prevented:', error));
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

// Dynamically create and insert each video block
videoSources.forEach((src, index) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('video-wrapper-dynamic');

  // Use backticks for the template literal!
  wrapper.innerHTML = `
    <div class="video-frame-custom">
      <video id="phonkVideo_${index}" src="${src}" muted loop playsinline></video>
      <img src="/phonktopia/assets/videoframe.png" alt="Video Frame" class="video-frame-png">
    </div>
  `;

  videoFeed.appendChild(wrapper);

  // Observe the wrapper for autoplay
  observer.observe(wrapper);

  // Handle video click for popup (desktop only)
  const videoFrame = wrapper.querySelector('.video-frame-custom');
  videoFrame.addEventListener('click', () => {
    if (window.innerWidth > 480) { // Only on desktop
      const video = wrapper.querySelector('video').cloneNode(true);
      const frame = wrapper.querySelector('.video-frame-png').cloneNode(true);
      popupContent.innerHTML = '';
      popupContent.appendChild(video);
      popupContent.appendChild(frame);
      popupOverlay.classList.add('active');
      video.play().catch(error => console.log('Popup video play prevented:', error));
    }
  });
});
