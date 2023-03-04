
import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

    player.on('timeupdate', function (currentTime) {
            // console.log(currentTime),
            localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds)),
            console.log(localStorage.getItem('videoplayer-current-time'));
        })

       player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
        .then(function(seconds) {})
        .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });