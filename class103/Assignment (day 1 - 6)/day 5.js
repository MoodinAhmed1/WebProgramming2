//DAY 5
console.log("DAY 5");
    //EXERCISE LEVEL 3
    console.log("LEVEL 3")
        //QUESTION NUMBER 3
        console.log("QUESTION 1")
            /*
                The following is an array of 10 students ages:
                const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
                    - Sort the array and find the min and max age
                    - Find the median age(one middle item or two middle items divided by two)
                    - Find the average age(all items divided by number of items)
                    - Find the range of the ages(max minus min)
                    - Compare the value of (min - average) and (max - average), use abs() method
            */

            let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
            //Sorting the array
            for(let i = 0; i < ages.length; i++) {
                for(let j = i; j < ages.length - 1; j++) {
                    if(ages[j] < ages[j + 1]) {
                        let temp = ages[j];
                        ages[j] = ages[j + 1];
                        ages[j + 1] = temp;
                    }
                }
            }

            //calculating median
            let mid = Math.floor(ages.length/2)

            let median = ages.length % 2 == 0
                ? (ages[mid - 1] + ages[mid])  / 2
                : ages[mid];

            //finding the average
            let average = 0;
            for(let i = 0; i < ages.length; i++) {
                average += ages[0];
            }
            average /= ages.length;

            //finding the range
            let range = ages[ages.length - 1] - ages[0];

            //finding weather min or max is further from max
            let distanceFromMax = Math.abs(ages[0] - average);
            let distanceFromMin = Math.abs(ages[ages.length - 1] - average);

            if(distanceFromMax > distanceFromMin) {
                console.log("distance from max is greater than distance from min")
            } else if (distanceFromMin > distanceFromMax) {
                console.log("distance from min is greater than distance from max");
            } else {
                console.log("distance from min and distance from max are equal")
            }