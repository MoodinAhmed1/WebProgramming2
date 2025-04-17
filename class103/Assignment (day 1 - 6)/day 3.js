//DAY 3
console.log("\nDAY 3")
    //LEVEL 3
    console.log("LEVEL 3")
        //(QUESTION 4)
        console.log("QUESTION 4")
            //Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

        // YYY-MM-DD HH:mm eg. 20120-01-02 07:05

        const now = new Date();

        let year = String(now.getFullYear()).padStart(2, "0");
        let month = String(now.getMonth() + 1).padStart(2, "0");
        let day = String(now.getDate()).padStart(2, "0");
        let hour = String(now.getHours()).padStart(2, "0");
        let minute = String(now.getMinutes()).padStart(2, "0");
        
        console.log(`${year}-${month}-${day} ${hour}:${minute}`);
    //LEVEL 2
    console.log("\nLEVEL 2")
        //(QUESTION 15)
        console.log("QUESTION 15")
            //Create a human readable time format using the Date time object
            // YYYY-MM-DD HH:mm
            // DD-MM-YYYY HH:mm
            // DD/MM/YYYY HH:mm

            console.log(`${now.getFullYear()}-${now.getMonth() + 1}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`);
            console.log(`${now.getDay()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);

        //(QUESTION 14)
        console.log("\nQUESTION 14")
            //Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

            //let age = prompt("enter age: ");
            //let remAgeSec = (100 - age) * 365 * 30 * 24 * 60 * 60
            //console.log(`you have ${remAgeSec} seconds to live`);
