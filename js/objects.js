(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Jonathan",
        lastName: "Sanchez"
    }
    //Lecture Example:
    // var personTwo = {
    //     firstName: "John",
    //     lastName: "Doe"
    // }
    // var person = new Object();
    //
    // person.firstName = "Rick";
    // person.lastName = "Sanchez";

    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    //Lecture Example:
    // var sayGreeting = function () {
    //     return "Hello from " + this.firstName + " " + this.lastName + "!";
    // };
    //
    // person.sayHello = sayGreeting;
    // personTwo.sayHello = sayGreeting;
    //
    // console.log(person.sayHello());
    // console.log(personTwo.sayHello());
    //My Answer:
    person.sayHello = function () {
        return("Hello from " + person.firstName + " " + person.lastName + "!");
    }
    //console.log(sayHello());
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {
        if (shopper.amount > 200) {
            var discount = shopper.amount * .12;
            var newAmount = shopper.amount - discount;
            console.log(shopper.name + " you were originally going to spend $" + shopper.amount + ", but you're discounted total is now $" + newAmount);
        }else{
            console.log(shopper.name + " you still owe $" + shopper.amount + ", you did not get a discount. :(");
        }
    })

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "The great book",
            author: {
                firstName: "Dan",
                lastName: "Marino"
            }
        },
        {
            title: "Clockwork Angel",
            author: {
                firstName: "Cassandra",
                lastName: "Clare"
            }
        },
        {
            title: "Becoming a Developer",
            author: {
                firstName: "Douglas",
                lastName: "Hirsh"
            }
        },
        {
            title: "My Life from Car Sales to Teaching!",
            author: {
                firstName: "Kenneth",
                lastName: 'Howell'
            }
        },
        {
            title: "The Color Purple",
            author: {
                firstName: "Jane",
                lastName: "Doe"
            }
        }
    ]

    console.log(books[3]);
    console.log(books[3]);
    console.log(books[3]);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function (book, index) {
        console.log("Book # " + (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook(bookTitle, authorFirstName, authorLastName){
        var newBook = {
            title: bookTitle,
            author: {
                firstName: authorFirstName,
                lastName: authorLastName
            }
        }
        return newBook;
    }


    createBook("My side of the Mountain", "John", "Doe");

})();
Write a function named calculateTax that takes in two inputs representing the totalPaid and the taxPercent. If both inputs are numeric or numeric strings, calculateTax should return the total with tax added in a string looking like: "$XX.XX". If either or both inputs are not numeric or numeric strings, calculateTax should return false.
calculateTax(25, 8)				 // "$27.00"
calculateTax(10, 12)             // "$11.20"
calculateTax(120, 15.5)			 //	"$138.60"
calculateTax(10, true)           // false
calculateTax([1, 2, 3], 10)      // false
calculateTax("Codeup", 100)      // false
calculateTax()                   // false