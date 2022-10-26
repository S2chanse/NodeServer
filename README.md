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
