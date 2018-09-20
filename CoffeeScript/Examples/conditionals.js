// Generated by CoffeeScript 1.12.7
(function() {
  var age, childAge, csOutput, votingAge;

  csOutput = document.getElementById("csoutput");

  age = 19;

  if (age >= 18) {
    csOutput.insertAdjacentHTML('beforeend', "You can Vote");
  } else {
    csOutput.insertAdjacentHTML('beforeend', "You can't Vote");
  }

  if (!(age >= 19)) {
    csOutput.insertAdjacentHTML('beforeend', " Still you are in school<br>");
  }

  if ((age < 4) || (age > 65)) {
    csOutput.insertAdjacentHTML('beforeend', "You are child or retired");
  }

  votingAge = age > 18 ? true : false;

  csOutput.insertAdjacentHTML('beforeend', " " + votingAge + "<br>");

  childAge = 7;

  switch (childAge) {
    case 5:
      csOutput.insertAdjacentHTML('beforeend', " Go to preschool");
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      csOutput.insertAdjacentHTML('beforeend', " Go to school");
  }

  if (age != null) {
    csOutput.insertAdjacentHTML('beforeend', "<br>" + age + " years old");
  }

}).call(this);