module.exports = function calculateHanoi( disksNumber, turnsSpeed ) {
    let object = {
        turns : 1,
        seconds : 1
    }
    for (let i = 2; i <= disksNumber; i++) {
        object.turns = 2*(object.turns) +1;
    }

    object.seconds = object.turns / (turnsSpeed / 3600) ;
    
    return object;
}