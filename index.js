var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var temp = {object, [key]:value}
  return temp
    //return Object.assign(object,{[key]:value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  
  obj[key] = value
 
  return obj
  
}

