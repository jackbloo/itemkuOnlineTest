let relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]]

function solution(relation) {
    let answer = 0;
    let studNumbers = []
    for(let i = 0; i < relation.length;i++){
        let uniqueRow1 = {}
        uniqueRow1['StudentNumber'] = relation[i][0]
        if(uniqueRow1[relation[i][0]] != null){
            uniqueRow1['Total'] += 1
        }else{
            uniqueRow1['Total'] = 1
        }

        studNumbers.push(uniqueRow1)
    }
    if(studNumbers.some(el => el.Total > 1)){
        
    }else {
        answer++
    }


    let uniqueRow2 = {}
    for(let i = 0; i < relation.length;i++){
        if(uniqueRow2[relation[i][1]] != null){
            uniqueRow2[relation[i][1]] += 1
        }else{
            uniqueRow2[relation[i][1]] = 1
        }
    }
    let checkUnique = []
    for(let i in uniqueRow2){
        let nameObject = {}
        nameObject['Name'] = i
        nameObject['Total'] = uniqueRow2[i]
        checkUnique.push(nameObject)
    }
    let same = []
    if(checkUnique.some(el => el.Total > 1)){
        for(let i in checkUnique){
            if(checkUnique[i].Total > 1){
                for(let j in relation){
                  if(checkUnique[i].Name == relation[j][1]){
                      let sameObj = {}
                      sameObj['Name'] = relation[j][1]
                      sameObj['Major'] = relation[j][2]
                      sameObj['Grade'] = relation[j][3]
                    same.push(sameObj)
                  }
                }
            }
        }

        for(let i=0; i< same.length ;i++){
            for(let j=i+1;j < same.length;j++){
               if ((same[i].Major === same[j].Major) && (same[i].Name === same[j].Name)) {
                    if((same[i].Major === same[j].Major) && (same[i].Name === same[j].Grade) && (same[i].Name === same[j].Grade)  ){

                    }else{
                        answer++
                    }
            }else {
                answer++
            }
        }
    }
        
    }else{
        answer++
    }
 
    return answer;
}



console.log(solution(relation))