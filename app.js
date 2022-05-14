const httpLib = new HttpLib();

// test GET request (retrieve a list of resources)
// httpLib.get('https://jsonplaceholder.typicode.com/posts', function (error, posts) {
//   if (error) {
//     console.log(error);
//   } else {
//     // console.log(JSON.parse(posts));
//     console.log(posts);
//   }
// });

// test GET request (retirieve a single resource)
httpLib.get('https://jsonplaceholder.typicode.com/posts/1', function (error, posts) {
  if (error) {
    console.log(error);
  } else {
    // console.log(JSON.parse(posts));
    console.log(posts);
  }
});

// test POST request (create a new resource)