'use strct'
// ボタン情報の取得
const btn = document.getElementById('btn');

// ボタンを押した時イベントのスイッチ

btn.addEventListener('click',() => {    
    // テキストフォーム情報の認識
    const coment = document.getElementById('Myform').Coment.value;
    // p要素を生成  
    const p = document.createElement('p');
　　　// P要素にテキストを入力
    p.textContent = coment;
    // P要素を生成
    document.body.appendChild(p)

})
