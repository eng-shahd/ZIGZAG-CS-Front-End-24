//المطلوب إنشاء RegExp Pattern لعمل Match للأسماء التي تبدأ ب Os وتنتهي ب O

let regularExpression = /\bos\d*o\b/ig;


let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let match = specialNames.match(regularExpression);
console.log(match);