# git

## Push New Branch
-u is short for --set-upstream >> `git push -u origin <branch>`

https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too

## Delete Local Branch
`git branch -d <branch>` 

Force Delete : `git branch -D <branch>`

https://www.git-tower.com/learn/git/faq/delete-local-branch/


# JS

## Test is 'pending' 
A test can show as pending when the it() funciton was closed early:

`it("should do something"), () =>{}`


https://www.git-tower.com/learn/git/faq/delete-local-branch/

## array.splice()
changes element of array at index

takes three arguments, index to start changing array, how many indexes to delete, what to add into the array

returns array of removed items

`output.splice(index /2, 0, specialChars[index])`

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

## array.shift()

`upCaseIndexes.shift();`

removes the first element of an array and returns the removed element. This mutates the array

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

# Unused Code 

### from substitution.js
from line 39

```
//create standard alphabet in UTF numbers (uppercase)
    const stdUpCaseAlphabet = [...Array(27).keys()];
    const stdUpCaseUTFNumer = stdUpCaseAlphabet.map((num) => num + 65);
```

Saves Upcase Indexes: (was at line 43)

```
 /*//convert input to UTF numbers
    upCaseIndexes = [];
    const saveUpperCaseIndex = (str) => {
      for (let i = 0; i < str.length; i++) {
        if (stdUpCaseUTFNumer.includes(str[i].charCodeAt())) {
          upCaseIndexes.push(i);
        }
      }
    };

    saveUpperCaseIndex(input);
    */
```

Add in uppercase indexes: (was at line 91)

```
/*
    UTFoutput.forEach((UTFNum) => {
      if (output.length != upCaseIndexes[0]) {
        output += String.fromCharCode(UTFNum);
      } else {
        let upCaseLett = String.fromCharCode(UTFNum).toUpperCase();
        output += upCaseLett;
        upCaseIndexes.shift();
      }
    });
    */
```

### from substitution.test.js

```
/*
  it("should maintain capital letters", () => {
    const actual = substitution("HELLO", "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.equal("SVOOL");
  });
  */
```
