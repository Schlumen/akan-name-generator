{
    // Create object with Akan Names
    let names = {
        female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
        male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    }

    // Add event listener to the "Get Akan Name" button
    $(".name-button").on("click", () => {
        // Store selected day as integer between 0 and 6 and gender as string in variables
        let day = new Date($("#datepicker").val()).getUTCDay();
        let gender = $("input[name='gender']:checked").val();

        // Check if day and gender are valid
        if (day >= 0 && day < 7 && gender) {
            // Clean name output div and append new text
            $(".name-output").empty();
            $(".name-output").append("<p>Your Akan Name is:</p>");
            // Select the corresponding name for day and gender from the Akan Names object
            // Append the Akan Name to the name output div
            $(".name-output").append(`<h1>${names[gender][day]}</h1>`);
        } else {
            // Alert in case the user didn't select a day and/or gender
            alert("Please enter date of birth and gender!");
        }
    });
}