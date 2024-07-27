const { people } = require("../../data")

const addPerson = (req, res) => {
    const { name } = req.body;
    if (name) {
        people.push({ id: people.length + 1, name });
        res.status(201).json({ success: true, name });
    }
    else {
        res.status(400).json({ success: false, message: "Please provide a name" });
    }
}

const getPeople = (req, res) => {
    res.json(people);
}

const getPerson = (req, res) => {
    const personId = parseInt(req.params.id)
    const personIndex = people.findIndex((p) => p.id === personId);
    if (personIndex !== -1) {
        res.status(200).json(people[personIndex]);
    } else {
        res.status(404).json({ message: "Person not found" });
    }
}

const updatePerson = (req, res) => {
    const personId = parseInt(req.params.id)
    const personIndex = people.findIndex((p) => p.id === personId)

    const { name } = req.body
    if (personIndex !== -1) {
        people[personIndex] = { id: personId, name }
        res.status(200).json(people[personIndex]);
    }
    else {
        res.status(404).json({ message: "Person not found" });
    }
}

const deletePerson = (req, res) => {
    const personId = parseInt(req.params.id)
    const newPeople = people.filter((p) => p.id !== personId)
    if (newPeople.length !== people.length) {
        people.length = 0;
        people.push(...newPeople);
        res.status(200).json(people);
    }
    else {
        res.status(404).json({ message: "Person not found" })
    }
}

module.exports = { addPerson, getPeople, getPerson, updatePerson, deletePerson }