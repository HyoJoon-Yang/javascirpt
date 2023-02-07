// 10. 객체

// 10-1. 자바스크립트 내장객체
// 숫자 관련 메소드

var num = 10;
var num1 = 1.113;
var num2 = 1.756;
var str = '가나다라';

// Math 
// - 수학에서 자주 사용하는 상수와 함수들을 미리 구현해 놓은 
//   자바스크립트 표준 내장 객체
// - Math 객체는 다른 전역 객체와는 달리 생성자(constructor)가 존재하지 않음
// - 따로 인스턴스를 생성하지 않아도 Math 객체의 
//   모든 메소드나 프로퍼티를 바로 사용할 수 있음

// Math.ceil (올림)
// Math.floor (내림)
// Math.round (반올림)
// 소수점 이하를 반올림 할 때는 num2.toFixed(자리수) 라는 함수를 사용합니다 
// 소수점 이하 자리수를 모두 균일하게 맞춰야 하면 num2.toFixed(자리수) 를 사용할 수 있습니다
// Math.ceil(str); // Not a Number -> if 자료형 구분하지 않아도 
// isNaN(str) // true 
// isNaN(num2) // false
var num3 = NaN // "number" 자료형으로 관리됨
var liter = '14.6L'
parseInt(liter) // 14
parseFloat(liter) // 14.6
var liter2 = '14.67.5.3L'
parseInt(111.3, 2) // 다른 기수법을 적용할 수도 있습니다. 2의 2승 + 2의 1승 + 2의 0승 = 7
Math.random() // 0과 1 사이의 임의의 숫자를 골라서 우리에게 출력해줍니다
parseInt(Math.random()*10)   
parseInt(Math.random()*100 + 1) // 1~100 사이의 임의의 숫자
Math.sign(num2) // 양수이면 1, 0이면 0, 음수이면 -1을 출력합니다. 자료형 "number"를 유지하기 위해서
var num5 = -1234.1111
Math.abs(-1.3245) // 절대값
Math.PI // 3.14~~~~~~~
Math.max(1,3,4,5,6) // 최대값
Math.min(1,3,4,5,6) // 최소값

var array = [1,2,3,4,5,6,111]
Math.max(...array) // 111
Math.max(array) // NaN
Math.pow(2, 3) // 거듭제곱 2**3과 같음
Math.sqrt(16) // 4 // root를 의미합니다

// 실습. 로또번호 뽑기 - ramdom()을 사용하여 1~46 사이의 6개의 양의 정수를 뽑고 가장 큰 수, 가장 작은수를 출력하세요.

// 1개만 만들고 거기서 무엇을 반복할지 고민해보시면 됩니다 

// 기왕이면 함수로 동작을 묶는 훈련을 해 주세요
function lottery() {
// 빈 배열을 만든다
 var lotto = []
 // 6번 반복: 값을 하나씩 추가한다
 for (var i = 0; i < 6;){
   var result = Math.round(Math.random() * 45 + 1) 
   if (!lotto.includes(result)) {   // 겹치는 번호가 있는지 확인
     lotto.push(result)   // 겹치지 않으면 lotto에 넣음
     i++;
   } 
}
  // max, min 출력
  console.log(Math.max(...lotto))
  console.log(Math.min(...lotto))
  return lotto
}

// str, 배열에서 자주 사용되는 내장함수들
var sentence = 'This is my dog. My dog is 17 years old.'

// my라는 단어가 들어있는지 찾겠습니다 
sentence.indexOf('my') // 있으면 해당 단어가 시작되는 인덱스 번호
sentence.indexOf('mine') // 없으면 -1 

sentence.indexOf('is') // true가 되는 첫번째 자리수를 출력 

sentence.lastIndexOf('is') // true가 되는 마지막 자리수를 출력

if (sentence.lastIndexOf('This') > -1) // this의 인덱스 번호가 0이라서 false -> 아래 내용 출력 안 됨 -> -1보다 큰 조건식으로 변경 
{
  // console.log('right sentence')
}
sentence.slice(2) // 해당 인덱스부터 나머지 전부를 가져옵니다

sentence.slice(2, 5) // 시작인덱스, 끝인덱스 

sentence.slice(2, -5) // 시작인덱스, 끝인덱스(음수인덱싱)

// str.substring(m,n) : m과 n 사이 
sentence.substring(2, 10)
// sentence.split(): 파라미터 자리에 무엇으로 split 할 지 적어주셔야 동작합니다 
sentence.split()
'   hi hello   welcome    '.split(' ')
'   hi hello   welcome    '.split(' ', 5) // ' ' 구분자(seperator)로 분리된 인덱스에서 n개만 쓸게요  
'   hi hello   welcome    '.trim() // 앞뒤 공백만 제거 

'   hi hello   welcome    '.repeat(4) // 해당 문자열을 4회 반복

// 실습. exceptBerry(str) 이라는 함수를 만들어주세요  
exceptBerry('딸기주스 주세요') // 품절입니다 
// 딸기가 들어있지 않은 모든 주문은 '기다리세요' 출력, 
// '딸기'라는 단어가 어디에든 들어있으면 '품절입니다'를 출력하는 함수를 만들어주세요 