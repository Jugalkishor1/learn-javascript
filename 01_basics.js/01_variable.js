const accountId = 4554665
let accountEmail = "jugal@yopmail.com"
var accountPass = "1234656"
accountCity = "Indore" // Its possiblity but not use

let accountState

// accountId = 78787788 Not allowed bcoz CONDTSNT can not be changed
accountEmail = "new@email.com"  // Allowed
accountPass = "45454"  // Allowed
accountCity = "Mumbai"  // Allowed

console.log(accountId);

/*
Note: Prefer not to use var. Because of issue on block and functional scope
*/


console.table([accountId, accountEmail,accountPass, accountCity, accountState])
