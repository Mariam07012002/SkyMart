// Get all the plus buttons
const plusButtons = document.querySelectorAll(".plus");

// Loop through each plus button
plusButtons.forEach(plus => {
    // Get the corresponding minus button and num display for each plus button
    const minus = plus.parentElement.querySelector(".minus");
    const num = plus.parentElement.querySelector(".num");

    // Initialize counter variable for each set of buttons
    let a = 1;

    // Add event listener to plus button
    plus.addEventListener("click", () => {
        a++;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        console.log(a);
    });

    // Add event listener to minus button
    minus.addEventListener("click", () => {
        if (a > 1) {
            a--;
            a = (a < 10) ? "0" + a : a;
            num.innerText = a;
        }
    });
});



