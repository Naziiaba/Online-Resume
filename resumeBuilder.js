/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name" : "Naziia",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "919-223-1263",
    "email" : "gernerscns@hotmail.com",
    "github" : "zia"
  },
  "welcomeMessage" : "Welcome to my digital resume",
  "skills" : [
    " HTML", " CSS", " JS", " teaching"
  ],
  "bioPic" : "images/fry.jpg"
}


  bio.display = function() {
      var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
      $("#header").prepend(formattedHeaderRole);
      var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
      $("#header").prepend(formattedHeaderName);
      var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
      $("#topContacts").append(formattedMobile);
      var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
      $("#topContacts").append(formattedEmail);
      var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
      $("#topContacts").append(formattedGithub);
      var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
      $("#header").append(formattedPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
      }
    }


 /* "display" : function() {
   var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
   $("#header").append(formattedHeaderRole);
   var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
   $("#header").append(formattedHeaderName);
   var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
   $("#topContacts").append(formattedMobile);
 }
*/




var education = {
    "schools" : [
    {
      "name": "Manas University",
      "city": "Bishkek",
      "degree": "BA",
      "major": "Economics",
      "dates": 2008,
      url: "http://intl.manas.edu.kg/en"
    },
    {
      "name": "Kyung Hee De",
      "city": "Seoul, South Korea",
      "dates": 2009
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Developer",
      "school": "Udacity",
      "dates": 2018,
      "url": "https://classroom.udacity.com/nanodegrees/"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Amazon",
      "title": "FC Associate",
      "dates": "November 2017",
      "desciption": "Problem solving, processing missorted packages and making sure that customers packages get delivered safe and without any issues."
    }
  ]
}

var projects = {
  "projects": [
    {
        "title": "Build a Portfolio Site",
        "dates": 2018,
        "description": "Building a portfolio website based on a design mockup as a PDF-file provided by Udacity. "
    }
  ]
}

education.display = function() {
  if (education.school.length > 0) {
    education.schools.forEach(function(school) {
      $("education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      $(".education-entry:last").append(formattedSchoolName + formattedDegree);

      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      $(".education-entry:last").append(formattedDates);
    })
  }
}


/*var naziia = {};
Naziia.job = "Web dev";

var CreateWeb = function() {
  console.log("Create a website");
}

var courses = 0;
while(naziia.job === "Web dev") {
  makeCourse();
  courses = courses + 1;
  if(courses === 10) {
    naziia.job = "front end specialist";
  }
}

console.log(naziia.job);
*/
