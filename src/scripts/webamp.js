// Initialize Webamp
document.addEventListener('DOMContentLoaded', function () {
    if (typeof Webamp === 'undefined') {
      console.error('Webamp failed to load');
      return;
    }
  
    const webamp = new Webamp({
      initialTracks: [
        {
          metaData: { artist: "Phonk", title: "Funk Do Inferno" },
          url: "assets/funk-do-inferno-slowed.mp3",
        },
        // ... (all your other tracsk
        {
          metaData: { artist: "Phonk", title: "Pita O Funk" },
          url: "assets/pita-o-funk-super-slowed.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Midnight Drift",
          },
          url: "assets/midnight-drift.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Allo Funk",
          },
          url: "assets/allo-funk-sayfalse-rd12.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Beat Ansiosa",
          },
          url: "assets/beat-ansiosa-hardstyle-remix-slowed.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Brazilian Funk X Slide",
          },
          url: "assets/brazilian-funk-x-slide-funk-x-phonk-type-beat-pega-2-prod-pandemxnium.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Dimensão da Antimatéria",
          },
          url: "assets/dimensão-da-antimatéria-slowed-eiby.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Egoística",
          },
          url: "assets/egoÍstica-slowed-to-perfection.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Funk Do Inferno",
          },
          url: "assets/funk-do-inferno-slowed.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Gonza Funk",
          },
          url: "assets/gonza-funk.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "HIIT 3 2KE",
          },
          url: "assets/hiit-3-2ke-clean-version.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Montagem Explosao Extrema",
          },
          url: "assets/montagem-explosao-extrema.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Montagem Forçe Bater",
          },
          url: "assets/montagem-forÇe-bater.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Montagem Mare Grana",
          },
          url: "assets/montagem-mare-grana-hardstyle-remix.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Montagem Mare Grana Nakama",
          },
          url: "assets/montagem-mare-grana-nakama-imaro-mc-gil-do-andarai-nakama.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "MTG Zona Fatal",
          },
          url: "assets/mtg-zona-fatal.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Mxng0 Slide",
          },
          url: "assets/mxng0-slide-de-ritmo.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Nitox",
          },
          url: "assets/nitox.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Pita O Funk",
          },
          url: "assets/pita-o-funk-super-slowed.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Qaraqshy Z Omega",
          },
          url: "assets/qaraqshy-z-omega-slowed.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "X Menor",
          },
          url: "assets/x-menor.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "X Menor Speed Up",
          },
          url: "assets/x-menor-speed-up-soulfusi-wxrtnax.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "X Mortal",
          },
          url: "assets/x-mortal-super-slowed.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Z Alpha2",
          },
          url: "assets/z-alpha2.mp3",
        },
        {
          metaData: {
            artist: "Phonk",
            title: "Z Ispugalsa",
          },
          url: "assets/z-ispugalsa-ultra-slowed.mp3",
        }
      ],
      zIndex: 9999,
      initialWindowLayout: {
        main: { position: { x: 0, y: 0 } },
        playlist: { position: { x: 0, y: 116 } },
        equalizer: { position: { x: 0, y: 232 } }
      },
      availableSkins: [
        {
          url: "assets/skins/skin.wsz",
          name: "Phonk Skin"
        }
      ],
      enableHotkeys: true,
      enablePersistence: true,
      initialSkin: {
        url: "assets/skins/skin.wsz"
      }
    });
  
    // Play button trigger (make sure this is AFTER webamp is defined)
    const playBtn = document.getElementById("playBtn");
    if (playBtn) {
      playBtn.addEventListener("click", () => {
        webamp.renderWhenReady(document.getElementById("webamp-container"));
      });
    } else {
      // If no play button, render immediately
      const container = document.getElementById('webamp-container');
      if (!container) {
        console.error('Webamp container not found');
        return;
      }
  
      webamp.renderWhenReady(container).then(() => {
        console.log('Webamp rendered successfully');
        webamp.getMediaPlayer().setVolume(0.8);  // ✅ Correct
        webamp.onTrackDidChange((track) => console.log('Track changed:', track));
        webamp.onTrackDidStart((track) => console.log('Track started:', track));
        webamp.onTrackDidEnd((track) => console.log('Track ended:', track));
        webamp.onError((error) => console.error('Webamp error:', error));
      }).catch(error => {
        console.error('Failed to render Webamp:', error);
      });
    }
  });