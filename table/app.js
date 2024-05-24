
let userData = document.querySelector(".userData")

let data = [
    {
        name: 'John Doe',
        fatherName: 'Richard Doe',
        age: 16,
        rollNo: '101',
        class: '10th Grade',
      },
      {
        name: 'Jane Smith',
        fatherName: 'Robert Smith',
        age: 15,
        rollNo: '102',
        class: '9th Grade',
      },
      {
        name: 'Michael Johnson',
        fatherName: 'James Johnson',
        age: 17,
        rollNo: '103',
        class: '11th Grade',
      },
      {
        name: 'Emily Davis',
        fatherName: 'William Davis',
        age: 14,
        rollNo: '104',
        class: '8th Grade',
      },
      {
        name: 'Jessica Brown',
        fatherName: 'Charles Brown',
        age: 16,
        rollNo: '105',
        class: '10th Grade',
      },
      {
        name: 'Daniel Wilson',
        fatherName: 'Thomas Wilson',
        age: 15,
        rollNo: '106',
        class: '9th Grade',
      },
      {
        name: 'Sarah Taylor',
        fatherName: 'Andrew Taylor',
        age: 17,
        rollNo: '107',
        class: '11th Grade',
      },
      {
        name: 'David Lee',
        fatherName: 'George Lee',
        age: 14,
        rollNo: '108',
        class: '8th Grade',
      },
      {
        name: 'Laura Martin',
        fatherName: 'Paul Martin',
        age: 16,
        rollNo: '109',
        class: '10th Grade',
      },
      {
        name: 'Kevin White',
        fatherName: 'Mark White',
        age: 15,
        rollNo: '110',
        class: '9th Grade',
      },
      {
        name: 'Anna Harris',
        fatherName: 'Steven Harris',
        age: 17,
        rollNo: '111',
        class: '11th Grade',
      },
      {
        name: 'Brian Clark',
        fatherName: 'Edward Clark',
        age: 14,
        rollNo: '112',
        class: '8th Grade',
      },
      {
        name: 'Sophia Lewis',
        fatherName: 'Henry Lewis',
        age: 16,
        rollNo: '113',
        class: '10th Grade',
      },
      {
        name: 'Christopher Walker',
        fatherName: 'Frank Walker',
        age: 15,
        rollNo: '114',
        class: '9th Grade',
      },
      {
        name: 'Grace Hall',
        fatherName: 'Peter Hall',
        age: 17,
        rollNo: '115',
        class: '11th Grade',
      },
      {
        name: 'Justin Allen',
        fatherName: 'Patrick Allen',
        age: 14,
        rollNo: '116',
        class: '8th Grade',
      },
      {
        name: 'Olivia Young',
        fatherName: 'Bruce Young',
        age: 16,
        rollNo: '117',
        class: '10th Grade',
      },
      {
        name: 'Nathan Hernandez',
        fatherName: 'Larry Hernandez',
        age: 15,
        rollNo: '118',
        class: '9th Grade',
      },
      {
        name: 'Mia King',
        fatherName: 'Joe King',
        age: 17,
        rollNo: '119',
        class: '11th Grade',
      },
      {
        name: 'Ethan Wright',
        fatherName: 'Stanley Wright',
        age: 14,
        rollNo: '120',
        class: '8th Grade',
      },
      {
        name: 'Ava Lopez',
        fatherName: 'Timothy Lopez',
        age: 16,
        rollNo: '121',
        class: '10th Grade',
      },
      {
        name: 'Jacob Scott',
        fatherName: 'Chris Scott',
        age: 15,
        rollNo: '122',
        class: '9th Grade',
      },
      {
        name: 'Samantha Green',
        fatherName: 'Shawn Green',
        age: 17,
        rollNo: '123',
        class: '11th Grade',
      },
      {
        name: 'Andrew Adams',
        fatherName: 'Jason Adams',
        age: 14,
        rollNo: '124',
        class: '8th Grade',
      },
      {
        name: 'Ella Baker',
        fatherName: 'Ryan Baker',
        age: 16,
        rollNo: '125',
        class: '10th Grade',
      },
]






function addData () {
for (let i = 0; i < data.length; i++) {
    userData.innerHTML += `
<tr>
        <td>${i + 1}</td>
        <td>${data[i].name}</td>
        <td>${data[i].fatherName}</td>
        <td>${data[i].age}</td>
        <td>${data[i].rollNo}</td>
        <td>${data[i].class}</td>
        <td class="buttons"><button class="Present" onclick="presentCount()">Present</button>  <button class="Absent" onclick="absentCount()">Absent</button>  <button class="Leave" onclick="leaveCount()">Leave</button> </td>     
 </tr> 

`
};
}

addData();
let newuserData = document.querySelector(".newuserData");
let absent = document.querySelector(".Absent");
let leave = document.querySelector(".Leave");
let totalStudentdata = document.querySelector(".totalSD");
let presentStudentdata = document.querySelector(".presentSD")
let leaveStudentdata = document.querySelector(".leaveSD");
let absentStudentdata = document.querySelector(".absentSD");
let Total = data.length;
totalStudentdata.innerHTML =Total;
let prsentStudent = 0;
let absentStudent = 0;
let leaveStudent = 0;


function presentCount () {
prsentStudent += 1;
Total-=1;
presentStudentdata.innerHTML = prsentStudent;
totalStudentdata.innerHTML =Total;
}
let presentButtons = document.querySelectorAll(".Present");
presentButtons.forEach(button => {
  button.addEventListener("click", function() {
    this.style.backgroundColor = "green";
    
    

    let absentuserData = document.querySelector(".ppuserData");
        let parentElement = this.parentNode.parentNode;
        let studentData = parentElement.cells;
        let Name = studentData[1].innerHTML;
        let FatherName = studentData[2].innerHTML;
        let age = studentData[3].innerHTML;
        let rollNo = studentData[4].innerHTML;
        let classofuser = studentData[5].innerHTML;

        absentuserData.innerHTML += `
        <tr>
        <td>${Name}</td>
        <td>${FatherName}</td>
        <td>${age}</td>
        <td>${rollNo}</td>
        <td>${classofuser}</td>
        </tr>
        `



  });
});





function leaveCount () {
    leaveStudent += 1;
    Total-=1;
    leaveStudentdata.innerHTML = leaveStudent;
    totalStudentdata.innerHTML =Total;
    }
    let leaveButtons = document.querySelectorAll(".Leave");
    leaveButtons.forEach(button => {
      button.addEventListener("click", function() {
        this.style.backgroundColor = "yellow";
        
        
        let absentuserData = document.querySelector(".puserData");
        let parentElement = this.parentNode.parentNode;
        let studentData = parentElement.cells;
        let Name = studentData[1].innerHTML;
        let FatherName = studentData[2].innerHTML;
        let age = studentData[3].innerHTML;
        let rollNo = studentData[4].innerHTML;
        let classofuser = studentData[5].innerHTML;

        absentuserData.innerHTML += `
        <tr>
        <td>${Name}</td>
        <td>${FatherName}</td>
        <td>${age}</td>
        <td>${rollNo}</td>
        <td>${classofuser}</td>
        </tr>
        `



      });
    });






function absentCount () {
    absentStudent += 1;
    Total-=1;
    absentStudentdata.innerHTML = absentStudent;
    totalStudentdata.innerHTML =Total;
    }
    let absentButtons = document.querySelectorAll(".Absent");
    absentButtons.forEach(button => {
      button.addEventListener("click", function() {
        this.style.backgroundColor = "red";

        let absentuserData = document.querySelector(".apuserData");
        let parentElement = this.parentNode.parentNode;
        let studentData = parentElement.cells;
        let Name = studentData[1].innerHTML;
        let FatherName = studentData[2].innerHTML;
        let age = studentData[3].innerHTML;
        let rollNo = studentData[4].innerHTML;
        let classofuser = studentData[5].innerHTML;

        absentuserData.innerHTML += `
        <tr>
        <td>${Name}</td>
        <td>${FatherName}</td>
        <td>${age}</td>
        <td>${rollNo}</td>
        <td>${classofuser}</td>
        </tr>
        `
      });
    });




    let button = document.querySelector('.Present');

    
