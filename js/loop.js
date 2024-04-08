//Array(value,index)
//Object(property name, property value)
// Set: Collection of unique values
// Syntax: new Set([iterable])
// Value, Index (not applicable in sets)
// Map: Collection of key-value pairs
// Syntax: new Map([iterable])
// Key, Value
/*
The break statement "jumps out" of a loop.

The continue statement "jumps over" one iteration in the loop.
*/
//forEach Loop
/*ArrayName/ObjectName/SetName/MapName.forEach(functionName);
function functionName(value(array/set)/property value(object)/value(map), index(array/set)/property name(object)/key(map), array/set/object/map){
  //code
  //does not return anything
}

//for in loop
let x;//index number of array/set or property name of object
for( x in ObjectName/ArrayName/setName ){
  //code
}
//for of loop
let x;//value of every index of array/set or property value of object or pairs([key,value]) of map
for(let x of ArrayName/SetName/ObjectName/MapName.entries()){
  //code
}
