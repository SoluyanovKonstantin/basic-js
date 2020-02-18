module.exports = class DepthCalculator {
    calculateDepth( arr , depth = 1) {
        let depth2 = depth;
        let maxDepth = 1;
        for(let i=0; i< arr.length; i++) {
            if (Array.isArray(arr[i])) {
                depth2 = this.calculateDepth(arr[i], depth+1);
                if (depth2 > maxDepth) maxDepth = depth2;
            }
        }
        if (depth2 > maxDepth) maxDepth = depth2;

        return maxDepth;
    }
};