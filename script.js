{
    let names = {
        female: ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"],
        male: ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    }

    $(".name-button").on("click", () => {
        let day = new Date($("#datepicker").val()).getUTCDay();
        let gender = $("input[name='gender']:checked").val();

        if (day >= 0 && day < 7 && gender) {
            $(".name-output").empty();
            $(".name-output").append("<p>Your Akan Name is:</p>");
            $(".name-output").append(`<h1>${names[gender][day]}</h1>`);
        } else {
            alert("Please enter date of birth and gender!");
        }
    });
}