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
    var cell5 = row.insertCell(4); // For buttons

    cell1.textContent = word;
    cell2.textContent = meaning;
    cell3.textContent = example;
    cell4.textContent = category;

    row.classList.add(category);

    // Create edit and delete buttons for each row
    cell5.innerHTML = `<button class="edit-button">Düzenle</button>
                        <button class="delete-button">Sil</button>`;
    row.appendChild(cell5);

    form.reset();
});

table.addEventListener("click", function(event) {
    var target = event.target;

    if (target.classList.contains("edit-button")) {
        var row = target.closest("tr");
        var cells = row.cells;
        form.word.value = cells[0].textContent;
        form.meaning.value = cells[1].textContent;
        form.example.value = cells[2].textContent;
        form.category.value = row.classList[0];
        table.deleteRow(row.rowIndex);
    } else if (target.classList.contains("delete-button")) {
        table.deleteRow(target.closest("tr").rowIndex);
    }
});
