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
