document.addEventListener('DOMContentLoaded', function () {
  const startButton = document.getElementById('start-button');
  const logoutButton = document.getElementById('logout-button');

  // スタートボタンのクリックイベント
  startButton.addEventListener('click', function () {
    // ログイン状態を確認（仮の条件です）
    const isLoggedIn = true; // ここにログイン状態を確認するコードを追加

    if (isLoggedIn) {
      // ログイン状態の場合、次の画面に遷移
      window.location.href = 'next-page.html'; // 次の画面のURLに遷移
    } else {
      // ログインしていない場合、ログインを催促するメッセージを表示
      alert('ログインが必要です。');
      // あるいはログインフォームを表示する処理を追加
    }
  });

  // ログアウトボタンのクリックイベント
  logoutButton.addEventListener('click', function () {
    // ログアウト処理（仮の処理です）
    alert('ログアウトしました。');
    // あるいはログアウト処理を実行するコードを追加
  });
});

// スタートボタン要素を取得
const startButton = document.getElementById("start-button");

// スタートボタンがクリックされたときの処理
startButton.addEventListener("click", function() {
  // メインメニューに遷移
  window.location.href = "mainmenu.html"; // メインメニューページのURL
});
