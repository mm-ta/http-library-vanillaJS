/**
 * async-await version of the previous library (V3)
 */
class HttpLib3 {
  // make GET request
  async get(url) {
    try {
      const response = await fetch(url);
      const responsedata = await response.json();
      return responsedata;
    } catch (e) {
      return `Error is ${e}`;
    }
  };

  // make POST request
  async post(url, data){
    try {
      const response = await fetch(url, {
        'method': 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responsedata = await response.json();
      return responsedata;
    } catch(e) {
      return `Error is ${e}`;
    }
  }

  // make PUT request
  async put(url, data) {
    try{
      const response = await fetch(url, {
        'method': 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responsedata = await response.json();
      return responsedata;
    } catch(e) {
      return `Error is ${e}`;
    }
  }

  // make DELETE request
  async delete(url) {
    try {
      const response = await fetch(url, {
        'method' : 'DELETE'
      });
      return 'resource deleted successfully';
    } catch(e) {
      return `Error is ${e}`;
    }
  }
}