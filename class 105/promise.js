const myPromise = new Promise (resovle => {
    setTimeout(() => {
        resovle("resolved")
    }, 2000)
})

myPromise
    .then(result => {
            console.log(result)
            return "10"
    }) 
    .then (result2 => {
        console.log(parseInt(result2) + 90 + "%")
    })