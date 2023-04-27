/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    let colorToReplace = image[sr][sc];
    if(colorToReplace === color) return image;
    
    let q = [[sr, sc]];
    image[sr][sc] = color;
    while(q.length > 0){
        let [y, x] = q.shift();
        let top = [y - 1, x], bot = [y + 1, x];
        let left = [y, x - 1], right = [y, x + 1];
        let neighbors = [top, right, bot, left];
        for(const [ny, nx] of neighbors){
            let inYBounds = ny >= 0 && ny < image.length;
            let inXBounds = nx >= 0 && nx < image[0].length;
            let inBounds = inYBounds && inXBounds;
            let nColor = inBounds ? image[ny][nx] : -1;
            if(inBounds && nColor === colorToReplace){
                q.push([ny, nx]);
                image[ny][nx] = color;
            }
        }
    }
    return image;
};

/*
    1. Start at the given coordinate.
    2. Perform BFS for it, enqueuing any neighboring coordinates that have the same value.
    3. Replace the value of the neighbors as you're queing them.
*/