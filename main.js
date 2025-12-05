const dropdown = document.getElementById('dropdown');
const selectedItem = document.getElementById('selected');

dropdown.style.display = 'none';

function toggleDropdown() {
    if (dropdown.style.display == 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
}

function selectItem(value) {
    if (value == "first") {
        selectedItem.innerHTML = "First Item";
        dropdown.style.display = 'none';
    } else if (value == 'second') {
        selectedItem.innerHTML = "Second Item";
        dropdown.style.display = 'none';
    } else if (value == 'third') {
        selectedItem.innerHTML = 'Third Item';
        dropdown.style.display = 'none';
    } else if (value == 'fourth') {
        selectedItem.innerHTML = 'Fourth Item';
        dropdown.style.display = 'none';
    } else if (value == 'fifth') {
        selectedItem.innerHTML = 'Fifth Item';
        dropdown.style.display = 'none';
    } else {
        selectedItem.innerHTML = 'Select Item';
        dropdown.style.display = 'none';
    }
    dropdown.style.display = 'none';
}