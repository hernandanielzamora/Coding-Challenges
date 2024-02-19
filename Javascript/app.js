function phoneticLookup(val) {
  let result = ""; 
  let lookup = { 
    "alpha": "Adams",
    "bravo": "Boston", 
    "charlie": "Chicago",
    "delta": "Denver", 
    "echo": "Easy",
    "foxtrot": "Frank", 
    "": undefined 
  };  
  let keys = Object.keys(lookup);
  console.log(keys);
  
  for(let i = 0; i < keys.length; i++){
    console.log("I: ", i);
    console.log("keys[i]: ", keys[i]);
  }
  
  result = "Value: " + lookup[val] + "| Key: " + val;
  return result;
}

let output = phoneticLookup("charlie");
console.log(output);