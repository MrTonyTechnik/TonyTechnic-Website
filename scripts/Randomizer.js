/**
 * An enhancement of the Math.Random function to provide similar functionality as Python's random class.
 */
export class Randomizer {

    /** 
     * Generates a random integer between two others.
     * min - the minimum possible result.
     * max - the maximum possible result.
    */
    static integer(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /** 
     * Generates a random float between integers.
     * min - the minimum possible result.
     * max - the maximum possible result.
    */
    static float(min, max) {
        const result = Math.random() * (max - min) + min
        return result
    }

    /** 
     * Selects a random indexing key from an array
     * and prints out the string or variable indexed under said
     * key.
     * array - selected array/list from variable title.
    */
    static choice(array) {
        const min = 0;
        const max = array.length - 1;

        const choice = Math.floor(Math.random() * (max - min + 1)) + min;
        return array[choice]
    }
}


