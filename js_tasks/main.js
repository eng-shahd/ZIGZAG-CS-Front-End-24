



function getResponse(callback) {
    let response=['success', 'error', 'complete'];
    setTimeout(()=>callback(response), 1000);
}

function Promise (func){
    return function(){
        return new Promise((resolve, reject) =>{
            try{
                func.apply(this, arguments);
                resolve('Success');
            } catch(error){
                reject(error);
    
        }
    });
}
}

let promise = Promise(getResponse);
promise.then((response) => console.log(response))
