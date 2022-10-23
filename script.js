const body=document.getElementById("body")
var x = document.getElementById("myAudio");
var boxStatus=0
const say_Hi=()=>{
    if(boxStatus==0){
        body.style.backgroundImage  ='url("https://media.istockphoto.com/photos/happy-birthday-background-picture-id1300972919?b=1&k=20&m=1300972919&s=170667a&w=0&h=vchW4IcvrU73Z7kav_kbC_vUmcl7aQJYxI5eeURYhtA=")'
        x.loop = true;
        x.play(); 
        boxStatus=1;
    }
    else{
        x.pause(); 
        boxStatus=0
        body.style.background = "white"
    }


}

// background-image:url("https://media.istockphoto.com/photos/happy-birthday-background-picture-id1300972919?b=1&k=20&m=1300972919&s=170667a&w=0&h=vchW4IcvrU73Z7kav_kbC_vUmcl7aQJYxI5eeURYhtA=")