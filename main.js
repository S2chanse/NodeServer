let str = `
010-1234-5678
test@gamil.com
https://www.naver.com/?search=abb&serviceKey=adf334sdfds
This is my first test.
Test Man
aaaabbbbb333dddd
http://www.naver.com/?sea
가나다라 마바사 아자차카타파하 헤헤     으헤으헤으헤허
`;

//const regexp = new RegExp("test", "gi");
//g값을 옵션으로 주면 해당 관련건만 array로 만든다.
//i는 대소문자 구분 없이이다.
//const regexp = /test/gi;
//const regexp = /\.$/gim;
//const regexp = /\b\w{2,4}\b/g;
//str = str.replace(regexp, "Woman");
const h = `  the hello  world       !



`;
console.log(str.match(/(?<=\/{2}).{1,3}/gi, ""));
//test = 정규식과 일치하나? boolean으로 반환
//regexp.test(str)
