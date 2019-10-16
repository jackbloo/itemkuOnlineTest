let a = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]

function solution(record) {
    let answer = [];
    let splitRecord = []
    for(let i = 0; i < record.length; i++){
           splitRecord.push(record[i].split(' '))
    }
    let users = []
    for(let k = 0; k < splitRecord.length;k++){
        let user = {}
        if(splitRecord[k][0] == 'Enter'){
            if(users.some(el => el.ID == splitRecord[k][1])){
                for(let i in users){
                    if(users[i].ID == splitRecord[k][1]){
                        users[i].Name = splitRecord[k][2]
                    }
                }
            }else{
                user['Name'] = splitRecord[k][2]
                user['ID'] = splitRecord[k][1]
                users.push(user)
            }

        }else if(splitRecord[k][0] == 'Change'){
            for(let i in users){
                if(users[i].ID == splitRecord[k][1]){
                    users[i].Name = splitRecord[k][2]
                }
            }
        }
    }

    for(let j = 0; j< splitRecord.length;j++){
        switch(splitRecord[j][0]){
        case 'Enter':
            for(let i in users){
                if(splitRecord[j][1] == users[i].ID){
                    answer.push(`${users[i].Name} came in`)
                }
            }
            break;
        case 'Leave':
                for(let i in users){
                    if(splitRecord[j][1] == users[i].ID){
                        answer.push(`${users[i].Name} left`)
                    }
                }
            break;
    }
    }
    return answer;
}

console.log(solution(a))