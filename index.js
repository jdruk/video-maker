const readline = require('readline-sync')

function start(){
	const content = {}

	content.searchTerm = askAndReturnSearchTerm()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTerm(){
		return readline.question("Termo para pesquisa \n")
	}

	function askAndReturnPrefix(){	
		const prefixes = ['Quem é', 'Historia de']
		const prefix = prefixes[readline.keyInSelect(prefixes, 'Qual prefixo?')]

		return prefix
	}

	console.log(content)
}

start()
