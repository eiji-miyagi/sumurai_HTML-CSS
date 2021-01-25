'use strct'
// プランの関数の設定

function Plan(time,Data){
       
    if(Data < 1) {
        return time*20+2980
    }if(Data >= 1 && Data< 4){
        return time*20+3980
        
    }if(Data >= 4){
        return time*20+4980
        
    }else{
        return time*20+0
    }
 
}


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
const btn2 = document.getElementById('btn2');



// ボタン２の設定
btn2.addEventListener('click',() => {
    const Talk = document.getElementById('Mytelephone').Talktaime.value;
    const Datalog = document.getElementById('Mytelephone').Data.value;
    
    
    const p2 = document.createElement('p');
    　　　// P要素にテキストを入力
    p2.textContent = 'au料金は'+ Plan(Talk,Datalog) + '円です'
        // P要素を生成
    document.body.appendChild(p2)


    
});




