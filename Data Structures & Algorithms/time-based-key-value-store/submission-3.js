class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(this.keyStore.has(key)){
            let data = this.keyStore.get(key)
            this.keyStore.set(key,[...data,[value,timestamp]])
        }
        else{
        this.keyStore.set(key,[[value,timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
 get(key, timestamp) {
    let data = this.keyStore.get(key)

    if (!data) return ""

    let result = ""

    for (let i = 0; i < data.length; i++) {
        if (data[i][1] <= timestamp) {
            result = data[i][0]
        } else {
            break
        }
    }

    return result
}
}
