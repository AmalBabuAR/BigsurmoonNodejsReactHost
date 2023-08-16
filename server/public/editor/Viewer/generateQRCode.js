// function getQueryParam(param) {
//     const queryString = window.location.search;
//     const urlParams = new URLSearchParams(queryString);
//     return urlParams.get(param);
// }


// const idFromUrl = getQueryParam("id");

// // Replace this URL with the one you want to generate a QR code for
// const urlToGenerateQRCodeFor = `http://localhost:5000/generate_scene_view/${idFromUrl}`;

// // Function to generate and display the QR code
// function generateQRCode() {
 
//         // Generate QR code
//         const qr = new QRCode(document.getElementById("qrCodeImage"), {
//             text: urlToGenerateQRCodeFor,
//             width: 200,
//             height: 200,
//         });
 
// }

// // Call the function to generate and display the QR code
// generateQRCode();
