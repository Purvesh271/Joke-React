import { useState } from "react";


export default function Jokes(){

    let[Joke,setJoke] = useState({});

    const newJoke = async ()=>{
        let res = await fetch(url);
        let jsonRes = await res.json();
        console.log(jsonRes);
        setJoke({setup: jsonRes.setup, punchline: jsonRes.punchline});
        
    }
    const url = "https://official-joke-api.appspot.com/random_joke";
   


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