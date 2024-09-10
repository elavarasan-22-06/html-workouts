let contvalue =new Promise((resolve,reject)=>{
    let ticket =false
    if(ticket){
        resolve();

    }
    else{
        reject();
        console.log("promisen error");
        
    }
});
contvalue
.then((res)=>{
    console.log("promise resolved successfully ");
    
})
.catch((err)=> {
    console.log("promise error");
    
}) 





























































































































































