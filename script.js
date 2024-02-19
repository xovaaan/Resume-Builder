// Function to update the resume based on input values
function updateResume() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const experience = document.getElementById('experience').value;
    const skills = document.getElementById('skills').value;
    const certificationName = document.getElementById('certificationName').value;
    const certificationCompany = document.getElementById('certificationCompany').value;
    const externalSkills = document.getElementById('externalSkills').value;
    const activities = document.getElementById('activities').value;

    // Logic to get values from other input fields (add similar lines for each field)

    const resumeOutput = document.getElementById('resumeOutput');
    // Update the resume content based on input values
    resumeOutput.innerHTML = `
        <h2>${firstName} ${lastName}</h2>
        <p>Experience: ${experience} years</p>
        <p>Skills: ${skills}</p>
        <h3>Certification:</h3>
        <p>Certification Name: ${certificationName}</p>
        <p>Certification Company: ${certificationCompany}</p>
        <p>External Skills: ${externalSkills}</p>
        <p>Activities: ${activities}</p>
        <!-- Include other details here -->
    `;
}

// Function to dynamically add project fields
function addProject() {
    const projectsContainer = document.getElementById('projectsContainer');
    const projectFields = document.createElement('div');
    projectFields.innerHTML = `
        <label for="projectName">Project Name:</label>
        <input type="text" class="projectName" oninput="updateResume()">

        <label for="projectDetail">Project Detail:</label>
        <input type="text" class="projectDetail" oninput="updateResume()">
    `;
    projectsContainer.appendChild(projectFields);
    updateResume(); // Update the resume when a new project is added
}

// Function to dynamically add education fields
function addEducation() {
    const educationContainer = document.getElementById('educationContainer');
    const educationFields = document.createElement('div');
    educationFields.innerHTML = `
        <label for="universityName">University/College Name:</label>
        <input type="text" class="universityName" oninput="updateResume()">

        <label for="degreeName">Degree Name:</label>
        <input type="text" class="degreeName" oninput="updateResume()">

        <label for="cgpa">CGPA:</label>
        <input type="text" class="cgpa" oninput="updateResume()">

        <label for="relevantCourses">Relevant Courses:</label>
        <input type="text" class="relevantCourses" oninput="updateResume()">
    `;
    educationContainer.appendChild(educationFields);
    updateResume(); // Update the resume when a new education entry is added
}

// Function to generate and download the PDF
function generatePDF(pdfName) {
    const element = document.getElementById('resumeOutput');
    
    html2pdf(element, {
        margin: 10,
        filename: pdfName + '.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}

// Function to confirm download and trigger PDF generation
function confirmDownload() {
    const pdfName = document.getElementById('pdfName').value;
    if (pdfName) {
        generatePDF(pdfName);
        closePopup();
    }
}

// Function to trigger the download process
function downloadCV() {
    openPopup();
}

// Function to display the download popup
function openPopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
}

// Function to close the download popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
