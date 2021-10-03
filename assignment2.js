// FOR EACH //
Array.prototype.myEach = function() {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function() {
    //create array 
    const array = [];
    //interates through array and pushes each item in the array 
    for(let i = 0; i < this.length; i++){
        array.myPush(callbackFn(this[i], i, this));
    }
    return array;
};

// FILTER //
Array.prototype.myFilter = function() {
    //create array
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
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {
    
};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {
    let arg_i = 0; 
    let length = this.length;
    for(let i = length; i<length + args.length; i++){
        this[i] = args[arg_i];
        arg_i++;
    }
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};