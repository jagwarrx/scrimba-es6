 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 * 
 * RESTFul API Guide - https://jsonplaceholder.typicode.com/guide.html
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */


fetch('https://jsonplaceholder.typicode.com/comments/1')
.then((response) => response.json())
.then((data) => console.log(data))

fetch('https://jsonplaceholder.typicode.com/comments',
{
     method: 'POST',
        body: JSON.stringify({
            name: 'Reginald Jeeves',
        })
    
})
.then((response) => response.json())
.then((data) => console.log(data))