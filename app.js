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
httpLib.put(putUrl, data, function (error, updatedPost) { 
  if (error) {
    console.log(error);
  } else {
    console.log(updatedPost);
  }
});