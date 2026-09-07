class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
    let maxArea = 0;
    const stack = [];

    for (let i = 0; i < heights.length; i++) {
        let start = i;

        while (
            stack.length &&
            stack[stack.length - 1].height > heights[i]
        ) {
            let { index, height } = stack.pop();

            maxArea = Math.max(maxArea, height * (i - index));

            start = index;
        }

        stack.push({
            index: start,
            height: heights[i]
        });
    }

    // Process remaining bars
    while (stack.length) {
        let { index, height } = stack.pop();

        maxArea = Math.max(
            maxArea,
            height * (heights.length - index)
        );
    }

    return maxArea;
}
}
