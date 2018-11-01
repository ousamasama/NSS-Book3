// Create an object that represents your pet.

// Name property with a string value.
// Species property with a string value.
// Nicknames property with an array value. Array contains strings.
// Age property with an integer value

let myPet1 = {
    name: "Olive",
    species: "Dog",
    nicknames: [
        "Big Mama",
        "Honey Bear",
        "Big Girl"
    ],
    age: 6
}

let myPet2 = {
    name: "Marcy",
    species: "Dog",
    nicknames: [
        "Tooty",
        "Little Bean",
        "Beanie"
    ],
    age: 5
}

console.log(myPet1)
console.log(myPet2)

//Given the following object...

const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

//Output the following value to the console.
//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]} Album.`)

const candidate = {
    name: "Elizabeth Sanger",
    congressional_district: "Morgan County, Alabama",
    political_views: {
        taxes: "More taxes across the board!",
        jobs: "Less jobs across the board!",
        infrastructure: "More potholes across the board!",
        health_care: "Insurance has been removed from the game!",
        crime_and_enforcement: "Since there are less jobs, all servicemen and servicewomen have been fired!"
    },
    url_donation_form: "https://www.applebees.com/en",
    calendar_of_events: [{
        eat_breakfast: "10/12/18 @ 7:30 AM EST",
        drink_coffee: "10/12/18 @ 8:00 AM EST",
        eat_lunch: "10/12/18 @ 12:00 PM EST",
        drink_coffee_again: "10/12/18 @ 2:00 PM EST",
        eat_dinner: "10/12/18 @ 6:00 PM EST",
        night_cap: "10/12/18 @ 8:30 PM EST"
    }],
    volunteer_information: [
        {
            name: "Billy",
            address: "Sesame Street",
            email: "abc@123.com",
            phone_number: "123456789",
            availability: "24/7",
            work_interested_in: "Any leg work"
        },
        {
            name: "Jenny",
            address: "Elm Street",
            email: "def@456.com",
            phone_number: "987654321",
            availability: "Weekends",
            work_interested_in: "Makeup" 
        }
    ],
    biography: "I'm here and then I won't be.",
    image_gallery: [{
        head_shot: "https://i.ytimg.com/vi/3OYuJKvr9f4/maxresdefault.jpg",
        picture_of_family: "https://www.out.com/sites/out.com/files/2018/09/18/xv6bjoklbzgp3mj2rbwn66dsxq.jpg",
        picture_of_constituents: "https://i.ytimg.com/vi/Fn2KOylWLjk/hqdefault.jpg"
    }],
    mission_statement: "I'm just here for myself.",
    url_registering_to_vote: "https://www.facebook.com/"
}

console.log(candidate)

//Advanced Challenge
//After you have defined all the objects for representing the data about Elizabeth's campaign, write a corresponding function for each one whose purpose is to change the state of the object. Then use your functions to modify the existing data.

// function addToImageGallery(picName, picLink) {
//     candidate.image_gallery.push(picName, picLink)
// }
