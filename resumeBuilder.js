

var bio = {
  "name" : "Naziia Travels",
  "role" : "Front-End Web Developer",
  "contacts" : {
    "mobile" : "919-223-1263",
    "email" : "naziia.travels@gmail.com",
    "github" : "Naziiaba",
    "twitter" : "@naziiatravels",
    "location" : "Raleigh, NC"
  },
   "placesLived": [
     "Bishkek, Kyrgyzstan",
     "Seoul, South Korea",
     "Moscow, Russia",
     "Raleigh, NC"
  ],

  "welcomeMessage" : "Welcome to my digital resume",
  "skills" : [
    " HTML", " CSS", " Javascript", " jQuery", "Bootstrap", "SASS", "Chrome Dev Tolls", "Basics of Python", "D3", "Knockout"],
  "biopic" : "images/fryn.jpg"
};


bio.display = function() {
  $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));


  $("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {
    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));

}

    $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));


};

bio.display();


var work = {
  "jobs": [
   {
        "employer": "Ministry of Transport and Communications",
        "title": "Interpreter",
        "dates": "2014",
        "location": "Bishkek, Kyrgyzstan",
        "description": "Translation of documents and contracts."
      }
  ]
};

work.display = function() {
    for (var i = 0; i < work.jobs.length; i++) {

        $("workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
};

work.display();

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
      "location": "Bishkek, Kyrgyzstan",
      "degree": "BA",
      "majors": "Economics",
      
    },
    {
      "name": "Kyung Hee University",
      "location": "Seoul, South Korea",
      "degree": "Korean language and culture",
      "majors": "a year language program",
      "dates": "2009"
    }
  ],


  "onlineCourses": [
    {
      "title": "Front-End Web Development",
      "school": "Udacity",
      "dates": "2018",
      "url": " https://classroom.udacity.com/nanodegrees/nd001/"
    }
  ]
};



education.display = function() {
for (var i = 0; i < education.schools.length; i++) {
    $("#education").append(HTMLschoolStart);

    var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    $(".education-entry:last").append(formattedName + formattedDegree);

    $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
    $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));

}

$("#education").append(HTMLonlineClasses);
for (var k = 0; k < education.onlineCourses.length; k++) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[k].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[k].school);
    $(".education-entry:last").append(formattedTitle + formattedSchool);

    $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[k].dates));
    $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[k].url));
  }
};

education.display();

var projects = {
    "projects": [{
        "title": "Portfolio",
        "description": "Building a portfolio website based on a design mockup as a PDF-file provided by Udacity. ",
        "dates": "July, 2018",
        "images": ["images/Portfolioready.png"]
    }, {
        "title": "Animal Trading Card",
        "description": "The first CSS project: favorite animal trading card from scratch. Practiced my CSS and design skills. ",
        "dates": "March, 2018",
        "images": ["images/newSL.png"]
    },
  ]
};

projects.display = function() {
    for (var i = 0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));


        for (var j = 0; j < projects.projects[i].images.length; j++) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[j]));
        }
    }
};

projects.display();

