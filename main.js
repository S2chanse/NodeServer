let str = `
010-1234-5678
test@gamil.com
https://www.naver.com/?search=abb&serviceKey=adf334sdfds
This is my first test
Test Man
aaaabbbbb333dddd
`;

//const regexp = new RegExp("test", "gi");
//g값을 옵션으로 주면 해당 관련건만 array로 만든다.
//i는 대소문자 구분 없이이다.
//const regexp = /test/gi;
const regexp = /Man/gi;
str = str.replace(regexp, "Woman");
console.log(str);
//test = 정규식과 일치하나? boolean으로 반환
//regexp.test(str)
