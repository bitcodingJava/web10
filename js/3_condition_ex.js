//1. 선택자
//아이디 선택자
const increBtn = document.getElementById('increBtn');
const decreBtn = document.getElementById('decreBtn');
const countVal = document.getElementById('countVal');

//클래스 선택자

const counterBtn = document.getElementsByClassName('counterBtn')
counterBtn[0];//increBtn
counterBtn[1];//countVal

//태그 선택자
const inputTag = document.getElementsByName('input[name="countVal"]');
inputTag[0];

//querySelector~ css 선택자
document.querySelector('#increBtn')//id
document.querySelector('#decreBtn')//id
document.querySelector('#countVal')//id


document.querySelector('.counterBtn') //class 다중 첫번째 요소(0번지)
document.querySelectorAll('.counterBtn') //class 다중
document.querySelectorAll('input') //태그 다중
document.querySelector('input[name="countVal"'); //속성(name)

console.log('------------------조건문 ------------------')
console.log('----------------- if ------------------')
// 조건이 하나 일때
const num1 = 100;


//선언부
if(num1 > 0){
  //구현부, 처리부
  console.log(`${num1}은 0보다 크다`)
  console.log(`${num1}`)
}


//처리
if(num1 > 0) console.log(`${num1}은 0보다 크다`)

//조건이 두개 일때 
const userId="m111";
const userPw="1111";

if(userId ==="m111" && userPw ==="1111"){
  console.log(`${userId}님 즐거운 쇼핑되세여`);
}else{
  console.log('로그인 정보가 일치 하지 않습니다~ 다시 로그인해주세여');
}

if(userId ==="m111" && userPw ==="1111")
  console.log(`${userId}님 즐거운 쇼핑되세여`);
else
  console.log('로그인 정보가 일치 하지 않습니다~ 다시 로그인해주세여');

//1.선택자
const testBtn = document.querySelector('.testBtn');

testBtn.addEventListener('click' , caculatorFn);

function caculatorFn() {
  
  //지역변수 -> 함수내 선언된 변수 
  //조건이 두개 이상일때 
const kor = prompt('국어점수입력'); //국어
const eng = prompt('영어점수입력') //영어
const math = prompt('수학점수입력')//수학 
            //"50"+"80"+"1000"
const sum = parseInt(kor) + parseInt(eng) + parseInt(math); //총점
const avg= sum / 3; //평균

console.log(`국어: ${kor}`)
console.log(`영어: ${eng}`)
console.log(`수학: ${math}`)
console.log(`총합: ${sum}`)
console.log(`평균: ${avg}`)

//if~else if ~ else
// 평균이 90이상이면 콘솔 A
// 평균이 80이상이면 콘솔 B
// 평균이 70이상이면 콘솔 C
// 평균이 60이상이면 콘솔 D
// 평균이 60미만이면 콘솔에 F

if(avg >=90) {
  console.log('A')
}else if(avg >=80){
  console.log('B')
  
}else if(avg >=70){
  console.log('C')
}else if(avg >=60){
  console.log('D')
}else{
  console.log('F')
}

// return 함수종료


}



const rs = 10; 
switch(rs) {
 case 1:
	console.log(`${rs}`);
	break;
 case 2:
	console.log(`${rs}`);
	break;
 case 3:
	console.log(`${rs}`);
	break;
 case 4:
	console.log(`${rs}`);
	break;
 case 5:
	console.log(`${rs}`);
	break;
  
 default:
  console.log(`${rs}는 12345를 제외한 숫자입니다.`);
}


console.clear();

// const increBtn = document.getElementById('increBtn');
// const decreBtn = document.getElementById('decreBtn');
// const countVal = document.getElementById('countVal');

//countVal 숫자를 1씩 증가 
increBtn.addEventListener('click' , increBtnFn);
decreBtn.addEventListener('click' , decreBtnFn);
//함수 종류 1(선언부, 이름)
//함수 호이스팅이 적용 
//선언부
//funtion 함수명(매개인자->지역변수){}

// let newCounterVal =  전역변수로 처리도가능


function increBtnFn(){
  //구현부
  const oldCountVal = countVal.value; // countVal get
  console.log(`기존값 -> ${oldCountVal}`)
  console.log(typeof oldCountVal)

  let newCountVal = parseInt(countVal.value);
  console.log(typeof newCountVal)

 
  countVal.value = ++newCountVal;
}




function decreBtnFn(){
  //구현부
  const oldCountVal = countVal.value; // countVal get
  console.log(`기존값 -> ${oldCountVal}`)
  console.log(typeof oldCountVal)

  let newCountVal = parseInt(countVal.value);
  console.log(typeof newCountVal)

  //newCounterVal 값이 0 이하면 팝업창을 뛰우고 "최저값이 0 입니다."
  //함수를 종료 
  //if문으로
  if (newCountVal === 0) {
    alert('최저값이 0 입니다')

  
    // return;  //함수 내에서 return문을 만나면 그 위치에서 함수가 종료된다.
  }
  
  countVal.value = --newCountVal;
  
}



