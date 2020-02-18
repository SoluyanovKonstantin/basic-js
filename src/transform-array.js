module.exports = function transform( arr ) {
    if (arr.length === 0) return arr;
    else if (!Array.isArray(arr)) {
        throw new Error('it is not array');
    }
    else {
        let returnArray = [];
        let trash = [];
        for (let i=0; i < arr.length; i++) {
            if (arr[i] === '--discard-next') {
                arr[i] = 'delete';
                if (arr[i+1] != undefined) {
                    trash[i+1] = arr[i+1];
                    arr[i+1] = 'delete';
                }
            } else if (arr[i] === '--discard-prev') {
                arr[i] = 'delete';
                let j = i-1;
                while (arr[j] === 'delete') j--;
                if (arr[j] != undefined) arr[j] = 'delete';
            } else if (arr[i] === '--double-next') {
                if (arr[i+1] != undefined)
                    arr[i] = arr[i+1];
                else
                    arr[i] = 'delete';
            } else if (arr[i] === '--double-prev') {
                if (arr[i-1] != undefined){
                    if (arr[i-1] != 'delete') {
                        arr[i] = arr[i-1];
                    } else {
                        arr[i] = trash[i-1];
                    }
                }
                else 
                    arr[i] = 'delete';
            }
        }
         j = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != 'delete') {
                returnArray[j] = arr[i];
                j++;
            } 
        }
        return returnArray;
    }
};
