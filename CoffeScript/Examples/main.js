// Generated by CoffeeScript 1.12.7
(function() {
  var areYouHappy, csOutput, largestNum, largestNumStr, name, smallestNum, smallestNumStr;

  name = "Joe";

  csOutput = document.getElementById('csoutput');

  csOutput.innerHTML = ("Hello " + name) + '<br>';

  largestNum = Number.MAX_VALUE;

  smallestNum = Number.MIN_VALUE;

  console.log(largestNum);

  largestNumStr = "The largestNum is: " + largestNum + " ";

  smallestNumStr = "The smallestNum is: " + smallestNum + " ";

  csOutput.insertAdjacentHTML('beforeend', largestNumStr + '<br>');

  csOutput.insertAdjacentHTML('beforeend', smallestNumStr + '<br>');

  areYouHappy = false;

  if (typeof areYouHappy === 'boolean') {
    csOutput.insertAdjacentHTML('beforeend', "areYouHappy is a boolean" + '<br>');
  }

}).call(this);
