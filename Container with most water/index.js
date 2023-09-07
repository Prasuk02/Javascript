// 11. https://leetcode.com/problems/container-with-most-water/

var maxArea = function(height) {
    function findArea(l, b){
        return l * b
    }

    let start = 0
    let end = height.length - 1
    let maxContainer = 0

    while(start < end){
        maxContainer = Math.max(findArea(Math.min(height[start], height[end]), end - start), maxContainer)
        height[start] > height[end] ? end-- : start++
    }

    return maxContainer
};