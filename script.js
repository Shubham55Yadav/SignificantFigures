function addToInput(value) {
  document.getElementById("number-input").value += value;
}

function clearInput() {
  document.getElementById("number-input").value = "";
}

function countSignificantFigures() {
  var number = document.getElementById("number-input").value;
  var significantFigures = getSignificantFigures(number);
  document.getElementById("result").innerText =
    "Significant Figures: " + significantFigures;
}

function getSignificantFigures(number) {
  var pattern = /(\d+\.\d*|\d*\.\d+|\d+)([eE][-+]?\d+)?/g;
  var matches = number.match(pattern);
  if (!matches) return 0;

  var significantFigures = 0;
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (match.includes("e") || match.includes("E")) {
      significantFigures += match
        .replace(".", "")
        .replace(/0/g, "")
        .replace(/^-/, "").length;
    } else {
      significantFigures += match
        .replace(/^0+/, "")
        .replace(/\.$/, "")
        .replace(/0+$/, "")
        .replace(/\./g, "").length;
    }
  }
  return significantFigures;
}
