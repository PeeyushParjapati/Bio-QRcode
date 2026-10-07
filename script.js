let qrEngine;

document.addEventListener("DOMContentLoaded", () => {
  const qrContainer = document.getElementById("qrcode");

  if (!qrContainer) {
    console.error("QR code container #qrcode was not found.");
    return;
  }

  if (typeof QRCode === "undefined") {
    console.error(
      "QRCode library is not loaded. Check the QRCode <script> in Bio.html.",
    );
    return;
  }

  qrEngine = new QRCode(qrContainer, {
    text: "https://github.com/PeeyushParjapati/My-Bio-QR-CODE",
    width: 128,
    height: 128,
  });
});

function generateBioQR() {
  const input = document.getElementById("bioUrlInput");

  if (!input) {
    return;
  }

  const liveUrl = input.value.trim();

  if (!qrEngine) {
    console.error("QR engine has not been initialized yet.");
    return;
  }

  if (liveUrl !== "") {
    qrEngine.clear();
    qrEngine.makeCode(liveUrl);
  }
}
