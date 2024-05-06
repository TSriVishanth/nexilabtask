// Dummy data
let resumes = ["Resume1.pdf", "Resume2.pdf", "Resume3.pdf"];
let validatedResumes = [];

// Function to display resumes in table
function displayResumes() {
  let table = document.getElementById("resumesTable");
  table.innerHTML = "<tr><th>Select</th><th>Resume Name</th></tr>";

  resumes.forEach((resume) => {
    table.innerHTML += `<tr>
                                    <td><input type="checkbox" name="resumeCheckbox" value="${resume}"></td>
                                    <td>${resume}</td>
                                </tr>`;
  });
}

// Function to validate selected resumes
function validateSelectedResumes() {
  let selectedResumes = document.querySelectorAll(
    'input[name="resumeCheckbox"]:checked'
  );

  selectedResumes.forEach((selectedResume) => {
    let index = resumes.indexOf(selectedResume.value);
    if (index !== -1) {
      validatedResumes.push(resumes[index]);
      resumes.splice(index, 1);
    }
  });

  displayResumes();
  displayValidatedResumes();
}

// Function to display validated resumes
function displayValidatedResumes() {
  let table = document.getElementById("validatedResumesTable");
  table.innerHTML = "<tr><th>Select</th><th>Validated Resume</th></tr>";

  validatedResumes.forEach((resume) => {
    table.innerHTML += `<tr>
                                    <td><input type="checkbox" name="validatedResumeCheckbox" value="${resume}"></td>
                                    <td>${resume}</td>
                                </tr>`;
  });
}

// Function to communicate with selected resumes
function communicateWithSelected() {
  let selectedResumes = document.querySelectorAll(
    'input[name="validatedResumeCheckbox"]:checked'
  );

  selectedResumes.forEach((selectedResume) => {
    let index = validatedResumes.indexOf(selectedResume.value);
    if (index !== -1) {
      // Perform communication operation here (e.g., send email)
      validatedResumes.splice(index, 1);
    }
  });

  displayValidatedResumes();
}

// Initial display
displayResumes();
displayValidatedResumes();
