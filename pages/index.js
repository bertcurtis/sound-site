import goblet1 from '../static/images/goblet1.jpg'
import goblet2 from '../static/images/goblet2.jpg'
import goblet3 from '../static/images/goblet3.jpg'
import goblet4 from '../static/images/goblet4.jpg'
import goblet5 from '../static/images/goblet5.jpg'
import grail from '../static/images/grail.gif'

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
    <div className='butt1' onClick={() => playPoorly()}>
    </div> 
    <div className='butt2' onClick={() => playPoorly()}>
    </div> 
    <div className='butt3' onClick={() => playPoorly()}>
    </div> 
    <div className='butt5' onClick={() => playWisely()}>
    </div> 
    <div className='butt4' onClick={() => playPoorly()}>
    </div> 
    </div>
    <style jsx>{`
    .wrapper {
        background-image: url(${grail});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        padding: 50px;
        margin: auto;
    }
    .butt {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .butt1 {
        background-image: url(${goblet1});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 80px;
        width: 80px;
        cursor: pointer;
        margin: 25px;
    }
    .butt2 {
        background-image: url(${goblet2});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 80px;
        width: 80px;
        cursor: pointer;
        margin: 25px;
    }
    .butt3 {
        background-image: url(${goblet3});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 80px;
        width: 80px;
        cursor: pointer;
        margin: 25px;
    }
    .butt4 {
        background-image: url(${goblet4});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 80px;
        width: 80px;
        cursor: pointer;
        margin: 25px;
    }
    .butt5 {
        background-image: url(${goblet5});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        height: 80px;
        width: 80px;
        cursor: pointer;
        margin: 25px;
    }
    h2 {
        margin: auto;
        padding: 20px;
        text-align: center;
        color: white;
    }
    `}
    </style>
    </div>
  );
  
  export default Index;