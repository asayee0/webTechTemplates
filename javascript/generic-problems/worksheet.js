//Question 1
function generateEven(n){
  var arr = []
  for (var i = 1; i <= n; i++){
    if(i % 2 == 0)
      arr.push(i);
  }
  return arr;
}

//Question 2
function getSize(arr){
  return arr.length;
}

//Question 3
function isEven(n){
  return (n % 2 == 0);
}

//Question 4
function getEvenNums(arr){
  var evenArr = [];
  for (i = 0; i < arr.length; i++){
    if (isEven(i)){
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
}

//Question 5
function addTo(arr, newValue, position){
  if(position === "back"){
    arr.unshift(newValue);
  }
  else if(position === "front"){
    arr.push(newValue);
  }
  else
    return "Invalid position";
  return arr;
}

//Question 6
function enqueue(arr, newValue){
  arr.push(newValue);
  return arr;
}

//Question 7
function push(arr, newValue){
  arr.unshift(newValue);
  return arr;
}

//Question 8
function sortNumArrAsc(arr){
  arr.sort(function(a, b){return a - b});  
  return arr;
}

//Question 9
function sortNumArrDesc(arr){
  arr.sort(function(a, b){return b - a});  
  return arr;
}

//Question 10
function sortNamesBySurnameAsc(arr){
  arr.sort((a, b) => {
    var nameArr1 = a.split(" ");
    var nameArr2 = b.split(" ");
    var lastname1 = nameArr1[nameArr1.length - 1];
    var lastname2 = nameArr2[nameArr2.length - 1];

    if (lastname1 < lastname2) return -1;
    else if (lastname1 > lastname2) return 1;
    else{
      var firstName1 = nameArr1[0];
      var firstName2 = nameArr2[0];

      if (firstName1 < firstName2) return -1;
      else if (firstName1 > firstName2) return 1;
    }
    return 0;
  })  
  return arr;
}