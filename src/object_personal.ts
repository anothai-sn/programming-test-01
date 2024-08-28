// Create object
interface Personal {
    name: string,
    nickname: string,
    tel: string,
    birth: {
        day: number,
        month: any, // Why datatype this is "any"?, Beacuse month can be "string" or "number"
        year: number
    },
    hobby: string[],
    friends: {
        nickname: string,
        age: string
    }[]
}

// Use ojbect and assign data
var me: Personal = {
    name: "Anothai Soontranon",
    nickname: "Nut",
    tel: "0931198971",
    birth: {
        day: 23,
        month: "February",
        year: 2005
    },
    hobby: ["Playing Chess", "Programming"],
    friends: [{
        nickname: "Jonh",
        age: "17"
    }, {
        nickname: "Jame",
        age: "18"
    }, {
        nickname: "Jimmy",
        age: "19"
    }, {
        nickname: "Jack",
        age: "20"
    }, {
        nickname: "Joreth",
        age: "21"
    }]
}

// Output data
console.log(`
Name: ${me.name}
Nickname: ${me.nickname}
Tel: ${me.tel}
Birth: ${me.birth.day} ${me.birth.day}
Hobby: ${me.hobby.join(', ')}
Friends:`)

for(let friend of me.friends) {
    console.log(`   ${friend.nickname} Age: ${friend.age}$`)
}