#정규표현식(RegExp)

정규식, Reqular Expression

## 역할

-문자 검색 -문자 대체 -문자 추출

## 테스트 사이트

https://regexer.com/

## 정규식 생성

````js
//생성자
new RegExp("표현", "옵션");
new RegExp("[a-z]", "gi");//g : 전체 / i: 대소문자 구분 x ignore
//리터럴```
/표현/옵션
/[a-z]/gi
````

## 예제 문자

```js
const str = `
010-1234-5678
test@gamil.com
https://www.naver.com/?search=abb&serviceKey=adf334sdfds
This is my first test
Test Man
aaaabbbbb333dddd
`;
```

## 메소드

| 메소드  | 문법                              | 설명                        |
| ------- | --------------------------------- | --------------------------- |
| test    | `정규식.test(문자열)`             | 정규식과 일치여부(Boolean)  |
| match   | `문자열.match(정규식)`            | 정규식 일치 배열반환        |
| replace | `문자열.replace(정규식,대체문자)` | 정규식 일치 대체문자로 변환 |

## 플래그 옵션

| 단어 | 의미         |
| ---- | ------------ |
| g    | 모든문자     |
| i    | 대소문자     |
| m    | 여러 줄 일치 |

/\기호/ => 기호를 찾는다
/기호$/ =>해당 기호를 찾은 후, 해당 기호로 끝나는 지점 확인

## 패턴(표현)

| 패턴         | 설명                                  |
| ------------ | ------------------------------------- |
| ^ab          | 줄 시작에 있는 ab 일치                |
| ab$          | 줄 끝에 있는 ab 일치                  |
| .            | 임의의 한 문자와 일치 (자릿수만 맞춤) |
| a\| b        | a or b 일치                           |
| ab?          | b가 없거나 b와 일치                   |
| {3}          | 3개 연속 일치                         |
| {3,}         | 3개 이상 연속 일치                    |
| {3,5}        | 3개 이상 5개 이하(3~5개) 연속 일치    |
| \w           | 숫자나 문자 모든것                    |
| \b           | 숫자나 문자가 아닌 경계               |
| \d           | 숫자                                  |
| \s           | 공백(space,tab 등)에 일치             |
| [abc]        | a 또는 b 또는 c                       |
| [a-z]        | a에서 z까지                           |
| [A-Z]        | A~Z까지                               |
| [0-9]        | 0~9사이                               |
| [가-힣]      | 한글                                  |
| [특수문자들] | 안의 특수 문자들 일치시               |
| (?=)         | 앞쪽 일치                             |
| (?<=)        | 뒤쪽 일치                             |
