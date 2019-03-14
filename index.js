const readline = require('readline-sync')

function start(){
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()

	function askAndReturnSearchTerm(){
		return readline.question("Term for query \n")
	}

	console.log(content)
}

start()
