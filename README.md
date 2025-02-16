Promise APIs (all, allSettled, race, any) 🔥

###

4 Promise APIs which are majorly used:

    Promise.all()
    Promise.allSettled()
    Promise.race()
    Promise.any()

💡 One simply doesn’t use async/await without knowing promises!
Promise.all()

    A promise is a placeholder for a value that’s going to be available sometime later. The promise helps handle asynchronous operations. JavaScript provides a helper function Promise.all(promisesArrayOrIterable) to handle multiple promises at once, in parallel, and get the results in a single aggregate array.

Q: In what situation one could use above api?
A: Suppose, you have to make parallel API call and get the result, how one can do? This is where Promise.all can be utilized. It is used to handle multiple promises together.

Promise.all([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume p1 takes 3 seconds, p2 takes 1 second, p3 takes 2 seconds.

In first scenario let’s assume all 3 promises are successful. So Promise.all will take 3secs and will give promise value of result like [val1, val2, val3]. It will wait for all of them to finish then it will collect the results and give array as output.

What if any of the promise gets rejected, for eg: Promise.all([p1, p2, p3]). But this time, p2 get rejected after 1 sec. Thus Promise.all will throw same error as p2 immediately as soon as error happened. It will not wait for other promise to either become success or failure. Moreover, p1 and p2 wont get cancelled as they are already triggered so it may result in success or failure depending upon their fate but Promise.all wont care. So its a situation of or/null.

💡 To conclude, the Promise.all() waits for all the input promises to resolve and returns a new promise that resolves to an array containing the results of the input promises. If one of the input promises is rejected, the Promise.all() method immediately returns a promise that is rejected with an error of the first rejected promise.
Promise.allSettled()

    Promise.allSettled() method that accepts a list of Promises and returns a new promise that resolves after all the input promises have settled, either resolved or rejected.

Promise.allSettled([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume p1 takes 3 seconds, p2 takes 1 second, p3 takes 2 seconds.

In first scenario let’s assume all 3 promises are successful. So Promise.allSettled will take 3secs and will give promise value of result like [val1, val2, val3]. It will wait for all of them to finish then it will collect the results and give array as output.

What if any of the promise gets rejected, for eg: Promise.all([p1, p2, p3]). But this time, p2 get rejected after 1 sec. Thus Promise.allSettled will still wait for all promises to get settled. So After 3 secs, it will be [val1, err, val3]

💡 Promise.all() -> Fail Fast
💡 Promise.allSettled() -> Will wait and provide accumulative result
Promise.race()

    The Promise.race() static method accepts a list of promises as an iterable object and returns a new promise that fulfills or rejects as soon as there is one promise that fulfills or rejects, with the value or reason from that promise. The name of Promise.race() implies that all the promises race against each other with a single winner, either resolved or rejected.

Promise.race([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume p1 takes 3 seconds, p2 takes 1 second, p3 takes 2 seconds. So as soon as first promise will resolve or reject, it will give the output.

So in Happy scenario, Promise.race will give (val2) as output after 1sec as p2 got resolved at the earliest. Whereas if it would have been failed Promise.race would have still given output after 1 sec but this time with error.
Promise.any()

    The Promise.any() method accepts a list of Promise objects as an iterable object. If one of the promises in the iterable object is fulfilled, the Promise.any() returns a single promise that resolves to a value which is the result of the fulfilled promise.

Promise.any([p1, p2, p3]) -> Lets assume we are making 3 API call to fetch data. Also assume p1 takes 3 seconds, p2 takes 1 second, p3 takes 2 seconds. So as soon as first promise will be successful, it will give the output.

If in above situation what if p2 got rejected, nothing will happen as Promise.any seek for success, so the moment first success will happen that will become the result.

❓ But what if all promises got failed, so the returned result will be aggregated error i.e. [err1, err2, err3].
