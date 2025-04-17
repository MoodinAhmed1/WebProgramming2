const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`
    
    const usersObj = JSON.parse(usersText, null, 4)

    let users = usersObj.users;

    users.forEach(user => console.log(user.firstName))

    let myUsers = {
        mohammed : {
            salery : 25000
        },
        ahmed : {
            salery : 25000
        },
        saeed : {
            salery : 25000
        }
    }

    let myUsersJSON = JSON.stringify(myUsers, undefined, 4)

    console.log(myUsersJSON)