document.addEventListener('DOMContentLoaded', function() {
    const newItemInput = document.getElementById('newItem');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');

    addButton.addEventListener('click', addItem);

    function addItem() {
        const itemText = newItemInput.value.trim();
        if (itemText !== '') {
            const li = document.createElement('li');
            li.textContent = itemText;
            itemList.appendChild(li);
            newItemInput.value = '';
        }
    }

    newItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
});