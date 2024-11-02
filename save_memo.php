<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['memo'])) {
    $memo = $_POST['memo'] . "\n";
    $file = 'memos.txt';
    
    if (file_put_contents($file, $memo, FILE_APPEND | LOCK_EX) !== false) {
        echo "メモが保存されました";
    } else {
        http_response_code(500);
        echo "エラー: メモの保存に失敗しました";
    }
} else {
    http_response_code(400);
    echo "エラー: 無効なリクエスト";
}