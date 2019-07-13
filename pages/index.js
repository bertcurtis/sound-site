//import Sound from '../components/Sound.js'
const playSound = () => {
    var audio = new Audio('/static/audio/audio.wav');
    audio.play();
    //return <Sound />
}
const Index = () => (
    <div className='wrapper'>
        <h2>Hear ye, hear ye! 
            Art thou having merriment?
            Surely there is much left for you to know.
            Like this next clue, it tells you where to go.
            Do you dare click the button? Or is it a trap?</h2>
    <div className='butt'>
    <button onClick={() => playSound()}>
      GET CLUE
    </button> 
    </div>
    <style jsx>{`
    .wrapper {
        width: 500px;
        padding: 50px;
        margin: auto;
        width: 50%;
        border: 3px solid green;
        padding: 10px;
    }
    .butt {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    button {
        height:50px; 
        width:300px; 
        background-color: #4CAF50; /* Green */
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
    }
    h2 {
        margin: auto;
        padding: 20px;
        text-align: center;
    }
    `}
    </style>
    </div>
  );
  
  export default Index;