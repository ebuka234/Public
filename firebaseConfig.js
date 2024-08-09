// Import Firebase modules
import { Config } from './config'; // Ensure this path is correct
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Initialize Firebase
const app = initializeApp(Config);
const db = getFirestore(app);



export { db } ;

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit-btn'); // Get the submit button by its id
  if (submitBtn) {
    submitBtn.addEventListener('click', async (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      try {
        // Add document to Firestore
        await addDoc(collection(db, 'messages'), {
          name: name,
          phone: phone,
          email: email,
          message: message,
          timestamp: new Date() // Add a timestamp
        });

        alert('Message sent successfully!');
        document.querySelector('.contact-form').reset(); // Clear the form
      } catch (error) {
        console.error('Error adding document: ', error);
        alert('Error sending message, please try again.');
      }
    });
  } else {
    console.error('Submit button not found');
  }
});