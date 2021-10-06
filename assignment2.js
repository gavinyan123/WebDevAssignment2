// FOR EACH //
Array.prototype.myEach = function() {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue;
        callbackFn(this[i], i, this);
    }
};

// MAP //
Array.prototype.myMap = function() {
    //interates through array and pushes each item in the array 
    for(let i = 0; i <  this.length; i++){
        arr.myPush(callbackFn(this[i], i, this));
    }
    return this;
};

// FILTER //
Array.prototype.myFilter = function() {
    //iterate through array 
    //if callbackFn returns true, push the item at that index
    for(let i = 0; i < this.length; i++){
        if(callbackFn(this[i], i, this)){
            arr.myPush(this[i]);
        }
    }
    return this;
};

// SOME //
Array.prototype.mySome = function() {
    var bool = true;
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
Array.prototype.myEvery = function() {
    var bool = true;
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