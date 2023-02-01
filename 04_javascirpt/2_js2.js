// 주석은 css와 같습니다. 
/* 여러줄 주석을
해야 하는 경우는
파이썬에서는 ''' ''' */
/* 
들여쓰기 하지 않아도 절대 문제가 없습니다. */
// console.log('hello');console.log('javascript');
// console.log('hello')console.log('javascript'); // Uncaught SyntaxError: Unexpected identifier 'console' 
// 명령어 뒤에 세미콜론을 붙여주는게 원칙입니다. 근데 한줄에 하나 쓰시면 인터프리터가 알아서 세미콜론을 붙인 것처럼 인식합니다.
// 들여쓰기는 2칸 혹은 4칸 혹은 탭키 사용하는 걸 권장합니다. 근데 안써도 동작해요. 
 // alert('javascript')
 //   alert('ja')
 var a = 1; 
 /* 
 변수를 만드는 이유는 무엇인가요?? 나중에 다시 갖다쓰려고 
 - 값(value)은 식(표현식, expression)이 평가(evaluate)되어 생성된 결과를 말합니다.
   bool이 bool인 이유 
 - 표현식 : '식'이란 값을 얻기 위한 모든 연산을 말합니다. (선언문은 표현식이 아닙니다)
     - 리터럴: 소스 코드의 고정된 값을 나타내는 표기법
     - 리터럴 표현식 : 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용해 값을 생성하는 표기
         a = 1;
     - 식별자 표현식 :  선언이 이미 존재할 경우 변수, 함수 등의 식별자로 사용하는 표기
         a
         a.name
         a[1]
     - 연산자 표현식 : 연산자를 사용해 값을 생성하는 표기 
         a = 1 + 2; // 대입연산자
         a == 1; // 비교 연산자 - 값 자체가 같은지만 비교 
         a === 1; // 완전 항등 비교 연산자, 일치 연산자라고도 부릅니다
     - 함수/메서드 표현식 : 선언이 이미 존재할 경우 이를 호출하는 표기
         a()
         a.getName()    
 
 - 문 : 프로그램을 구성하는 기본 단위이자 최소 실행단위. 
         문을 순서에 맞게 나열하는 것이 프로그래밍.
 - 토큰 : 문법적으로 더이상 나눌 수 없는 코드의 기본 요소. 
           세미콜론으로 종료 표시.(자동 삽입기능으로 생략 가능) 
 var sum = 1; -> 전체가 '문', 
 토큰은 5개 -> var, sum, =, 1, ;
 */ 
 
 1;  // 다시 값을 호출할 수 없습니다. 그래서 변수라는 공간을 만들어서 거기에 저장을 합니다. 
 apple = 1; // 우리가 지금까지 사용했던 파이썬에서는 이렇게 선언하고 나면 언제든 값을 꺼내 쓸 수 있었습니다. 
 
 // 어떻게 이 변수(메모리의 공간을 사용할 것인지를 약속하는 방법)
 /*  변수의 생성 과정
   1. 선언: 변수명을 등록해서 자바스크립트 엔진에 변수의 존재를 알려줍니다. var apple;
   2. 초기화(Initializaion): 값을 저장하기 위해 메모리 공간을 암묵적으로 확보합니다. undefined
   3. 할당: 변수에 값을 넣는다 
 */
 var apple = 1; // 근데 자바스크립트에서는 이렇게 var, let, const라는 명령어를 붙여서 처음 선언을 합니다. 
 
 
 // console.log(var1)
 
 // var var1 = 'var'
 // 무슨 차이가 있을까요? 
 
 // Hoisting(호이스팅)
 // 선언되기 전에 쓰이는 변수가 만드는 에러를 막기 위해서 선언 혹은 함수들은 인터프리터가 다 읽어서 가장 윗단에 코드가 있었던 것처럼 다시 배열을 하는 방법
 
 // var는 - 선언, 초기화가 동시에 됩니다. 이미 있어도 다시 메모리의 공간을 지우고 똑같은 이름으로 생성할 수 있습니다
 
 // let - 선언은 되지만 초기화가 되지 않습니다
 // 변수가 선언되기 전에 쓰이면 에러가 납니다 
 // console.log(let2)
 
 // let let2 = 'let'
 // // ReferenceError: Cannot access 'let2' before initialization
 
 // const
 /* - 선언, 초기화, 할당이 동시에 되지 않으면 변수가 안 만들어진다
 - 한번 만들어진 변수의 내용을 바꿀 수 없습니다 
 */
 // const const1;  // Uncaught SyntaxError: Missing initializer in const declaration
 
 
 // var는 좀더 자유롭게 공간을 만듦 -> 여러 개발자가 혹은 코드줄이 길어질 때 에러, 혹은 변수의 덮어써짐을 캐치하기 어려움
 // 그래서 ES6 문법에서는 선언과 초기화, 할당을 다른 방식으로 하게 하는 let, const 라는 예약어가 등장함
 
 /* 1. 자바스크립트의 기본 자료형 
 - number (정수건 실수건 음수건 양수건 모두 number 자료형)
 - string (문자열)
 - boolean (true, false)
 - null (값이 없음)
 - undefined (정의가 되지 않음)
 - symbol (ES6에서 추가된 자료형. 바깥에서 검색하기 어려운, 고유하고 변경할 수 없는 값 - 은닉성)
 - object (객체) - dict, list 요런 종류의 자료형들 모두 다 object의 하위 자료형이라고 생각하시면 됩니다. 
 */
 /* 1. number
   - 정수, 실수 가리지 않고 모두 number 자료형입니다
   - 0b11 (2진법) 3
   - 0o11 (8진법) 9
   - 0x11 (16진법) 17
   지수표기법 : e 뒤에 나오는 숫자만큼 10의 거듭제곱
   - 3e3 == 3e+3  3000
   - 3e-3 0.003
   
   
   2. string
   - '', "". ``(백틱문자)
   typeof `김연지`
   - 시작할 때 감싸준 따옴표로 끝따옴표도 맞춰주어야 합니다 
   - 따옴표 안에 따옴표를 사용하고 싶을 때는 외부 따옴표와 내부 따옴표를 다른 따옴표로 표기하여야 합니다.
 */ 
 let hello = 'hello';
 hello.length
 hello[2] // 0부터 시작하는 인덱스로 해당 위치의 문자열을 확인
 hello.charAt(2) // 위와 같음 
 hello.charCodeAt(2) // 아스키코드 번호
 hello.toUpperCase() // 전체 문자열을 대문자로 출력
 hello.toLowerCase() // 전체 문자열을 소문자로 출력 
 // console.log(str) //Uncaught ReferenceError: str is not defined 
 const str = 'str 이라는 변수명에\n여러 줄에\n걸쳐\n표시됩니다'// 선언 + 초기화 + 할당
  // Uncaught SyntaxError: Missing initializer in const declaration 
 
 str=`str 이라는 변수명에
 여러 줄에
 걸쳐
 표시됩니다2` // Uncaught SyntaxError: Unexpected token '=' - const는 한 번 넣은 값은 못 바꾸는 거야!!! 
 