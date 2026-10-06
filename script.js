let qrEngine = new QRCode(document.getElementById(qr - code), {
  text: "https://github.com/PeeyushParjapati/My-Bio-QR-CODE",
  width: 128,
  height: 128,
});

function generateBioQR() {
  let liveUrl = document.getElementById("bioUrlInput").value;
  if (liveUrl.trim() !== "") {
    qrEngine.clear();
    qrEngine.makeCode(liveUrl);
  }
}
