import { useState, useEffect } from "react";


export default function Jokes(){

    let[Joke,setJoke] = useState({});
    
    const url = "https://official-joke-api.appspot.com/random_joke";

    //API CALL FUNCTION
    const newJoke = async ()=>{
        let res = await fetch(url);
        let jsonRes = await res.json();
        console.log(jsonRes);
        setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
        
    };


    //useEffect for getting a joke at first render by default
    useEffect( () =>{
        async function firstJoke(){
            let res = await fetch(url);
            let jsonRes = await res.json();
            console.log(jsonRes);
            setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});    
        }
        firstJoke();
    }, [] ) //empty array in dependency means useEffect works only at the first render



    //Main Ui
    return(
        <div>
            <h1>Funny Jokes!!</h1>
            <div className="box">
                <h3>{Joke.setup}</h3>
                <h3>{Joke.punchline}</h3>

            </div>


            <button onClick={newJoke}>New Joke</button>
        </div>
    );
}