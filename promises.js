let secondPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (true) {
           resolve('Denne besked kommer fra "resolve"');
        } else {
           reject(new Error('Det var ikke en succes, dette kommer fra "reject"'));
        }
     }, 2000);
 });
 
 secondPromise.then(successMessage => {
    console.log(successMessage);
 }).catch(errorMessage => {
    console.log(errorMessage);
 });