const tgadd = document.getElementById('tgadd');
const addlink = document.getElementById('addlink');
var ord = [];

var flag = {};

var number = 0;

function addElement(name , data) {

    // Создаём новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement('link' + number.toString( ));
        newDiv.innerHTML = `<p><a>${data}\n</a></p>`;

    // Добавляем только что созданный элемент в дерево DOM
    my_div = document.getElementById("here");
    document.body.insertBefore(newDiv, my_div);
    number++;
  }

tgadd.addEventListener('click', function(e){
    //console.log(document.getElementById('tg').value);
    fetch('/orders', {
        method: 'post',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({1: document.getElementById('tg').value}),
    })
    .then(function(data) {
        ord = data.json().then(function (data1) {
            console.log('data =',data1);
            ord = data1;
        //console.log(data);
        })
        .then(function(a){
        console.log(ord);
        })
    })
    ord.forEach((element) => {
        if(flag[element] != true){
            addElement(element, element);
            flag[element] = true;
        }
        
      })
    
})

addlink.addEventListener('click', function(e){
    //console.log(document.getElementById('tg').value);
    fetch('/addlink', {
        method: 'post',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({
            1: document.getElementById('tg').value,
            2: document.getElementById('link').value
        }),
    })
    .then(function(data) {
         alert('Записали вашу ссылку!')
      })
    
})