function HttpLib () {
  this.http = new XMLHttpRequest();
}

// make GET request
HttpLib.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  const self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };

  this.http.send();
}

// make POST request

// make PUT request

// make DELETE request

