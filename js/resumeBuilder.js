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
    "skills": ["HTML5", "CSS", "Jquery", "Javascript"],
    "biopic": "images/me.jpg"
};

var work = {
    "jobs": [{
        "employer": "Uartsy",
        "title": "Web Projects Manager",
        "dates": "2012 - 2016",
        "location": "Los Angeles, California",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    }, {
        "employer": "Self",
        "title": "Front-End developer",
        "dates": "2016 onwards",
        "location": "San Diego, California",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
    }]
};

var projects = {
    "project": [{
        "title": "Project 1",
        "dates": "2013",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        "images": ["images/1.jpg", "images/2.png"]
    }, {
        "title": "Project 2",
        "dates": "2014",
        "description": "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        "images": ["images/2.png", "images/1.jpg"]
    }]
};

var education = {
    "schools": [{
        "name": "School 1",
        "location": "New Delhi, India",
        "degree": "Bachelors",
        "majors": ["Science"],
        "dates": "2001 - 2005",
        "url" : "https://www.udacity.com/course/nd001"
    }, {
        "name": "School 2",
        "location": "Mumbai, India",
        "degree": "Masters",
        "majors": ["Science"],
        "dates": "2005 - 2006",
        "url" : "https://www.udacity.com/course/nd001"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer Nanodegree",
        "school": "udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/nd001"
    }]
};

var data = "%data%";

bio.display = function() {
    var formattedName =
        HTMLheaderName.replace(data, bio.name);
    var formattedRole =
        HTMLheaderRole.replace(data, bio.role);
    var formattedMobile =
        HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail =
        HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub =
        HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation =
        HTMLlocation.replace(data, bio.contacts.location);
    var formattedImage =
        HTMLbioPic.replace(data, bio.biopic);
    var formattedMessage =
        HTMLwelcomeMsg.replace(data, bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(formattedMobile);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedLocation);
    $("#header").append(formattedImage);
    $("#header").append(formattedMessage);
    $("#header").append(HTMLskillsStart);
    $("#footerContacts").append(formattedMobile, formattedEmail);

    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedSkills = HTMLskills.replace(data, bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }

};


work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
        var formattedDates = HTMLworkDates.replace(data, work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[job].description);
        $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedDescription);
    }
};


projects.display = function() {
    for (project = 0; project < projects.project.length; project++) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, projects.project[project].title);
        var formattedDates = HTMLprojectDates.replace(data, projects.project[project].dates);
        var formattedDescription = HTMLprojectDescription.replace(data, projects.project[project].description);
        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        for (var image = 0; image < projects.project[project].images.length; image++) {
            var formattedImage = HTMLprojectImage.replace(data, projects.project[project].images[image]);
            $(".project-entry:last").append(formattedImage);
        }
    }
};


education.display = function() {
    for (var school = 0; school < education.schools.length; school++) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(data, education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace(data, education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[school].location);
        // var formattedMajor = HTMLschoolMajor.replace(data, education.schools[school].majors);
        // the line of code above works for formattedMajor, while education.schools[school].majors returns and array. It should
        //be written as in lines 148 to 151. Why does the above work correctly?
        // $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation, formattedMajor);
        $(".education-entry:last").append(formattedName + formattedDegree, formattedDates, formattedLocation);
        for (var major = 0; major < education.schools[school].majors.length; major++) {
          var formattedMajor =
          HTMLschoolMajor.replace(data, education.schools[school].majors[major]);
          $(".education-entry:last").append(formattedMajor);
        }
    }
};


//Name internationalization
function inName(name) {
    console.log(name);
    var newName = name;
    newName = newName[0].toUpperCase() + newName.slice(1, newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();
    return newName;
}

//call functions to display relevant data
bio.display();
education.display();
work.display();
projects.display();


$("#header").append(internationalizeButton);
$("#mapDiv").append(googleMap);
