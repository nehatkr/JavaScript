// ✅ 1. Separate Numbers and Strings
const arr1 = [1, 'a', 2, 'b'];
const nums1 = arr1.filter(i => typeof i === 'number');
const strs1 = arr1.filter(i => typeof i === 'string');
console.log('1:', nums1, strs1);

// ✅ 2. Uppercase and Lowercase Letters
const arr2 = ['A', 'b', 'C', 'd'];
const upper2 = arr2.filter(c => c === c.toUpperCase());
const lower2 = arr2.filter(c => c === c.toLowerCase());
console.log('2:', upper2, lower2);

// ✅ 3. Integers and Floats
const arr3 = [1, 2.5, 3.14, 4];
const int3 = arr3.filter(Number.isInteger);
const float3 = arr3.filter(n => !Number.isInteger(n));
console.log('3:', int3, float3);

// ✅ 4. Boolean Values
const arr4 = [true, 'true', false, 'false'];
const bool4 = arr4.filter(i => typeof i === 'boolean');
console.log('4:', bool4);

// ✅ 5. Duplicates and Unique Values
const arr5 = [1, 2, 2, 3, 4, 4];
const dup5 = arr5.filter((v, i, a) => a.indexOf(v) !== i && a.lastIndexOf(v) === i);
const unique5 = arr5.filter((v, i, a) => a.indexOf(v) === a.lastIndexOf(v));
console.log('5:', dup5, unique5);

// ✅ 6. Even and Odd Numbers
const arr6 = [1, 2, 3, 4];
const even6 = arr6.filter(n => n % 2 === 0);
const odd6 = arr6.filter(n => n % 2 !== 0);
console.log('6:', even6, odd6);

// ✅ 7. Positive Numbers
const arr7 = [-1, 0, 3, -5];
const pos7 = arr7.filter(n => n >= 0);
console.log('7:', pos7);

// ✅ 8. Zero and Non-Zero
const arr8 = [0, 1, 2, 0, 3];
const zero8 = arr8.filter(n => n === 0);
const nonZero8 = arr8.filter(n => n !== 0);
console.log('8:', zero8, nonZero8);

// ✅ 9. Characters and Digits (String)
const arr9 = ['1', 'a', '2', 'b'];
const digits9 = arr9.filter(c => !isNaN(c));
const chars9 = arr9.filter(c => isNaN(c));
console.log('9:', digits9, chars9);

// ✅ 10. Strings with Length > 3
const arr10 = ['cat', 'lion', 'tiger'];
const long10 = arr10.filter(s => s.length > 3);
console.log('10:', long10);

// ✅ 11. Truthy Values
const arr11 = [0, false, '', 1, 'hi', true];
const truthy11 = arr11.filter(Boolean);
console.log('11:', truthy11);

// ✅ 12. Falsy Values
const falsy12 = arr11.filter(i => !i);
console.log('12:', falsy12);

// ✅ 13. Symbols vs Letters
const arr13 = ['@', 'a', '#', 'b'];
const letters13 = arr13.filter(c => /^[a-zA-Z]$/.test(c));
const symbols13 = arr13.filter(c => !/^[a-zA-Z]$/.test(c));
console.log('13:', letters13, symbols13);

// ✅ 14. Numbers > 10
const arr14 = [5, 12, 3, 25];
const gt10 = arr14.filter(n => n > 10);
console.log('14:', gt10);

// ✅ 15. Strings ending in "ing"
const arr15 = ['play', 'playing', 'coding'];
const ing15 = arr15.filter(s => s.endsWith('ing'));
console.log('15:', ing15);

// ✅ 16. Non-Null Values
const arr16 = [null, 1, null, 'hello'];
const nonNull16 = arr16.filter(i => i !== null);
console.log('16:', nonNull16);

// ✅ 17. Alphanumeric Only
const arr17 = ['a', '1', '*', 'b'];
const alphaNum17 = arr17.filter(c => /^[a-zA-Z0-9]$/.test(c));
console.log('17:', alphaNum17);

// ✅ 18. Arrays Only
const arr18 = [[1,2], 'hi', [], {}];
const arrays18 = arr18.filter(i => Array.isArray(i));
console.log('18:', arrays18);

// ✅ 19. Count Even/Odd
const arr19 = [1, 2, 3, 4];
const even19 = arr19.filter(n => n % 2 === 0).length;
const odd19 = arr19.filter(n => n % 2 !== 0).length;
console.log('19:', { even: even19, odd: odd19 });

// ✅ 20. Sum of Numbers
const arr20 = [1, 2, 3];
const sum20 = arr20.reduce((acc, val) => acc + val, 0);
console.log('20:', sum20);

// ✅ 21. Count Vowels
const arr21 = ['a', 'b', 'e', 'f'];
const vowels21 = arr21.filter(c => 'aeiou'.includes(c)).length;
console.log('21:', vowels21);

// ✅ 22. Remove Duplicates
const arr22 = [1, 1, 2, 3];
const unique22 = [...new Set(arr22)];
console.log('22:', unique22);

// ✅ 23. Numbers from String Array
const arr23 = ['12', 'a', '3'];
const numStr23 = arr23.filter(s => !isNaN(Number(s)));
console.log('23:', numStr23);

// ✅ 24. Uppercase Words
const arr24 = ['HELLO', 'Hi', 'BYE'];
const upperWords24 = arr24.filter(w => w === w.toUpperCase());
console.log('24:', upperWords24);

// ✅ 25. Count by Type
const arr25 = [1, 'a', true, null];
const count25 = arr25.reduce((acc, val) => {
  const type = typeof val;
  acc[type] = (acc[type] || 0) + 1;
  return acc;
}, {});
console.log('25:', count25);

// ✅ 26. Objects Only
const arr26 = [1, {}, [], 'a'];
const objects26 = arr26.filter(i => typeof i === 'object');
console.log('26:', objects26);

// ✅ 27. Reverse Only Numbers
const arr27 = [1, 'a', 2, 'b', 3];
const reversedNums27 = arr27.filter(i => typeof i === 'number').reverse();
console.log('27:', reversedNums27);

// ✅ 28. NaN and Valid Numbers
const arr28 = [1, 2, NaN, 3];
const valid28 = arr28.filter(n => !isNaN(n));
const nan28 = arr28.filter(n => isNaN(n));
console.log('28:', valid28, nan28);

// ✅ 29. Remove Empty Strings
const arr29 = ['hi', '', 'hello', ''];
const nonEmpty29 = arr29.filter(s => s !== '');
console.log('29:', nonEmpty29);

// ✅ 30. Prime Numbers Only
const arr30 = [1, 2, 3, 4, 5, 6];
const isPrime = n => n > 1 && [...Array(n).keys()].slice(2).every(i => n % i !== 0);
const primes30 = arr30.filter(isPrime);
console.log('30:', primes30);
