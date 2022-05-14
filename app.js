const httpLib = new HttpLib();
const data = {
  title : "Custom Post",
  body : "This is a custom post blah blah blah.",
  userId : 1,
};

const indexUrl = "https://jsonplaceholder.typicode.com/posts";
const showUrl = "https://jsonplaceholder.typicode.com/posts/1";
const postUrl = "https://jsonplaceholder.typicode.com/posts";
const putUrl = "https://jsonplaceholder.typicode.com/posts/10";
const deleteUrl = "https://jsonplaceholder.typicode.com/posts/10";


/**
 * 
 * using the first version of the library (http-library.js)
 */
// Retrieve a list of resources (test GET request)
// httpLib.get(indexUrl, function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     // console.log(JSON.parse(posts));
//     console.log(posts);
//   }
// });

//  Retirieve a single resource (test GET request)
// httpLib.get(showUrl, function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     // console.log(JSON.parse(posts));
//     console.log(posts);
//   }
// });

// Create a resource (test POST request)
// httpLib.post(postUrl, data, function (error, post) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }
// });

// Update a resource (test PUT request)
// httpLib.put(putUrl, data, function (error, updatedPost) { 
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(updatedPost);
//   }
// });

// Delete a resource (DELETE method)
// httpLib.delete(deleteUrl, function (error, response) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(response);
//   }
// });



/**
 * using the second version of the http library
 */
const httpLib2 = new HttpLib2;

// test GET request
// httpLib2.get(indexUrl)
//   .then(posts => console.log(posts))
//   .catch(error => console.log(error));

// test POST request
// httpLib2.post(postUrl, data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// test PUT request
// httpLib2.put(putUrl, data)
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// tset DELETE request
// httpLib2.delete(deleteUrl)
//   .then(response => console.log(response))
//   .catch(error => console.log(error));