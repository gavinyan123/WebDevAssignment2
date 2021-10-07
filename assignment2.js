// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
// Creates a new array with elements from callbackFn //
Array.prototype.myMap = function(callbackFn) {
    const arr = [];
    //interates through array and pushes each item in the array 
    for(let i = 0; i <  this.length; i++){
        arr.myPush(callbackFn(this[i], i, this));
    }
    return arr;
};

// FILTER //
// Loops through array and creates a new array with a condition //
Array.prototype.myFilter = function(callbackFn) {
    const arr = [];
    //iterate through array 
    //if callbackFn returns true, push the item at that index
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i], i, this)){
            arr.myPush(this[i]);
        }
    }
    return arr;
};

// SOME //
// Loops through array and returns //
// true if condition is met by at least one value //
// false if condition is met by none //
Array.prototype.mySome = function(callbackFn) {
    var bool = false;
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i], i, this)){
            bool = true;
            break;
        }
        else{
            bool = false;
        }
    }
    return bool;
};

// EVERY //
// Loops through array and returns  //
// true if condition is met by every value value //
// false otherwise //
Array.prototype.myEvery = function(callbackFn) {
    var bool = false;
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i], i, this)){
            bool = true;
        }
        else{
            bool = false;
            break;
        }
    }
    return bool;
};

// REDUCE //
// Sums up every element of the array //
Array.prototype.myReduce = function(callbackFn) {
    var counter = 0;
    for(let i = 0; i < this.length; i++){
        callbackFn(this[i], i, this);
        counter += this[i];
    }
    return counter;
};

// INCLUDES //
// Loops through array to check if condition is met //
// Element as a parameter rather than a callbackFn //
Array.prototype.myIncludes = function(element) {
    var bool = false;
    for (let i = 0; this.length; i++){
        if(this[i] === element){
            bool = true;
            break;
        }
        if(this[i] === undefined) break;
    }
    return bool;
};

// INDEXOF //
// Loops through array and checks for element in the array //
// Returns the index of the element // 
// Returns -1 if the element is not present in the array //
Array.prototype.myIndexOf = function(element) {
    var counter = -1;
    for(let i = 0; i < this.length; i++){
        if(this[i] === element){
            counter = i;
            break;
        }
    }
    return counter;
};

// PUSH //
Array.prototype.myPush = function(...args) { 
    let arg_i = 0; 
    let length = this.length;
    for(let i = length; i<length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
// Loops through the array and checks for the element in the array //
// Returns the index where the element was last present //
// Returns -1 otherwise //
Array.prototype.myLastIndexOf = function(element) {
    var counter = -1;
    for(let i = 0; i < this.length; i++){
        if(this[i] === element){
            counter = i;
        }
    }
    return counter;
};

// KEYS //
// Creates an array //
// For...in loop to interate over enumerable properties // 
// stores only the keys and not the values in arr //
Object.grabKeys = function(obj) {
    const arr = [];
    var i = 0;
    for(let key in obj){
        arr[i] = key;
        i++;
    }
    return arr;
};

// Creates an array //
// For...in loop to interate over enumerable properties // 
// stores only the values in arr //
Object.grabValues = function(obj) {
    const arr = [];
    var i = 0;
    for(let values in obj){
        arr[i] = obj[values];
        i++;
    }
    return arr;
};