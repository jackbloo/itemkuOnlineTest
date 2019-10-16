
let N = 4
let users = [4,4,4,4,4]

function solution(N, users) {
    let answer = [];
    let uniqueTotal = []
    for(let i = 0; i <= N;i++){
        let unique = {}
        unique['Stage'] = (i+1)
        unique['Total'] = 0
        for(let j = 0; j < users.length;j++){
            if((i+1) == users[j]){
                unique['Total'] += 1
            }
        }
        uniqueTotal.push(unique)
    }
    let newNumber = []
    for(let i in uniqueTotal){
        if(uniqueTotal[i].Stage <= N){
            let score = 0
            for(let j in uniqueTotal){
                if(uniqueTotal[i].Stage <= uniqueTotal[j].Stage){
                    score += uniqueTotal[j].Total

                }
            }
            newNumber.push(score)
            score = 0
        }
    }

    let newScore = []
    for(let j in uniqueTotal){
        let result = {}
        if(uniqueTotal[j].Stage <= N){
                result['Stage'] = uniqueTotal[j].Stage 
                result['Total'] = uniqueTotal[j].Total/newNumber[j]
                newScore.push(result) 
            }
    }
    newScore.sort((a,b) => {return b.Total - a.Total})
    for(let i in newScore){
        answer.push(newScore[i].Stage)
    }
    return answer;
}


console.log(solution(N,users))