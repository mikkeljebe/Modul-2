const videoElement = document.getElementById("video");
const startButton = document.getElementById("startButton");
const chooseButton = document.getElementById("chooseButton");

// Promt user to select media strea, pass to video elemnet. then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadeddata = () => {
      videoElement.play();
    };
  } catch (error) {
    // catch error
    console.log("obs, feil her", error);
  }
}

chooseButton.addEventListener("click", selectMediaStream);
startButton.addEventListener("click", async () => {
  // Disable button
  startButton.disabled.true;
  // Start pip
  await videoElement.requestPictureInPicture();
  // Reset button
  startButton.disabled.false;
});
// // on load
// selectMediaStream();
