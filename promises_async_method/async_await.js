function getProvider(value){
    return new Promise((resolve,reject)=>{
        if(value==='Google'){
            resolve('googleservice')
        }
        reject('only google services are available at this moment')
    })
    // return result
}
function getRequest (value) {
	return new Promise ((resolve, reject) => {
		if (value === 'googleservice') {
			resolve('Request received to Google services')
		}reject('Something went wrong')
	})
}
// async function task(){
   ( async()=>{
	try {
		const providerMsg = await getProvider('Google');
		console.log(providerMsg);
		const reqMsg = await getRequest(providerMsg);
		console.log(reqMsg);
	} catch (error) {
		console.log('error :: ', error)
	}
})()
// task()