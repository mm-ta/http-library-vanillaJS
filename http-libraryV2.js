/**
 * revised HTTP library in ES6 way with fetch api
 */
class HttpLib2 {
  
  // make a GET request
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }

  // make a POST request
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        'method': 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // make a PUT request
  put(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        'method' : 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  // make a DELETE request
  delete(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        'method' : 'DELETE'
      })
        .then(response => response.json())
        .then(() => resolve('Resource deleted successfully'))
        .catch(error => reject(error))
    });
  }
}