import goblet1 from '../static/images/goblet1.js'
import goblet2 from '../static/images/goblet2.js'
import goblet3 from '../static/images/goblet3.js'
import goblet4 from '../static/images/goblet4.js'
import goblet5 from '../static/images/goblet5.js'

const playWisely = () => {
    var audio = new Audio('/static/audio/wisely.wav');
    audio.play();
}
const playPoorly = () => {
    var audio = new Audio('/static/audio/poorly.wav');
    audio.play();
}
const Index = () => (
    <div className='wrapper'>
        <h2>CHOOSE WISELY</h2>
    <div className='butt'>
    <button className='butt1' onClick={() => playPoorly()}>
    </button> 
    <button className='butt2' onClick={() => playPoorly()}>
    </button> 
    <button className='butt3' onClick={() => playPoorly()}>
    </button> 
    <button className='butt5' onClick={() => playWisely()}>
    </button> 
    <button className='butt4' onClick={() => playPoorly()}>
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
    .butt1 {
        height:50px; 
        width:300px; 
        background-image: url(${goblet1});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
    }
    .butt2 {
        height:50px; 
        width:300px; 
        background-image: url(${goblet2});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
    }
    .butt3 {
        height:50px; 
        width:300px; 
        background-image: url(${goblet3});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
    }
    .butt4 {
        height:50px; 
        width:300px; 
        background-image: url(${goblet4});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
        cursor: pointer;
    }
    .butt5 {
        height:50px; 
        width:300px; 
        background-image: url(${goblet5});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
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