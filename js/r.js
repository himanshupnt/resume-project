// var bio = {
//     "name": "Himanshu Pant",
//     "role": "Front-End Web Developer",
//     "welcomeMessage": "This is my professional resume.",
//     "image": "images/me.jpg",
//     "contacts": {
//         "mobile": "123-1234-123",
//         "location": "San Diego, California",
//         "email": "himanshu@himanshupnt.com"
//     },
//     "skills": ["HTML5", "CSS", "JavaScript", "jQuery"]
// };
// var work = {
//     "jobs": [
//       {
//         "employer": "Uartsy",
//         "title": "Web Projects Manager",
//         "dates": "2012 - 2016",
//         "location": "Los Angeles, California",
//         "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
//     },
//     {
//         "employer": "Self",
//         "title": "Front-End developer",
//         "dates": "2016 onwards",
//         "location": "San Diego, California",
//         "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
//     }
//   ]
// };
// var projects = {
//     "project": [
//       {
//         "title": "The Hobbit: The Desolation of Smaug ",
//         "dates": "2013",
//         "description": "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring.",
//         "images": ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"]
//     },
//     {
//         "title": "The Hobbit: The Battle of the Five Armies",
//         "dates": "2014",
//         "description": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness.",
//         "images": ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg"]
//     }
//   ]
// };
// var education = {
//     "schools": [
//       {
//         "name": "School 1",
//         "location": "New Delhi, India",
//         "degree": "Bachelors",
//         "majors": "Science",
//         "dates": "2001 - 2005"
//     },
//     {
//         "name": "School 2",
//         "location": "Mumbai, India",
//         "degree": "Masters",
//         "majors": "Science",
//         "dates": "2005 - 2006"
//     }
//   ],
//     "online courses": [
//       {
//         "title": "Front-End Web Developer Nanodegree",
//         "school": "udacity",
//         "dates": "2016",
//         "url": "https://www.udacity.com/course/nd001"
//     }
//   ]
// };
// bio.display = function() {
//     var formattedName = HTMLheaderName.replace("%data%", bio.name);
//     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
//     var formattedImage = HTMLbioPic.replace("%data%", bio.image);
//     var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
//     $("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
//     $("#header").append(HTMLskillsStart);
//     for (var i = 0; i < bio.skills.length; i++) {
//       var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
//       $("#skills").append(formattedSkills);
//     };
//     // for (skill in bio.skills) {
//     //     var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
//     //     $("#skills").append(formattedSkills);
//     // };
//     for (contact in bio.contacts) {
//         var formattedMobile = HTMLmobile.replace("%data%", bio.contacts[contact].mobile);
//         var formattedEmail = HTMLemail.replace("%data%", bio.contacts[contact].email);
//         $("#footerContacts").append(formattedMobile, formattedEmail);
//     };
// };
// education.display = function() {
//     for (school in education.schools) {
//         $("#education").append(HTMLschoolStart);
//         var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
//         var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
//         var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
//         var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
//         var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
//         $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
//     }
// };
// work.display = function() {
//     for (job in work.jobs) {
//         $("#workExperience").append(HTMLworkStart);
//         var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
//         var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
//         var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
//         var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
//         $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
//     }
// };
// projects.display = function() {
//     for (item in projects.project) {
//         $("#projects").append(HTMLprojectStart);
//         var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[item].title);
//         var formattedDates = HTMLprojectDates.replace("%data%", projects.project[item].dates);
//         var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[item].description);
//         $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
//         for (image in projects.project[item].images) {
//             var formattedImage = HTMLprojectImage.replace("%data%", projects.project[item].images[image]);
//             $(".project-entry:last").append(formattedImage);
//         };
//     }
// };
//
// function inName(name) {
//     console.log(name);
//     var newName = name;
//     newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
//     return newName;
// };
// work.display();
// projects.display();
// education.display();
// bio.display();
// $("#main").append(internationalizeButton);
// $("#mapDiv").append(googleMap);



var bio = {
		"name": "Himanshu Pant",
		"role": "Front-End Developer",
		"contacts": {
			"mobile": "123-12345-123",
			"email": "abc@gmail.com",
			"github": "himanshupnt",
			"location": "San Diego, California"
		},
		"welcomeMessage": "Hi there! this is just a placeholder text.",
		"skills": [
			"images/logo-html5.svg", "images/logo-css3.svg", "images/logo-bootstrap.svg", "images/logo-javascript.svg", "images/logo-jquery.svg", "images/logo-git.svg"
		],
		"biopic": "images/me.jpg"
};

///This is an encapsulation
bio.display = function() {
	var formattedName =
		HTMLheaderName.replace("%data%", bio.name);
	var formattedRole =
		HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile =
		HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail =
		HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub =
		HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation =
		HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedWelcomeMessage =
		HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedPicture =
		HTMLbioPic.replace("%data%", bio.biopic);
	var skillsList = '<ul id="skills" class="flex-box list-inline list-unstyled"></ul>';
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#topContacts").prepend(formattedMobile);
	$("#topContacts").prepend(formattedEmail);
	$("#topContacts").prepend(formattedGithub);
	$("#topContacts").prepend(formattedLocation);
	$("#header").append(formattedPicture);
	$("#header").append(formattedWelcomeMessage);
	$("#header").append(HTMLskillsStart);
	$("#header").append(skillsList);
	for (var skill = 0; skill < bio.skills.length; skill++) {
		var formattedSkills =
			HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkills);
	}
};

bio.display();

var work = {
	"jobs": [
	{
		"title": "Global Business Integration Analyst",
		"employer": "American Express",
		"dates": "2014 - now",
		"location": "Brighton, UK",
		"description" : "Ensuring operational alignment and readiness for new product launches, processes or system changes and card member communications. I’ll have to ensure that the changes won't impact customer satisfaction, won’t drive unnecessary call volumes, won’t increase call handling time metrics and that CCPs have all the information required to be able to provide the best customer service. I am partnering closely across lines of business to prevent defects, record them, facilitate their resolution."
	},
	{
		"title": "Global New Accounts Subject Matter Expert",
		"employer": "American Express",
		"dates": "2012 - 2014",
		"location": "Brighton, UK",
		"description" : "As a CCP I was in charge of processing customers’ applications whether they are individuals or businesses whilst ensuring that risk and compliance requirements are respected and undertaking daily offline tasks. In addition to these tasks and thanks to my expertise I became the SME of the market and took further responsibilities such as providing training to CCPs and being the POC for major projects to ensure the new processes built are designed accordingly with the needs of end-users."
	}
	]
};

///This is an encapsulation
work.display = function() {
		for (var job = 0; job < work.jobs.length; job++) {
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkThumbnail);


		var formattedEmployer =
		HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

		var formattedJobTitle =
		HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerJobTitle =
		formattedEmployer + formattedJobTitle;

		$(".thumbnail:last").append(formattedEmployerJobTitle);

		var formattedWorkDates =
		HTMLworkDates.replace("%data%", work.jobs[job].dates);

		var formattedWorkLocation =
		HTMLworkLocation.replace("%data%", work.jobs[job].location);

		var formattedWorkDatesLocation = formattedWorkDates + formattedWorkLocation;

		$(".thumbnail:last").append(formattedWorkDatesLocation);

		var formattedWorkDescription =
		HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".thumbnail:last").append(formattedWorkDescription);
	}
};

work.display();

var projects = {
	"projects": [
	{
		"title": "Classic Arcade Game Clone",
		"dates": "Ongoing",
		"description" : "Currently developing an HTML5 Canvas powered video game using best practices in Object Oriented JavaScript.",
		"images" : ["images/pacman.png"]
	},
	{
		"title": "My Online Resume",
		"dates": "November 2016",
		"description" : "Built an online resume using HTML5, CSS3, JavaScript, and jQuery.",
		"images" : ["images/job-search.png"]
	},
	{
		"title": "My Portfolio",
		"dates": "October 2016",
		"description" : "Built my first portfolio page using HTML, CSS, and the Bootstrap framework. The page is fully responsive and works on mobile, tablet, and desktop.",
		"images" : ["images/browser1.png"]
	}
	]
};

///This is an encapsulation
projects.display = function() {
		for (var project = 0; project < projects.projects.length; project++) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectThumbnail);

			var formattedProjectTitle =
			HTMLprojectTitle.replace("%data%", projects.projects[project].title);

			$(".thumbnail:last").append(formattedProjectTitle);

			var formattedProjectDates =
			HTMLprojectDates.replace("%data%", projects.projects[project].dates);

			$(".thumbnail:last").append(formattedProjectDates);

			var formattedProjectDescription =
			HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".thumbnail:last").append(formattedProjectDescription);

			for (var image = 0; image < projects.projects[project].images.length; image++) {
				var formattedProjectImage =
				HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);

				$(".thumbnail:last").append(formattedProjectImage);
			}
		}
};

projects.display();

var education = {
	"schools": [
	{
		"name": "University of Caen Lower Normandy",
		"dates": "2009 - 2012",
		"location": "Caen, Lower Normandy, FRANCE",
		"degree": "Bachelor",
		"majors" : ["Foreign Languages (French, English, Italian, Spanish) with Economics & International Business"],
		"url" : "http://www.unicaen.fr/"
	},
	{
		"name": "Lycée Pierre & Marie Curie",
		"dates": "2006 - 2009",
		"location": "Saint-Lô, Lower Normandy, FRANCE",
		"degree": "Baccalaureate",
		"majors" : ["Computer Science"],
		"url" : "http://pmcurie.etab.ac-caen.fr/"
	}
	],
	"onlineCourses" : [
		{
			"school": "Udacity",
			"dates": "2016 - now",
			"title": "Front-End Development Nanodegree",
			"description": "The program provides a working knowledge of the three foundational languages that power each and every website: HTML, CSS and JavaScript.",
			"url" : "www.udacity.com"
		}
	]
};

///This is an encapsulation
education.display = function() {
	for (var school = 0; school < education.schools.length; school++) {
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(HTMLschoolThumbnail);

		var formattedSchoolName =
			HTMLschoolName.replace("%data%", education.schools[school].name);

		var formattedSchoolDegree =
			HTMLschoolDegree.replace("%data%", education.schools[school].degree);

		var formattedSchoolNameDegree =
		formattedSchoolName + formattedSchoolDegree;

		$(".thumbnail:last").append(formattedSchoolNameDegree);

		var formattedSchoolDates =
			HTMLschoolDates.replace("%data%", education.schools[school].dates);

		$(".thumbnail:last").append(formattedSchoolDates);

		var formattedSchoolLocation =
			HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".thumbnail:last").append(formattedSchoolLocation);

		var formattedSchoolMajor =
		HTMLschoolMajor.replace("%data%", education.schools[school].majors);

		$(".thumbnail:last").append(formattedSchoolMajor);

		var formattedSchoolURL =
		HTMLonlineURL.replace("%data%", education.schools[school].url);

		$(".thumbnail:last").append(formattedSchoolURL);
	}



    for (var onlineCourse = 0; onlineCourse < education.onlineCourses.length; onlineCourse++) {
		$("#education").append(HTMLonlineStart);
		$(".online-entry:last").append(HTMLonlineClasses);
		$(".online-entry:last").append(HTMLonlineClassesThumbnail);
		$(".thumbnail:last").append(HTMLschoolStart);
		var formattedOnlineTitle =
		HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineSchool =
		HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineTitleOnlineSchool = (formattedOnlineTitle + formattedOnlineSchool);
		$(".thumbnail:last").append(formattedOnlineTitleOnlineSchool);

		var formattedOnlineDates =
		HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);

		$(".thumbnail:last").append(formattedOnlineDates);

		var formattedOnlineDescription =
		HTMLonlineDescription.replace("%data%", education.onlineCourses[onlineCourse].description);

		$(".thumbnail:last").append(formattedOnlineDescription);

		var formattedOnlineURL =
		HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);

		$(".thumbnail:last").append(formattedOnlineURL);
	}
};

education.display();


//Give me the click location on the page
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks (x,y);
});

// $("#main").append(internationalizeButton);

// //Capitalize my Lastname
// var inName = function(name) {
// 	name = name.split(" ");
// 	name[1] = name[1].toUpperCase();
// 	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

// 	return name[0]+" "+name[1];
// };

//Display map
$("#mapDiv").append(googleMap);

//Test with $(".gray").find("h2").addClass("dark-text"); is working
$(".gm-style-iw").find("div").addClass("dark-text");
