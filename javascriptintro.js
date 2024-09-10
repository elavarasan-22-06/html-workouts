var a=5;
/*console.log(a);
var b=BigInt(559595497985959213456789023456789023456789023456789324567890);
console.log(b);
var c="html";
console.log(c);

var d=true;
console.log(d);

var e;
console.log(e);


var person ={
           firstname :"inba",          
            lastname:"hai",
           age      :21 

};
console.log(person);

// Array
var fruits =["apple","orange","grapes",];
console.log (fruits[2])*/


    
        //    let user={
        //             name: "sanjay",
        //             age :20,
        //             gender: male",
        //             display: function(){
        //             alert ("user name is"+ this .name)
        //             }
                        
        //         }
        //         user ={...User,qualification
        //         }

               
               // const user={}
               /*const user =new Object()
               user.firstname ="elavarasan"
               user.lastname ="ela"
               console.log(user.lastname +""+user.firstname)
               console.log(user["firstname"]+""+user["lastname"])*/
                const user = {
                    firstname :"elavarasan",
                    lastname:"sanjay",
                    mark:{
                        sslc:200,
                        hsc:800,
                        degree:7.5,

                    },
                    fullname: function(){
                        return this.firstname+ " " + this.lastname
                    }
                     
                }
                console.log(user.firstname)
                    console.log(user.mark.hsc)
                    console.log(user.mark.sslc)
                console.log(user.mark.degree)
                console.log(user.fullname())
                

            


                               
    
