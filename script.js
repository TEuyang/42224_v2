function showDocumentPopup(src, alt, notes) {
  var popup = document.getElementById("documentPopup");
  var img = document.getElementById("popupImage");
  var mediaContainer = document.getElementById("popupMedia");
  var notesDiv = document.getElementById("popupNotes");

  // Hide the video container and clear its content
  mediaContainer.innerHTML = "";
  mediaContainer.style.display = "none";

  // Set the image source and alt text
  img.src = src;
  img.alt = alt;
  img.style.display = "block"; // Make sure the image is displayed

  // Set the notes content and make sure the notes div is displayed
  notesDiv.innerHTML = notes;
  notesDiv.style.display = "block"; // Use the appropriate display value

  // Show the popup
  popup.style.display = "block";
}

function showVideoPopup(videoSrc) {
  var popup = document.getElementById("documentPopup");
  var img = document.getElementById("popupImage");
  var mediaContainer = document.getElementById("popupMedia");
  var notesDiv = document.getElementById("popupNotes");

  // Clear and hide the image element and notes when showing a video
  img.style.display = "none";
  notesDiv.style.display = "none";

  // Set the innerHTML of mediaContainer to include the video player
  mediaContainer.innerHTML = `
    <video controls width="100%">
      <source src="${videoSrc}" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
  mediaContainer.style.display = "block"; // Ensure the video container is visible

  // Show the popup
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("documentPopup");
  var img = document.getElementById("popupImage"); // This is the new line
  var mediaContainer = document.getElementById("popupMedia");

  popup.style.display = "none";

  // Clear both media containers
  img.style.display = "none";
}
