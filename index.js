let courseCount = 0;

function addCourse() {
  courseCount++;
  const container = document.getElementById("courses");
  document.getElementById("description").innerText=" ";
  const div = document.createElement("div");
  div.className = "course-inputs";

  div.innerHTML = `
    <label>Subject ${courseCount} 
    <br>
      <input type="number" min="0" max="10" step="0.01" class="grade" placeholder="Grade Point">
    </label>
      <input type="number" min="1" class="credit" placeholder="Credits">
    </label>
  `;
  
  container.appendChild(div);
}

function delCourse() {
  courseCount=0;
  document.getElementById("courses").innerText="";
  const container = document.getElementById("courses");
  const p = document.createElement("p");
  
  p.innerHTML = `
     <p id="description">Click on Add Subject ?</p>
  `;
  
  container.appendChild(p);

}

function calculateCGPA() {
  const grades = document.querySelectorAll('.grade');
  const credits = document.querySelectorAll('.credit');
  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    const grade = parseFloat(grades[i].value);
    const credit = parseFloat(credits[i].value);
    if (!isNaN(grade) && !isNaN(credit)) {
      totalPoints += grade * credit;
      totalCredits += credit;
    }
  }

  const cgpa = totalPoints / totalCredits;
  document.getElementById("result").innerText = 
    isNaN(cgpa) ? "Please enter valid data." : `Your CGPA is: ${cgpa.toFixed(2)}`;
}
