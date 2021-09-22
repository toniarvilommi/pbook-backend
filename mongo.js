const mongoose = require('mongoose')

if (process.argv.length < 3) {
	console.log('Give password as an argument')
	process.exit(1)
}
const dbName = 'puhelinluettelo'
const password = process.argv[2] //second argument will be the password
//HGqKB5cI9UBGXH5S
const url = `mongodb+srv://puhelinluettelo:${password}@cluster0.ihcdq.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(url)

/**
 * Kertoo mongooselle, kuinka tieto tulee tallentaa tietokantaan Datatyypit jne.
 * Dokumenttitietokannoissa lisätään skeema kooditasolla.
 */
const personSchema = new mongoose.Schema({
	name: String,
	number: String,
})

/**
 * Mongoose haluaa modelin nimen "yksikössä"
 */
const Person = mongoose.model('Person', personSchema)

/**
 * Tallennetaan data uuteen modeliin objektina
 */
const person = new Person({
	name: 'Mongoose Man 3',
	number: '040-m0ng00533',
})

/**
 * Save -metodi tallentaa datan mongoDB:seen ja palauttaa promisen
 * Tietokantayhteys tulee sulkea AINA.
 */
person.save().then(response => {
	console.log('new person saved')
	mongoose.connection.close()
})

/**
 * Datan hakeminen tietokannasta
 * Pitää olla sama kuin modelille annettu nimi "Person"
 * 
 * Objektiin voi määritellä hakuehtoja esim:
 * { number: '040-m0ng00533' }
 */
Person.find({}).then(result => {
	result.forEach(person => {
		console.log(person);
	});
	mongoose.connection.close()
})