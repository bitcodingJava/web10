console.log('------------------배열 생성 방법 --------------------')

//

// const arr1 = [];

const arr1 = [10, 20 ,30 ,40 ,50];
console.log(arr1) //배열의 이름 전체 배열의 주소값을 저장
//배열의 요소(인덱스)로 접근하기위해서
//객체 접근 연산자를 통해서 각 요소에 접근 한다.

console.log(arr1.length); //배열의 길이

for(let i = 0; i < arr1.length; i++) {
  //전체 배열의 요소를 for을 이용해서 조회 
  console.log(`arr1[${i}] -> ${arr1[i]}`)
}

console.log(arr1[4]);
console.log(arr1[5]); //배열의 인덱스를 초과 -> java의 경우는 예외발생

                      //배열의 인덱스를 초과 -> javascript의 경우는 undefined



//배열생성2

const arr2 = new Array(); //배열객체생성()
console.log(arr2);

// arr2[0] = 10;
// arr2[1] = 20;
// arr2[2] = 30;
// arr2[3] = 40;
// arr2[4] = 50;
// arr2[5] = 60;

for (let i =0; i<5; i++) {
  //배열을 for문 이용해서 초기화 
  arr2[i] = 10 * i + 10;
}
console.log(arr2)


console.clear();

const arr3 = new Array(10,20,30,40,50);

for(let i =0; i<arr3.length; i++) {
  console.log(`arr1[${i}] -> ${arr1[i]}`)
}

console.log(arr3.length); //배열의 길이 
console.log(arr3) //5

arr3.push(100);// 가장 마지막 배열의 요소 뒤에 추가 
console.log(arr3);// [10, 20, 30, 40, 50, 100]
arr3.pop(); //가장마지막 배열의 요소 제거 
console.log(arr3);//[10, 20, 30, 40, 50]

arr3.shift();//가장 첫번째 배열의 요소 제거
console.log(arr3)//[10, 20, 30, 40, 50]

arr3.unshift(200);//가장 첫번째 배열의 요소 앞에 추가
console.log(arr3)//

console.log(arr3.indexOf(200));//

arr3.splice(0 ,2); //시작번지 ,제거 갯수 , 원본손상
console.log(arr3) //(3) [30 , 40 ,50]
console.log(arr3.slice( 0, 2)) // 
const arr3_2 =arr3.slice( 0, 2); // 
arr3.slice(0,2) //0번지부터 2번지 -1 -> 1번지 까지 
console.log(arr3) // (3) [30 ,40 ,50 ], 원본 손상이 없다.

const arr4 = [100 , 200, 300 ,400 ,500]

const arr5  = arr3.concat(arr4);

console.log(arr5)// (8) [30, 40, 50, 100, 200, 300, 400, 500]
 

