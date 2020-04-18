
const listaTweets=document.querySelector('#lista-tweets');


eventListeners();
function eventListeners(){

    document.querySelector('#formulario').addEventListener('submit',agregarTweet);

    document.querySelector('#lista-tweets').addEventListener('click',borrarTweet);

    document.addEventListener('DOMContentLoaded',localstorageListo);

}

function agregarTweet(e){
    e.preventDefault();
   // console.log('Formulario enviado');
   const tweet=document.querySelector('#tweet').value;

   const botonBorrar=document.createElement('a');
   botonBorrar.classList='borrar-tweet';
   botonBorrar.innerText='X';




   const li=document.createElement('li');
   li.innerText=tweet;
   li.appendChild(botonBorrar);
   listaTweets.appendChild(li);

   agregarTweetLocalStorage(tweet);

   console.log(tweet);
}
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className==='borrar-tweet'){
        e.target.parentElement.remove();
        confirm('Tweet Eliminado');
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }/*else{
        console.log('diste click en otra parte');
    }*/
}
function agregarTweetLocalStorage(tweet){
    let tweets;
    tweets=obtenerTweetsLocalStorage();

    tweets.push(tweet);

    localStorage.setItem('tweets',JSON.stringify(tweets));

   /* localStorage.setItem('tweets',tweet);*/
}
function obtenerTweetsLocalStorage(){
    let tweets;

    if(localStorage.getItem('tweets')===null){
        tweets=[];
    }else{
        tweets=JSON.parse(localStorage.getItem('tweets'));
    }
    return tweets;
}

function localstorageListo(){
    let tweets;
    tweets=obtenerTweetsLocalStorage();

    tweets.forEach(tweet => {
        const botonBorrar=document.createElement('a');
        botonBorrar.classList='borrar-tweet';
        botonBorrar.innerText='X';
     
     
     
     
        const li=document.createElement('li');
        li.innerText=tweet;
        li.appendChild(botonBorrar);
        listaTweets.appendChild(li);
    });
}

function borrarTweetLocalStorage(tweet){
    let tweets,tweetBorrar;

    tweetBorrar=tweet.substring(0,tweet.length-1);

    tweets=obtenerTweetsLocalStorage();
    tweets.forEach((tweet,index)=>{
        if(tweetBorrar===tweet){
            tweets.splice(index, 1);
        }
    });
    localStorage.setItem('tweets',JSON.stringify(tweets));
    console.log(tweets);
    
}