const resumeForm = document.getElementById("resume-form");
const displayName = document.getElementById("display-name");
const displayContact = document.getElementById("display-contact");
const displayDegree = document.getElementById("display-degree");
const displaySkillList = document.getElementById("display-skill-list");
const displayWorkExperience = document.getElementById("display-work-experience");

resumeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture form input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const degree = document.getElementById("degree").value;
    const university = document.getElementById("university").value;
    const graduation = document.getElementById("graduation").value;
    const skills = document.getElementById("skills").value.split(",");
    const workExperience = document.getElementById("work-experience").value;

    // Populate resume fields
    displayName.textContent = name;
    displayContact.textContent = `Email: ${email} | Phone: ${phone}`;
    displayDegree.textContent = `${degree}, ${university} - Graduation Year: ${graduation}`;

    // Clear and add new skills to the skills list
    displaySkillList.innerHTML = "";
    skills.forEach(function(skill) {
        const li = document.createElement("li");
        li.textContent = skill.trim();
        li.contentEditable = "true"; // Make each skill editable
        li.addEventListener("blur", handleSkillEdit);
        displaySkillList.appendChild(li);
    });

    // Populate work experience
    displayWorkExperience.textContent = workExperience;
});

// Function to handle editing skills in place
function handleSkillEdit(event) {
    const target = event.target;
    target.textContent = target.textContent.trim() || "";
}

// Apply contenteditable and event listeners for other editable sections
[displayName, displayContact, displayDegree, displayWorkExperience].forEach(function(element) {
    element.contentEditable = "true";
    element.addEventListener("blur", function() {
        element.textContent = element.textContent.trim() || "";
    });
});
