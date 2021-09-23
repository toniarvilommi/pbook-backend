const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

// Connect to mongodb and check promises
mongoose.connect(url)
	.then(result => {
		console.log('connected to MongoDB')
	})
	.catch((error) => {
		console.log('error connecting to MongoDB:', error.message)
	})

// New schema for mongodb
const personSchema = new mongoose.Schema({
	name: String,
	number: String,

})

//Convert id
personSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()
		delete returnedObject._id
		delete returnedObject.__v
	}
})

module.exports = mongoose.model('Person', personSchema)
