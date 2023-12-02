  // Function to handle form submission
/*function submitForm(event) {
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
  
  
  // Function to validate Firstname and Lastname
  function validateName() {
    const fullnameInput = document.getElementById("fullname");
    const names = fullnameInput.value.trim().split(" ");
    const errorElement = document.getElementById("fullnameError");
  
    if (names.length !== 2) {
      errorElement.textContent = "Please enter both your Firstname and Lastname";
      return false;
    } else {
      // ตรวจสอบว่าทั้งชื่อและนามสกุลขึ้นต้นด้วยตัวอักษรใหญ่
      const firstName = names[0];
      const lastName = names[1];
      const isFirstNameValid = /^[A-Z][a-z]*$/.test(firstName);
      const isLastNameValid = /^[A-Z][a-z]*$/.test(lastName);
  
      if (!isFirstNameValid || !isLastNameValid) {
        errorElement.textContent = "Both first and last names should start with an uppercase letter and contain only English letters";
        return false;
      }
  
      errorElement.textContent = ""; // เคลียร์ข้อความผิดเมื่อถูกต้อง
    }
  
    return true;
  }
  
  
  // Function to validate Student ID
  function validateStudentID() {
    const studentIDInput = document.getElementById("studentID");
    const studentIDPattern = /^6609\d{6}$/; 
    const errorElement = document.getElementById("studentIDError");
    
      if (!studentIDPattern.test(studentIDInput.value)) {
        errorElement.textContent = "Please enter a 10-digit Student ID starting with '6609'.";
        return false;
      } else { errorElement.textContent = ""; }// Clear the error message when valid
      
    return true;
    }
  
  // Function to validate University Email
  function validateEmail() {
    const emailInput = document.getElementById("email");
    const emailPattern = /^.+@dome\.tu\.ac\.th$/;
    const errorElement = document.getElementById("emailError");
    
      if (!emailPattern.test(emailInput.value)) {
        errorElement.textContent =
          "Please provide a valid university email in the format 'xxx.yyy@dome.tu.ac.th'.";
        return false;
      } else { errorElement.textContent = ""; }// Clear the error message when valid
      
    return true;
    }
    
  
   // Function to validate form inputs on user input
   function validateFormOnInput() {
    validateName();
    validateStudentID();
    validateEmail();
    }
    
  
  /*async function fetchActivityTypes() {
    try {
      const response = await fetch(`http://${window.location.hostname}:${port}/getActivityType`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error("Failed to fetch activity types.");
        return [];
      }
    } catch (error) {
      console.error("An error occurred while fetching activity types:", error);
      return [];
    }
  }*/
  
 // Function to populate activity types in the select element
    /* function populateActivityTypes(activityTypes) {
    const activityTypeSelect = document.getElementById("activityType");
    
    for (const type of activityTypes) {
    const option = document.createElement("option");
    option.value = type.id;
    option.textContent = type.value;
    activityTypeSelect.appendChild(option);
    }
    }*/
  
  /*function updateDisplay(data) {
    const displaySection = document.getElementById("displaySection");
    const displayDataElement = document.getElementById("displayData");
  
    const formattedData = Object.entries(data)
      .map(([key, value]) => `"${key}": "${value}"`)
      .join("\n");
  
    displayDataElement.textContent = formattedData;
    displaySection.style.display = "block";
  }*/
  
  // Function to submit the form
  async function submitForm(event) {
    event.preventDefault();
    
    // Validate form inputs before submission
    if (!validateName() || !validateStudentID() || !validateEmail()) {
      return;
    }
  
    const startDateInput = document.getElementById("startDate").value;
    const endDateInput = document.getElementById("endDate").value;
    const startDate = new Date(startDateInput);
    const endDate = new Date(endDateInput);
  
    if (endDate <= startDate) {
      alert("End datetime should be after the start datetime.");
      return;
    }
  
   /* const formData = new FormData(event.target);
    const data = {
      first_name: formData.get("fullname").split(" ")[0],
      last_name: formData.get("fullname").split(" ")[1],
      student_id: parseInt(formData.get("studentID")),
      email: formData.get("email"),
      title: formData.get("workTitle"),
      type_of_work_id: parseInt(formData.get("activityType")),
      academic_year: parseInt(formData.get("academicYear")) - 543,
      semester: parseInt(formData.get("semester")),
      start_date: formData.get("startDate"),
      end_date: formData.get("endDate"),
      location: formData.get("location"),
      description: formData.get("description"),
    };*/
  
    try {
      // Send data to the backend using POST request
      const response = await fetch(`http://${window.location.hostname}:${port}/record`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    
      if (response.ok) {
        const responseData = await response.json();
        console.log("Form data submitted successfully!");
    
        // Format JSON data for display
        const formattedData = Object.entries(responseData.data)
          .map(([key, value]) => `"${key}": "${value}"`)
          .join("\n");
    
        // Display success message with formatted data
        alert(responseData.message + "\n" + formattedData);
  
        document.getElementById("myForm").reset();
      } else {
        console.error("Failed to submit form data.");
    
        // Display error message
        alert("Failed to submit form data. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred while submitting form data:", error);
    }
    }
  
  // Event listener for form submission
  document.getElementById("myForm").addEventListener("submit", submitForm);
    
  // Event listeners for input validation on user input
  document.getElementById("fullname").addEventListener("input", validateName);
  document
  .getElementById("studentID")
  .addEventListener("input", validateStudentID);
  document.getElementById("email").addEventListener("input", validateEmail);
  
  // Onclink submit button
  function getValuetoResult(){     
    document.getElementById('showresult').removeAttribute('hidden')
    let topic = "♡︎ Check your info ♡︎"
    let fullname = document.getElementById('fullname')
    let stid = document.getElementById('studentID')
    let mail = document.getElementById('email')
    let type = document.getElementById('activityType')
    let year = document.getElementById('academicYear')
    let semester = document.getElementById('semester')
    let ac = document.getElementById('activity')
    let start = document.getElementById('startDate')
    let end = document.getElementById('endDate')
    let des = document.getElementById('description')
    let res = document.getElementById('showresult')

    let msg = ''
    msg += '<h1 class="only"><center>' + topic + '</center></h1>';
    msg += '<p class="send"><b>Firstname and Lastname :</b> '+ fullname.value +'</p>'
    msg += '<p class="send"><b>Student ID :</b> '+ stid.value +'</p>'
    msg += '<p class="send"><b>University Email :</b> '+ mail.value +'</p>'
    msg += '<p class="send"><b>Major :</b> '+ type.value +'</p>'
    msg += '<p class="send"><b>Academic Year :</b> ' + year.value +'</p>'
    msg += '<p class="send"><b>Semester :</b> '+ semester.value +'</p>'
    msg += '<p class="send"><b>Activity :</b>' + ac.value + '</p>'
    msg += '<p class="send"><b>Start Date/Time :</b> '+ start.value +'</p>'
    msg += '<p class="send"><b>End Date/Time :</b> '+ end.value +'</p>'
    msg += '<p class="send"><b>Description :</b> '+ des.value +'</p>'
  
    res.innerHTML = msg
  
    res.scrollIntoView()
  } 