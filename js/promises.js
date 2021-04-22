"use strict";
function getLastPushDate(gitHubUsername) {
    let url = `https://api.github.com/users/${gitHubUsername}/events`;
    let gitHubResponse = fetch(url, {headers: {'Authorization': `token ${githubApi}`}});
        return gitHubResponse
        .then((response) => {
            return response.json();
        })
        .then((githubEventData) => {
            for (let githubEvent of githubEventData) {
                if (githubEvent.type === "Push Event") {
                    console.log(githubEvent.created_at);
                    return new Date(githubEvent.created_at);
                }
            }
        })
}

console.log(getLastPushDate("jonathan-sanchez"));
// console.log("Hello form promises.js");
//with nested function

// function wait(numMilliseconds){
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve();
//         }, numMilliseconds)
//     });
// }

//or in reduced form

// function wait(numMilliseconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, numMilliseconds)
//     });
// }
// wait(1000).then(() => console.log('You\'ll see this after 1 second'));
// wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const isDivisibleBy3 = n => n % 3 === 0;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(isDivisibleBy3));
console.log(numbers);