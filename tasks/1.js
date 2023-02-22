'use strict'

function toLowerCase(string) {
    if (!string.length) return string;
    if (string.length == 1) return string.toUpperCase();
    return string.at(0).toUpperCase() + string.slice(1).toLowerCase();
}

function fixSpaces(string) {
    if (!string.length) return string
    let marks=new Set([',',';','.','!','?',':'])
    let result = ''
    let countSpaces = 0
    for (let i=0; i<string.length; i++) {
        if (string[i]==' ') {
            countSpaces++
        } else {
        if (countSpaces>0 && ! marks.has(string[i])) {
            result += ' '
        }
        countSpaces = 0
        result += string[i]
        }
        if (marks.has(string[i])) {
            countSpaces=1
        }
    }
    return result;
}

function countWords(string) {
    if (!string.length) return 0
    let marks=new Set([' ',',',';','.','!','?',':'])
    let count = 0
    let wasSpace = true
    for (let i=0;i<string.length;i++) {
        if (marks.has(string[i])) {
            wasSpace = true
        } else {
            if (wasSpace) {
                count++
                wasSpace = false
            }
        }
    }
    return count
}

function countWordsInMap(map, word) {
    if (!map.has(word)) {
        map.set(word,1)
    } else {
        map.set(word,map.get(word)+1)
    }
}

function getSuffix(num) {
    let multi = new Set([2,3,4])
    if (multi.has(num % 10)) return 'а'
    else return ''
}

function printWordsFromMap(map) {
    if (!map.size) return ''
    let valueKeys = []
    for (let word of map.keys()) {
        valueKeys.push([map.get(word),word])
    }
    valueKeys.push([0, '']) // for convinient processing of last value
    valueKeys.sort()
    let sortValue = 0
    let sortWords = []
    let printString = ''
    for (let i=valueKeys.length-1;i>=0;i--) {
        if (!sortValue) {
            sortValue = valueKeys[i][0]
        }
        if (sortValue == valueKeys[i][0]) {
            sortWords.push(valueKeys[i][1])
        } else {
            sortWords.sort()
            for (let j=0;j<sortWords.length;j++) {
            printString+=sortWords[j]+' - '+String(sortValue)+' раз'+getSuffix(sortValue) + ((i || j!=sortWords.length-1)?', ':'')
            }
            sortValue = valueKeys[i][0]
            sortWords = []
        }
    }
    return printString
}

function repeatedWords(string) {
    if (!string.length) return ''
    let marks=new Set([' ',',',';','.','!','?',':'])
    let words=new Map()
    let word=''
    for (let i=0;i<string.length;i++) {
        if (marks.has(string[i])) {
            if (word.length) {
                countWordsInMap(words,word.toLowerCase())
                word=''
            }
        } else {
            word+=string[i]
        }
    }
    if (word.length) {
        countWordsInMap(words,word.toLowerCase())
    }
    return printWordsFromMap(words)
}

function testFunction(func, arg, test) {
    let result = func(arg)
    console.log('%s%c%s',func.name+'('+arg+') => '+result+' ',(result == test)?'color: green;':'color: red;','['+((result == test)?'Pass':'Failed')+']')
}

function testModule() {
//1.1
console.log('toLowerCase:')
testFunction(toLowerCase,"heLLo",'Hello');
testFunction(toLowerCase,'','')
testFunction(toLowerCase,'x','X')
testFunction(toLowerCase,5645634,5645634)
//1.2
console.log('fixSpaces:')
testFunction(fixSpaces,'    Пр             ;и:вет ,    Пока  !         ',' Пр; и: вет, Пока!')
testFunction(fixSpaces,'?','?')
testFunction(fixSpaces,'','')
//1.3
console.log('countWords:')
testFunction(countWords,'               dfs ваывда, ывадлждлж          ыжвдалдлыв .,,, .', 4)
testFunction(countWords,' ',0)
testFunction(countWords,"",0)
//1.4
console.log('repeatedWords:')
testFunction(repeatedWords,'Текст, в котором слово текст несколько раз встречается и слово тоже',
'слово - 2 раза, текст - 2 раза, в - 1 раз, встречается - 1 раз, и - 1 раз, котором - 1 раз, несколько - 1 раз, раз - 1 раз')
testFunction(repeatedWords,'','')

}

testModule()