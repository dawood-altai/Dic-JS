var form = document.getElementById("word-form");
var table = document.getElementById("word-table");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var word = form.word.value;
  var meaning = form.meaning.value;
  var example = form.example.value;
  var category = form.category.value;

  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = word;
  cell2.innerHTML = meaning;
  cell3.innerHTML = example;
  cell4.innerHTML = category;

  row.classList.add(category); // Kategoriye göre sınıfı ekle

  form.reset();
});
