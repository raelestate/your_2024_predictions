document.addEventListener('DOMContentLoaded', () => {
    const commentText = document.getElementById('comment-text');
    const submitCommentBtn = document.getElementById('submit-comment-btn');
  
    // Client ID and API key for Gmail API
    const clientId = '411155685500-porjhusqjk0ounbuibarbfk9pjhrknjs.apps.googleusercontent.com';
    const apiKey = 'AIzaSyDetd6LQPi3wljduvII1CuGkbD0iNXaaaI';
  
    // Function to check if the Google API client is loaded
    function isGoogleApiClientLoaded() {
      return typeof google !== 'undefined' && google.auth && google.apis;
    }
  
    // Function to show a toast message
    function showToast(message, isSuccess = true) {
      const toast = document.createElement('div');
      toast.classList.add('toast', isSuccess ? 'success' : 'error');
      toast.textContent = message;
      document.body.appendChild(toast);
  
      // Automatically remove the toast after a delay
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 3000); // Adjust the delay as needed
    }
  
    // Submit comment on button click
    submitCommentBtn.addEventListener('click', async () => {
      const comment = commentText.value.trim();
  
      if (!comment) {
        showToast('Please enter a message.', false);
        return;
      }
  
      // Your email address
      const recipientEmail = 'nerirhel@gmail.com';
  
      // Check if the Google API client is loaded
      if (!isGoogleApiClientLoaded()) {
        showToast('Google API client is not loaded. Please try again.', false);
        return;
      }
  
      // Initialize the Gmail API client
      const client = await google.auth.getClient({ clientId, apiKey });
      const gmail = google.apis.gmail({ version: 'v1', client });
  
      try {
        // Create the message object
        const message = {
          to: recipientEmail,
          subject: 'Anonymous Message',
          text: comment,
        };
  
        // Send the message using the Gmail API
        await gmail.users.messages.send({ userId: 'me', resource: message });
  
        showToast('Message sent successfully.', true);
        commentText.value = '';
      } catch (error) {
        console.error(error);
        showToast('An error occurred while sending the message.', false);
      }
    });
  
    // Load the Google API client library
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.onload = () => {
      // Check if the Google API client is loaded before logging success
      if (isGoogleApiClientLoaded()) {
        console.log('Google API client loaded successfully.');
      } else {
        console.error('Failed to load Google API client.');
      }
    };
    script.onerror = () => {
      console.error('Error loading Google API client.');
    };
    document.body.appendChild(script);
  });
  