window.onload = function () {

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }
      
    NSFW="no"

    if(NSFW=="yes"){
        document.getElementById("divNoShirt").style="display:block";
    }
    else{
        document.getElementById("divShirt").style="display:block";
    }

    document.getElementById("nose").addEventListener("click",function(e){       

        //creating the user
        dateprom=fetch("http://localhost:3000/users",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": username, 
                "Password": password,
            })
            }).then(response => response.json());
        
        async function resolvedate() {
            //getting the date of last joke
            const date=await dateprom;
            console.log(date)

            //create date of when they are asking for joke
            const datemili=Date.now();
            console.log(nudate)
             
            //if joke hasnt been distributed to used in last 24 hrs
            if(datemili-date>8.64e7){
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

                //create date of when they are asking for joke
                const datemili=Date.now();
                const nudate=new Date(datemili);

                //creating the user
                fetch("http://localhost:3000/users",{
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "Username": username, 
                        "Password": password,
                        "NSFW": "Yes",
                    })
                    }).then(response => response.json())
                    .then(data => console.log(data));
            }
            //if has had joke in the past 24 hrs
            else{
                x=datemili-date;
                alert("sorry you have accesed a joke in the passed 24hrs please wait "+x+" until you get a new joke")
            }
        }

        resolvedate();
        

        
        
    })

}