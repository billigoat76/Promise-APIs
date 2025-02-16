const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P1 Success');
    }, 3000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('P2 failure');
    }, 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('P3 Success');
    }, 2000);
  });
  
  // Promise.all() -> waits for all promises to resolve
  Promise.all([p1, p2, p3]).then((results) => {
    console.log(results); // ['P1 Success', 'P2 Success', 'P3 Success'] -> took 3 secs
  }).catch(err => console.error(err));

  // Promise.allSettled() -> waits for all promises to settle
    Promise.allSettled([p1, p2, p3])
    .then((results) => console.log(results))
    .catch(err => console.error(err));

   // Promise.race() -> waits for the first promise to settled It will return as soon as first promise is resolved or rejected.
   Promise.race([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => console.error(err.error));

    // Promise.any() -> waits for the first promise which is settled successfully
    Promise.any([p1, p2, p3])
  .then((results) => console.log(results))
  .catch(err => {
    console.error(err);
    console.error(err.errors); // ['P1 Fail', 'P2 Fail', 'P3 Fail']
  });