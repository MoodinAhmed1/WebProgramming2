//DAY 2 - DATA TYPES
console.log("DAY 2")
    //EXERCISE LEVEL 3 
    console.log("EXERCISE LEVEL 3")
        // (QUESTION 4)
            //Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

                let string4 = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

                let salary = string4.match(/\d+/g).map(Number);

                let monthlyPay = salary[0];
                let anualBonus = salary[1];
                let monthlyTutoringPay = salary[2];

                console.log(`\n#Q4 : \n His pay per year is ${(monthlyPay * 12) + anualBonus + (monthlyTutoringPay * 12)}$`);

        //(QUESTION 3)
            //Clean the following text and find the most frequent word (hint, use replace and regular expressions).
            let string3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

            let cleanText = string3.replace(/[^a-zA-Z0-9\s]/g, "");  // Remove special characters
            
            let words = cleanText.toLowerCase().split(/\s+/);  // Convert to lowercase & split into words
            
            let wordCount = {};
            
            words.forEach(word => {
                wordCount[word] = (wordCount[word] || 0) + 1;
            });
            
            let mostFrequentWord = "";
            let mostFrequentCount = 0;
            
            for (let word in wordCount) {
                if (wordCount[word] > mostFrequentCount) {
                    mostFrequentWord = word;
                    mostFrequentCount = wordCount[word];
                }
            }
            
            console.log(`\n#Q3 : \n the word that appeared most frequently is ${mostFrequentWord} and it appeared ${mostFrequentCount} times`);
            
        //(QUESTION 2)
            //Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
                let string2 = "You cannot end a sentence with because because because is a conjunction";
                let becauseCount = string2.match(/because/g).length;
                console.log(`\n#Q2 : \n because occurs ${becauseCount} times`);
        
        //(QUESTION 1)
            //'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
                let string1 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
                console.log(`\n#Q1 : \n Love repeats ${string1.match(/Love/gi).length} times`)

            