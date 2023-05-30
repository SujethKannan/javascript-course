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
		}
        reject('Something went wrong')
	})
}

getProvider('Google-').then((message)=>{
    console.log("getProvider::",message)
    getRequest(message).then((result)=>{
        console.log("getRequest::",result)
    })
}).catch((error)=>{
    console.log(error)
   }).catch((error)=>{
    console.log(error)
   })
   .finally(()=>{
    console.log('thankyou')
   })