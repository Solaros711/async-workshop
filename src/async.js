// Async Utilities

function parallel (tasks, callback) {
  let array = new Array(tasks.length)
  var cerr = null
  let count = 0

  for(let i = 0; i < tasks.length; i++){
    tasks[i](function(err, result){
      if(err != null){
        callback(err)
        return
      }
  
      array[i] = result
  
      count++
  
      if(count === tasks.length){
        callback(cerr, array)
        return
      }
    })
  }
}

// Try to define map using parallel
function map (collection, iteratee, callback) {

}

function waterfall (tasks, callback) {

}

export default {
  waterfall,
  parallel,
  map
}
