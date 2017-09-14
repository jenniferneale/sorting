function merge(firstHalf, secondHalf) {
  var output = [];
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    var firstFirst = firstHalf[0];
    var secondFirst = secondHalf[0];
    output.push((firstFirst < secondFirst) ? firstHalf.shift(0) : secondHalf.shift(0));
  }
  for (var i in firstHalf) output.push(firstHalf[i]);
  for (var i in secondHalf) output.push(secondHalf[i]);

  return output;
}

function splitter(arr) {
  if (arr.length <= 1) { return arr }
  var midpoint = (arr.length / 2);
  var firstHalf = arr.slice(0, midpoint);
  var secondHalf = arr.slice(midpoint);
  return [firstHalf, secondHalf];
}


function mergeSort(arr) {
  if (arr.length < 2) return arr;
  var splitArray = splitter(arr);
  var partOne = splitArray[0];
  var partTwo = splitArray[1];
  return merge(mergeSort(partOne), mergeSort(partTwo));
}
