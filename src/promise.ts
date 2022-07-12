var promise = new Promise((resolve, reject) => {
  const x = "wisflux";
  const y = "wisflux"
  if(x === y) {
    resolve("SUCCESS");
  } else {
    reject("FAILED");
  }
});
   
promise.
    then((message) =>  {
        console.log('Success, You are a ' + message);
    }).
    catch((message) =>  {
        console.log('Some error has ' + message);
    })
    .finally(() => {
    	console.log('Promise is Settled!')
    });

async function usePromise() {
	const result = await promise;
	return result
}
