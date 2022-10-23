const quotes=[
    "Sending you a birthday wish wrapped with all my love",
    "May this day bring you all the joy you deserve.",
    "Wishing you a day as special as you are.",
    "“Hope all your birthday wishes come true!”",
    "“Wishing you the biggest slice of happy today.”",
    "“It’s always a treat to wish happy birthday to someone so sweet.”",
    "“Sending your way a bouquet of happiness…To wish you a very happy birthday!”",

    "Happy birthday! I hope you’re not looking for a present because my presence is my gift to you.",



]

const colors=[
    
    "#e3105d",
    "#13e310",
    "#9de310",
    "#e37910",
    "#4a09e3",
    "#09c2e3",
    "#d1139b",
    "#74f52a"
]

const body=document.getElementById("body")
const wishes=document.getElementById("wish")
const animated_div=document.getElementById("animated_div");
animated_div.style.display="none"
var x = document.getElementById("myAudio");
var boxStatus=0

const say_Hi=()=>{
    if(boxStatus==0){
        body.style.backgroundImage  ='url("https://media.istockphoto.com/photos/happy-birthday-background-picture-id1300972919?b=1&k=20&m=1300972919&s=170667a&w=0&h=vchW4IcvrU73Z7kav_kbC_vUmcl7aQJYxI5eeURYhtA=")'
        x.loop = true;
        x.play(); 
        boxStatus=1;
        animated_div.style.display="block"
    }
    else{
        x.pause(); 
        boxStatus=0
        body.style.background = "white"
        animated_div.style.display="none"
    }
}
var timeoutId;
wishes.style.visibility ="hidden"
var wishCount=0
function showWishes(){
    
        wishes.className="largeWish"
        wishes.style.color=colors[Math.floor(Math.random() * 7)]
        wishes.innerHTML=quotes[Math.floor(Math.random() * 6)].italics();
        wishes.style.visibility ="visible"
        if(wishCount==1){
            clearTimeout(timeoutId)
            wishes.className="smallWish"
            wishes.style.visibility="hidden"
            wishCount=0

            wishes.className="largeWish"
            wishes.style.color=colors[Math.floor(Math.random() * 8)]
            wishes.innerText=quotes[Math.floor(Math.random() * 8)]
            wishes.style.visibility ="visible"
        }
        wishCount=1
        timeoutId=setTimeout(()=>{
            
            wishes.className="smallWish"
            wishes.style.visibility="hidden"
            
        },3500)
        wishCount=0
    
    
}
// background-image:url("https://media.istockphoto.com/photos/happy-birthday-background-picture-id1300972919?b=1&k=20&m=1300972919&s=170667a&w=0&h=vchW4IcvrU73Z7kav_kbC_vUmcl7aQJYxI5eeURYhtA=")