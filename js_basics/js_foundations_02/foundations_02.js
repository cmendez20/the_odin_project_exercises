/* The eight types of data in Javascript
1. Numbers
2. Strings
3. Objects
4. Symbols
5. Undefined
6. Boolean
7. BigInt
8. null

*/

/*
THE 3 LOGICAL OPERATORS
&&
||


*/

let quoteStart = 'Don\'t judge each day by the harvest you reap';
let quoteEnd = 'but by the seeds that you plant';

// let finalQuote = `${quoteStart} ${quoteEnd}`;
// console.log(finalQuote);

/* 

    1. Change the casing to correct sentence case (all lowercase, except for upper case first letter). Store the new quote in a variable called fixedQuote.
    2. In fixedQuote, replace "green eggs and ham" with another food that you really don't like.
    3. There is one more small fix to do — add a full stop onto the end of the quote, and save the final version in a variable called finalQuote.

  */
let quote = 'I dO nOT lIke gREen eGgS anD HAM';
let quoteLowerCase = quote.toLowerCase();
let fixedQuote = quoteLowerCase.replace(quoteLowerCase[0], quoteLowerCase[0].toUpperCase());

fixedQuote = fixedQuote.replace('green eggs and ham', 'celery');

console.log(fixedQuote);

let finalQuote = `${fixedQuote}.`;

console.log(finalQuote);

// fixedQuote.replace('green eggs and ham')