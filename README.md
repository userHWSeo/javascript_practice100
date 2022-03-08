# 자바스크립트 100제 문제 풀이

## 제주코딩베이스캠프 자바스크립트 100제

<br>

### 자바스크립트에 대한 기초지식과 알고리즘 연습

<br>

#### 구글링과 인프런 강의를 통해 문제를 풀고 있습니다.

<br>
<br>
<br>
<br>

문제 30

indexOf 함수를 활용하여
문자열에 user가 원하는 문자가 몇 번째 인덱스에 있는지
찾아냄

문제 31

시간 복잡도에 관한 내용으로
<br>
1번은 i에 어떠한 값이 들어가도 시간 복잡도는 O(1)
<br>
2번은 push는 마지막 요소만 추가하기 때문에 O(1)
<br>
3번은 slice는 start 부터 end까지 복사하여 새로운 객체를 만들기때문에 길이에 따라 처리 시간이 달리져서 O(n)
<br>
4번은 pop은 마지막 요소만 제거하기 때문에 O(1)
<br>
5번은 includes는 배열이 특정 값을 포함하는지 확인하는 함수인데 arr[0]부터 검사를 하기 때문에 오랜 시간 걸린다 따라서 O(n)

- includes 함수를 새로 배움

문제 32

split을 통해 공백을 기준으로 문자의 숫자를 알아내는 문제

문제 33

받은 입력을 배열로 만든 후 reverse를 통해 배열을 뒤집는다
<br>
이후 join을 활용하여 문자열로 바꾸었으나
<br>
출력인 5 4 3 2 1과 다르게 5,4,3,2,1 로 쉼표가 들어가 있어
<br>
다시 for문을 활용하여 공백으로 출력하도록 만듬.
<br>
<br>
0308 추가
<br>
join() 함수에 " " 공백을 넣어 공백으로 띄어진 문자열로 만들 수 있다.
<br>
for문을 사용하지 않아도 되므로 코드가 더 간결해짐.

문제 34

입력 받은 문자열을 배열로 변경 후
<br>
배열을 sort 함수로 순서대로 정렬 시켜준다.
<br>
sort함수는 그냥 sort()만 사용되었을 때 얼핏보면 정렬된 것 같지만
<br>
만약 100 90 이렇게 두개의 배열이 있을 경우
<br>
앞 자리가 9인 90이 뒷쪽에 배치된다
<br>
따라서 sort안에 함수를 만들어 a 와 b를 만드는데
<br>
console.log로 찍어보면 배열 안 숫자들을 하나씩 짝지어 나오게 된다.
<br>
이를 a - b 수식으로 정렬하면 오름차순
<br>
b - a 수식으로 정렬하면 내림차순으로 나올 수 있게 된다.
<br>
마지막으로 if 문을 활용하여 ent 와 strArr가 같으면 Yes 아니면 No로 나오게 했다.

문제 35

factory 함수인데 함수안에 또 다른 함수를 넣어 사용하였다.
<br>
어려운 부분은 console.log의 a(10)에 10이 어째서 two(x)로 들어가는지인데
<br>
console.log(a)를 찍어보게 되면 function two의 함수가 나오게 된다.
<br>
이는 function one에서 return two를 하였기 때문에 변수 a는 two 함수로 된다.
<br>
a(10)은 two(10)과 같아지게 되며
<br>
Math.pow 함수로 제곱을 만들어 준다.

문제 36

for문을 활용한 구구단 만들기이다.
<br>
입력받은 값을 for문을 활용하여 총 9번을 곱셈하여 문자열로 나타내도록하였다.
<br>
for문에 대한 기본이고 별로 삼각형 만들기와 함께 반복문의 기초이다.
<br>
