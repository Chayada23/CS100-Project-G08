// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevents the default form submission behavior
  
    // Extract form data using FormData
    const formData = new FormData(event.target);
  
    // Loop through the form data and log each field's name and value
    for (const [name, value] of formData) {
      console.log(name, value);
    }
  
    // Reset the form after submission
    document.getElementById("myForm").reset();
  }
  
  // Attach a submit event listener to the form
  document.getElementById("myForm").addEventListener("submit", submitForm);
  
  /*function showAlert(name) {
    alert('คุณคลิกที่ ' + name + ' แล้ว');
  }*/

  function showNuchAlert() {
    alert('talk to Nuch ♡︎ : ไม่จำเป็นต้องแข่งขัน เพราะเรามันไม่ใช่ไก่ ');
  }

  function showNammonAlert() {
    alert('talk to Nammon ♡︎ : ในวันที่เราล้ม เข่าเราจะถลอก');
  }

  function showNamfonAlert() {
    alert('talk to Namfon ♡︎ : Look just good things and grow hapily every day');
  }


