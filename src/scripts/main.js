// Initialize Webamp
const webamp = new Webamp({
    initialTracks: [
        {
            metaData: {
                artist: "Phonk",
                title: "Phonktopia",
            },
            defaultName: "Phonktopia.wsz",
            url: "assets/skins/Phonk.wsz",
        },
    ],
});

// Wait for Webamp to be ready
webamp.renderWhenReady(document.getElementById("webamp-container")).then(() => {
    console.log("Webamp is ready!");
});

// Handle video feed
const isMobile = window.innerWidth <= 480;
const webcamVideo = document.getElementById('webcam');
const phoneVideo = document.getElementById('phone-video');

if (!isMobile) {
    // Only initialize webcam on desktop
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                webcamVideo.srcObject = stream;
            })
            .catch(function(error) {
                console.error("Error accessing webcam:", error);
            });
    }
} else {
    // On mobile, ensure phone video is playing
    phoneVideo.play().catch(function(error) {
        console.error("Error playing phone video:", error);
    });
} 