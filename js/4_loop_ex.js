console.log('--------반복문---------')
console.log('--------for---------')

//초기화, 조건식, 증감식
//조건식 true이면 {}을 실행
//조건식 true가 아니면 for문 종료

let listAdd = `<ul>`;

for(let i=0; i<10; i++) {
  console.log(`i=${i}`); //0 ~9
  console.log(`<li><img src='spring_${i}.jpg' alt='spring_${i}' </li>`); //0~9


  listAdd+=`<li><img src='spring_${i}.jpg' alt='spring_${i}' </li>`
}

listAdd+=`<ul>`

function listAddFn() {
  const itemsList = document.querySelector('.item-list');
  itemsList.innerHTML = listAdd;
}

console.clear();


//구구단
for (let i=2; i<10; i++) {

  if(i>=6) break;
  
  console.log(`${i}단입니다.`)
  for(let j=1;j<10; j++){
    console.log(`${i} * ${j} = ${i * j}`)
    
  }
}

for (let i=2; i<10; i++) {

  if(i>=6) continue;
  
  console.log(`${i}단입니다.`)
  for(let j=1;j<10; j++){
    console.log(`${i} * ${j} = ${i * j}`)
    
  }
}

//1부터 100까지 정수중에서 짝수만 출력(콘솔) 해보세요
// 2로 나누었을때 나머지가 0인수
for(let i=0; i<=100; i++) {
  if(i % 2 === 0){
    console.log(i)
  }
  
}

for(let i=0; i<100; i++) {
  if((i+1) % 2 === 0) {
    console.log(i + 1)
  } 
}




console.log(listAdd)

console.log('--------while---------')
//for 유사

let num1 =2;

while(num1 < 10) {
  console.log(`${num1}단입니다.`)
  let num2 = 1;
  while(num2<10){
    console.log(`${num1}*${num2} = ${num1+num2}`)
    num2++;
  }
  num1++;
}


let num3 = 2;

 while(true) {
    console.log(`${num3}단입니다`);
    let num4 = 1;
    while (num4 < 10) {
      console.log(`${num3} * ${num4}=${num3 * num4}`)
      num4++;
    }

  if (num3>=9) break;
    num3++
 }




console.log('--------do ~ while---------')

//무조건 한번은 실행

let num5 =5 ;
do{
  console.log(`${num5}단입니다`)
  num5++;

  let num6=1;
  do{

    console.log(`${num5} * ${num6} = ${num5 * num6}`)
    num6++;
  }while (num6< 10);

}while(num5 < 10);




const root = document.getElementById('root')

// querySelector('#root')
function initFn(){
  console.log('initfn함수 호출')
  //명령문
//<h1>반복문</h1> -> html를
//#root에 innerHTML을 이용해서 추가
  
  root.innerHTML = `<h1>반복문</h1>
                    <div class='items-list'> <div>
  
  
  
  
  
  
  
  
  `;
}


// (function(){
//     initFn()
// })();

(() => initFn())()



