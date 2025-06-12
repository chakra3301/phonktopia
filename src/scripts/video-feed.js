// Initialize Webamp
const webamp = new Webamp({
  initialTracks: [
    {
      metaData: {
        artist: "Phonk",
        title: "Funk Do Inferno",
      },
      url: "./assets/PHONK SITE MP3s/funk-do-inferno-slowed.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "MTG Zona Fatal",
      },
      url: "./assets/PHONK SITE MP3s/mtg-zona-fatal.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "HIIT 3 2KE",
      },
      url: "./assets/PHONK SITE MP3s/hiit-3-2ke-clean-version.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Allo Funk",
      },
      url: "./assets/PHONK SITE MP3s/allo-funk-sayfalse-rd12.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "X Mortal",
      },
      url: "./assets/PHONK SITE MP3s/x-mortal-super-slowed.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Qaraqshy Z Omega",
      },
      url: "./assets/PHONK SITE MP3s/qaraqshy-z-omega-slowed.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Egoística",
      },
      url: "./assets/PHONK SITE MP3s/egoÍstica-slowed-to-perfection.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Montagem Forçe Bater",
      },
      url: "./assets/PHONK SITE MP3s/montagem-forÇe-bater.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Dimensão da Antimatéria",
      },
      url: "./assets/PHONK SITE MP3s/dimensão-da-antimatéria-slowed-eiby.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Montagem Mare Grana",
      },
      url: "./assets/PHONK SITE MP3s/montagem-mare-grana-hardstyle-remix.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Montagem Explosao Extrema",
      },
      url: "./assets/PHONK SITE MP3s/montagem-explosao-extrema.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Nitox",
      },
      url: "./assets/PHONK SITE MP3s/nitox.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Brazilian Funk X Slide",
      },
      url: "./assets/PHONK SITE MP3s/brazilian-funk-x-slide-funk-x-phonk-type-beat-pega-2-prod-pandemxnium.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Beat Ansiosa",
      },
      url: "./assets/PHONK SITE MP3s/beat-ansiosa-hardstyle-remix-slowed.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Mxng0 Slide",
      },
      url: "./assets/PHONK SITE MP3s/mxng0-slide-de-ritmo.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "X Menor Speed Up",
      },
      url: "./assets/PHONK SITE MP3s/x-menor-speed-up-soulfusi-wxrtnax.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Gonza Funk",
      },
      url: "./assets/PHONK SITE MP3s/gonza-funk.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Z Alpha2",
      },
      url: "./assets/PHONK SITE MP3s/z-alpha2.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Montagem Mare Grana Nakama",
      },
      url: "./assets/PHONK SITE MP3s/montagem-mare-grana-nakama-imaro-mc-gil-do-andarai-nakama.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "X Menor",
      },
      url: "./assets/PHONK SITE MP3s/x-menor.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Z Ispugalsa",
      },
      url: "./assets/PHONK SITE MP3s/z-ispugalsa-ultra-slowed.mp3",
    },
    {
      metaData: {
        artist: "Phonk",
        title: "Pita O Funk",
      },
      url: "./assets/PHONK SITE MP3s/pita-o-funk-super-slowed.mp3",
    }
  ],
  zIndex: 9999,
  initialWindowLayout: {
    main: { position: { x: 0, y: 0 } },
    playlist: { position: { x: 0, y: 116 } },
    equalizer: { position: { x: 0, y: 232 } }
  },
  availableSkins: [],
  enableHotkeys: true,
  enablePersistence: true
});

// Don't forget to render Webamp
webamp.renderWhenReady(document.getElementById('webamp-container')).then(() => {
  // Ensure the track is loaded and ready to play
  webamp.setVolume(0.8);
  // Add error handling for track loading
  webamp.onTrackDidChange((track) => {
    console.log('Track changed:', track);
  });
  webamp.onTrackDidStart((track) => {
    console.log('Track started:', track);
  });
  webamp.onTrackDidEnd((track) => {
    console.log('Track ended:', track);
  });
  webamp.onError((error) => {
    console.error('Webamp error:', error);
  });
});

// Define your video sources here (relative paths to video files)
const videoSources = [
  'assets/vid2.mov',
  'assets/vid3.mov',
  'assets/vid4.mov',
  'assets/vid5.mp4',
  'assets/vid6.mov',
  'assets/vid7.mp4',
  'assets/vid8.mp4',
  'assets/vid9.mov',
  'assets/vid10.mov',
  'assets/vid11.mov',
  'assets/vid12.mov'
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
    if (window.innerWidth > 480) { // Only on desktop
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
