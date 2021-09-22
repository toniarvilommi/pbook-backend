require('dotenv').config()
const { request, response } = require('express')
const os = require('os')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()


/**
 * This has to be added for parsing the body data when posting information to the backend
 */
app.use(express.json())

/**
 * Tokens create a new token that can be accessed with :::::::
 * res returns an array, which has the body.
 * Body was hard to access because you had to notice that it's inside "req" object
 */
morgan.token('body', (req, res) => JSON.stringify(res.req.body));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :body'))


/**
 * Middleware to enable static pages
 */
app.use(express.static('build'))
/**
 * Add cors middleware to get rid of errors
 */
app.use(cors())


/**
 * Setting up mongodb
 */
const Person = require('./models/people')

/**
 * Information about the api and server
 */
app.get('/info', (request, response) => {
	response.send(`
	Phonebook has info for  people <br /> 
	${Date()} <br />
	Operating system name: ${os.type()}<br />
	Operating system: ${os.platform()}<br />
	Operating release: ${os.release()}<br />
	`)
})

/**
 * Returns all contacts
 */
app.get('/api/persons', (req, res) => {

	Person.find({}).then(result => {
		res.json(result)
		console.log(result);
	})

})

/**
 * Handles error for /api/persons/:id
 */
const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' })
	}

	next(error)
}

/**
 * Return single contact
 */
app.get('/api/persons/:id', (request, response, next) => {
	id = request.params.id

	Person.findById(id)
		.then(person => {
			if (person) {
				response.json(person)
			} else {
				response.status(404).end()
			}
		})
		.catch(error => next(error))

})



/**
 *  Deletes a contact information from the list
 */
app.delete('/api/persons/:id', (request, response, next) => {
	id = request.params.id

	Person.findByIdAndRemove(id)
		.then(result => {
			response.status(204).end()
		})
		.catch(error => next(error))
})




/**
 * Replace phonenumber with a new one
 */
app.put('/api/persons/:id', function (request, response) {
	//Get id and body of the request
	const id = request.params.id
	const body = request.body
	//add current id to the new information
	// body.id = id;
	const tempPerson = {
		name: body.name,
		number: body.number,
	}

	Person.findByIdAndUpdate(id, tempPerson, { new: true })
		.then(updatedNote => {
			response.json(updatedNote)
		})
		.catch(error => next(error))

})

/**
 * 
 * Post a new contact
 */
app.post('/api/persons', (req, res) => {

	console.log('request body', req.body);
	const newPerson = req.body

	const person = new Person({
		name: newPerson.name,
		number: newPerson.number,
	})

	person.save().then(response => {
		console.log(response)
		res.json(response)

	})

})

app.use(errorHandler)

const port = process.env.PORT || 3001
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
})
