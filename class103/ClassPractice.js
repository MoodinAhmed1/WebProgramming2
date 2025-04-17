    console.log(Math.floor(Math.random() * 11))

    const example = [1, "mohammed", true, 1.5];
    console.log(example[3])

    let arr = [7, 2, 3, 4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length - 1; j++) {
                if(arr[j] > arr[j+1]) {
                    let temp = arr[j];
                    arr[j]  = arr[j+1];
                    arr[j+1] = temp
            }
        }
    }
    
    console.log(arr);

    const countries = [
        'Albania',
        'Bolivia',
        'Canada',
        'Denmark',
        'Ethiopia',
        'Finland',
        'Germany',
        'Hungary',
        'Ireland',
        'Japan',
        'Kenya'
      ]

      for(let i = 0; i < countries.length; i++) {
        
      }