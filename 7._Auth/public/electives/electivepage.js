fetch("/electives")
        .then(response => response.json())
        .then(data => {
            data.response.map((elective) => {
                let electiveElement =  $(".elective").first().clone();
                $(electiveElement).find("td").html(elective.courseName)
                $(".elective-container").append(electiveElement);
            });  
         
        });
            
