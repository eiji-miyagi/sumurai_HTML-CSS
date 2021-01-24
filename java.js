const url = 'https://qiita.com/api/v2/tags/javascript/items';
// URLの変数urlに入力

const btn = document.getElementById('btn');
// ボタンの情報を変数btnに入力
const list = document.getElementById('list');
// 変数listにulタグlistを紐付け
const createList = item =>{
    // 関数createList、引数itemの宣言
    const li = document.createElement('li');
    // 変数liでliタグをドキュメントに生成
    const a = document.createElement('a');
    // 変数aでaタグの要素をドキュメントに生成
    a.href = item.url;
    // aタグ子要素は変数itemのurl
    li.textContent = item.title;
    // liのテキストコメントは変数itemのタイトル文

    a.appendChild(li);
    // 変数liの子要素として変数aを生成
    list.appendChild(a);

    //変数aの子要素として変数listを生成 

}
btn.addEventListener('click',()=> {
    list.innerHTML = '';
    // 結果表示部分をリセット
    fetch(url)
    // fetchメソッド（非同期処理）引数urlの指定
    .then(data => data.json())
    // それ（url）のjson形式への変換

    .then(data => {
        data.forEach(item => createList(item))
        // それ（url）の配列データに対し繰り返し処理、itemの数だけ関数クリエイトリストにデータを入力
            
        });
    })




