require('dotenv').config({path:"./config/.env"});

const express = require('express');
const connectDB = require('./config/connectDB');
const Person = require('./models/Person');
var PORT= process.env.PORT||5000;
const app = express();
connectDB();

app.use(express.json());
app.post('/add', async(req,res)=>{
    const {fullName, age,favFood}=req.body
    try {
        const newPerson= new Person({
            fullName,age,favFood
        })
        await newPerson.save()
        res.send(newPerson)
    } catch (error) {
        console.log(error)
    }
})
app.get('/Persons', async(req,res)=>{
    const persons=await Person.find()
        res.send(persons)

})
app.get('/Persons/:id', async(req,res)=>{
    const person=await Person.findById(req.params.id);
        res.send(person);

})
app.put('/Persons/update/:id', async (req, res) => {
    try {
        let editPerson = await Person.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.send("Person updated successfully");
    } catch (error) {
        alert(error.message);
    }
})
app.delete('/Persons/delete/:id', async (req, res) => {
    try {
        await Person.findByIdAndDelete(req.params.id)
        res.send("Person deleted successfully");
    } catch (error) {
        alert(error.message);
    }
})
app.listen(PORT, (err) => {
    err? console.log(err):console.log(`Server Started at ${PORT}`)
})

