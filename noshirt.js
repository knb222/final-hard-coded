window.onload = function () {

    document.getElementById("nose").addEventListener("click",function(e){ 

        //create date of when they are asking for joke
        const datemili=Date.now();
        const nudate=new Date(datemili);
        
        x=1;
        
        //if joke hasnt been distributed to used in last 24 hrs
        if(x===1){
            //getting joke
            jokeprom=fetch("https://api.chucknorris.io/jokes/random").then(response => response.json());

            async function resolveprom() {
                const joke = await jokeprom;
                console.log(joke.value);

                document.getElementById("joke").innerHTML=joke.value
                document.getElementById("joke").style="opacity: 1"
                document.getElementById("laugh").src="https://www.shockwave-sound.com/sound-effects/laugh-sounds/cannedlaugh.mp3"
            }
            resolveprom();
        }
        //if has had joke in the past 24 hrs
        else{
            console.log
            alert("sorry you have accesed a joke in the passed 24hrs please wait "+x+" until you get a new joke")
        }


        

        
        
    })

}