class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let newArray = new Array();
        let last_fleet = 0; 
        let fleets = 0;
        for(let i = 0; i <= position.length-1; i++){
            newArray.push({pos:position[i], speed:speed[i]});
        }
        newArray.sort((a, b)=> b.pos - a.pos)
        for(let i = 0; i <= position.length-1; i++){
           let time = (target - newArray[i].pos) / newArray[i].speed;;
           if (fleets === 0 || time > last_fleet) {
                fleets++;
                last_fleet = time;
            }
        }
        return fleets;
    }
}
