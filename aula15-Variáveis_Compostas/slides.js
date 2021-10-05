let num = [5, 8, 4]
num[3] = 6
num.push(7)
num.sort()

for (let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}

console.log(`O valor 7 está na posição ${num.indexOf(7)}`)