
function getRandomNumber (size){
    return Math.floor(Math.random() * size)
}
function getDistance (event, target){
    let diffX = event.offsetX - target.x
    let diffY = event.offsetY - target.y
    return Math.sqrt((diffX * diffX) + (diffY * diffY))
}
function getDistanceHint (distance){
    if (distance < 10){
        return 'Обожжешься!!!'
    } else if (distance < 20){
        return 'Очень горячо!'
    } else if (distance < 40){
        return 'Горячо'
    }else if(distance < 60){
        return 'Теплее'
    } else if (distance < 80){
        return 'Тепло'
    } else if (distance < 160){
        return 'Холодно'
    } else if (distance < 320){
        return 'Очень холодно!'
    }else if(distance < 360){
        return 'Очень-очень холодно!'
    } else {
        return 'Замерзнешь!!!'
    }
}
let clicks = 0
let width = 1200
let height = 800
let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
}

$('#map').click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $('#distance').text(distanceHint);
    if (distance < 8){
        alert('Клад найден! сделано кликов: ' + clicks);
    }
});






