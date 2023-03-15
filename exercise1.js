let order = ['Sofia', 'David', 'Juan']

order.push('Sara', 'Augustin') //[ 'Sofia', 'David', 'Juan', 'Sara', 'Augustin' ]

order.shift() //[ 'David', 'Juan', 'Sara', 'Augustin' ]

order.splice(2,0,'Reneta') //[ 'David', 'Juan', 'Reneta', 'Sara', 'Augustin' ]

order.push('Elena') //[ 'David', 'Juan', 'Reneta', 'Sara', 'Augustin', 'Elena' ]

console.log(order)
