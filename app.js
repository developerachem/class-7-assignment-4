const phone = [
    {
        name        : 'MD Amzad' ,
        relation    : 'Brother' ,
        location    : 'Charfation' ,
        phoneNumber : '01728104511' ,
    },
    {
        name        : 'MD Azmir' ,
        relation    : 'Brother' ,
        location    : 'Singapur' ,
        phoneNumber : '16852369' ,
    },
    {
        name        : 'Kamrun Nahar' ,
        relation    : 'Big Sister' ,
        location    : 'Bhola' ,
        phoneNumber : '015384586' ,
    },
    {
        name        : 'MD Niaz' ,
        relation    : 'Brother' ,
        location    : 'Singapur' ,
        phoneNumber : '16852369' ,
    },
    {
        name        : 'MD Achem' ,
        relation    : 'ME' ,
        location    : 'Dhaka' ,
        phoneNumber : '01764849199' ,
    },
    {
        name        : 'Mawlana Abu Taher' ,
        relation    : 'Father' ,
        location    : 'Charfation' ,
        phoneNumber : '01726531186' ,
    },
    {
        name        : 'Hasina Begum' ,
        relation    : 'Mother' ,
        location    : 'Charfation' ,
        phoneNumber : '01720562636' ,
    },
]



console.log( 'Welcome To My Famely' );
phone.map( (data) => {

    console.log(`
    Name        : ${data.name }
    Relation    : ${data.relation}
    Phone No    : ${data.phoneNumber}
    Address     : ${data.location}
---------------------------------
    `);

} )