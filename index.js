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

            // サーバーにデータを送信
            sendToServer(itemText);

            newItemInput.value = '';
        }
    }

    function sendToServer(text) {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'save_memo.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log('メモが保存されました');
            }
        };
        xhr.send('memo=' + encodeURIComponent(text));
    }

    newItemInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    });
});