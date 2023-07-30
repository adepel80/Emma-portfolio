function validateForm(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Validate name (not empty)
      if (name.trim() === '') {
        alert('Please enter your name.');
        return;
      }
  
      // Validate email (format)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Validate message
      if (message.trm() === '') {
        alert('Please add your message')
        return;
      }
  
      // If form is valid, submit it
      document.getElementById('myForm').submit();
    }
