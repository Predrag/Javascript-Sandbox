function getMyPromise(url){
    var promise = new Promise(function(resolve, reject) {
        var request = new XMLHttpRequest();
        request.open('GET', url);
        request.responseType = 'blob';
        request.onload = function() {
            if (request.status === 200) {
              resolve(request.response);
            } else {
              reject(Error('Image load failure:' + request.statusText));
            }
        };
        request.send();
    });
    return promise;
}

async function f() { 
    let promise = new Promise((resolve, reject) => {
         setTimeout(() => resolve("done!"), 5000) });
         let result = await promise; 
           
         // wait until the promise resolves (*) 
         alert(result);
          // "done!" 
} 
f();