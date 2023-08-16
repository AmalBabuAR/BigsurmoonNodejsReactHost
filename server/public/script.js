function myFunction() {
  const iframe = document.getElementById('myId');

  // Extract the URL from the src attribute
  const url = iframe.src;

  // Parse the URL to extract the id
  const id = url.split('/:')[1];

  console.log('Extracted ID:', id);
  }
  