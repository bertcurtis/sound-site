import goblet1 from '../images/goblet1.jpg';
import goblet2 from '../images/goblet2.jpg';
import goblet3 from '../images/goblet3.jpg';
import goblet4 from '../images/goblet4.jpg';
import goblet5 from '../images/goblet5.jpg';
import grail from '../images/grail.gif';
import React, { Component } from 'react';

// const playWisely = () => {
//     var audio = new Audio('/static/audio/indiana_last_wisely.wav');
//     audio.load()
//     const audioPromise = audio.play()
//     if (audioPromise !== undefined) {
//       audioPromise
//         .then(_ => {
//           return;// autoplay started
//         })
//         .catch(err => {
//           // catch dom exception
//           console.info(err)
//         })
//     }
// }
// const playPoorly = () => {
//     var audio = new Audio('/static/audio/indiana_last_poorly.wav');
//     audio.load()
//     const audioPromise = audio.play()
//     if (audioPromise !== undefined) {
//       audioPromise
//         .then(_ => {
//           return;// autoplay started
//         })
//         .catch(err => {
//           // catch dom exception
//           console.info(err)
//         })
//     }
// }
// const Index = () => (
//     <div className='wrapper'>
//         <h2>CHOOSE WISELY</h2>
//     <div className='butt'>
//     <button className='butt1' onClick={() => playPoorly()}>
//     </button> 
//     <button className='butt2' onClick={() => playPoorly()}>
//     </button> 
//     <button className='butt3' onClick={() => playPoorly()}>
//     </button> 
//     <button className='butt5' onClick={() => playWisely()}>
//     </button> 
//     <button className='butt4' onClick={() => playPoorly()}>
//     </button> 
//     </div>
//     <style jsx>{`
//     .wrapper {
//         background-image: url(${grail});
//         background-size: contain;
//         background-position: center;
//         background-repeat: no-repeat;
//         padding: 50px;
//         margin: auto;
//     }
//     .butt {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
//     .butt1 {
//         background-image: url(${goblet1});
//         background-size: contain;
//         background-position: center;
//         background-repeat: no-repeat;
//         height: 80px;
//         width: 80px;
//         cursor: pointer;
//         margin: 25px;
//     }
//     .butt2 {
//         background-image: url(${goblet2});
//         background-size: contain;
//         background-position: center;
//         background-repeat: no-repeat;
//         height: 80px;
//         width: 80px;
//         cursor: pointer;
//         margin: 25px;
//     }
//     .butt3 {
//         background-image: url(${goblet3});
//         background-size: contain;
//         background-position: center;
//         background-repeat: no-repeat;
//         height: 80px;
//         width: 80px;
//         cursor: pointer;
//         margin: 25px;
//     }
//     .butt4 {
//         background-image: url(${goblet4});
//         background-size: contain;
//         background-position: center;
//         background-repeat: no-repeat;
//         height: 80px;
//         width: 80px;
//         cursor: pointer;
//         margin: 25px;
//     }
//     .butt5 {
//         background-image: url(${goblet5});
//         background-size: contain;
//         background-position: center;
//         background-repeat: no-repeat;
//         height: 80px;
//         width: 80px;
//         cursor: pointer;
//         margin: 25px;
//     }
//     h2 {
//         margin: auto;
//         padding: 20px;
//         text-align: center;
//         color: white;
//     }
//     `}
//     </style>
//     </div>
//   );

//   export default Index;

export default class Index extends Component {
    state = {
        show: false
    };
    showDirections = () => {
        this.setState({
            show: true
        });
    }
    hideDirections = () => {
        this.setState({
            show: true
        });
    }
    playWisely = () => {
        var audio = new Audio('/static/audio/indiana_last_wisely.wav');
        audio.load()
        const audioPromise = audio.play()
        if (audioPromise !== undefined) {
            audioPromise
                .then(_ => {
                    this.showDirections();// autoplay started
                })
                .catch(err => {
                    // catch dom exception
                    console.info(err)
                })
        }
    }
    playPoorly = () => {
        var audio = new Audio('/static/audio/indiana_last_poorly.wav');
        audio.load()
        const audioPromise = audio.play()
        if (audioPromise !== undefined) {
            audioPromise
                .then(_ => {
                    this.hideDirections();// autoplay started
                })
                .catch(err => {
                    // catch dom exception
                    console.info(err)
                })
        }
    }

    render = () => {
        return <div className='wrapper'>
            <h2>CHOOSE WISELY</h2>
            <div className='butt'>
                <button className='butt1' onClick={() => this.playPoorly()}>
                </button>
                <button className='butt2' onClick={() => this.playPoorly()}>
                </button>
                <button className='butt3' onClick={() => this.playPoorly()}>
                </button>
                <button className='butt5' onClick={() => this.playWisely()}>
                </button>
                <button className='butt4' onClick={() => this.playPoorly()}>
                </button>
            </div>
            <div className="hidden">{this.state.show && <p>Check near the ice maker</p>}</div>
            <style jsx>{`
    .wrapper {
        background-image: url(${grail});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        padding: 50px;
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
    .hidden {
        margin: auto;
        padding: 20px;
        text-align: center;
        color: white;
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
    }
}