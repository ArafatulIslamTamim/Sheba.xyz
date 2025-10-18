const express = require("express");
const app = express();
const cors = require("cors")
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

require("dotenv").config();
app.use(cors(), express.json());

const port = process.env.PORT || 5000;

const uri = `mongodb+srv://tamimarafatulislam_db_user:QP2BOvNG6cSI5Y7W@cluster0.s3d9usk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi:{
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

app.get('/',(req, res)=> {
    res.json({
        code: 200,
        status: true,
        message: 'Welcome to Backend API'
    })
})

client.connect(err => {
    const usersCollection = client.db("autoBooking").collection("users");
    const categoriesCollection = client.db("autoBooking").collection("categories");
    const servicesCollection = client.db("autoBooking").collection("services");
    const staffsCollection = client.db("autoBooking").collection("staffs");
    const slotsCollection = client.db("autoBooking").collection("slots");
    const paymentsCollection = client.db("autoBooking").collection("payments");
    const reviewsCollection = client.db("autoBooking").collection("reviews");

    // login
    app.post('/login', async (req, res) => {
        const { email, password } = req.body;
        
        const user = await usersCollection.findOne({ email:email.toLowerCase(), password });
     
        user ?
        res.send({
            status: true,
            message: 'Successfully logged in',
            user
        })
        :
        res.send({
            status: false,
            message: "Your email and password doesn't match"
        })        
    })

    // register
    app.post('/register', async (req, res) => {
        const user = req.body
        const email = req.body.email

        const isUserExistWithThisEmail = await usersCollection.findOne({ email: email.toLowerCase()})
        
        if(isUserExistWithThisEmail){
            res.send({
                status: false,
                message: "Email already exists"
            })
        }

        else {
            await usersCollection.insertOne(user,(err, result)=> {
                
                err &&
                res.send({
                    status: false,
                    message: "Something went wrong. Please try again later!"
                })

                result && 
                res.send({
                    status: true,
                    message: "User Created Successfully"
                })
            })
        }
    })

    // get all users
    app.get('/users', async (req, res) => {
        const users = await usersCollection.find({}).toArray();
        res.send(users);
    })

    // get user by id
    app.get('/user/:id', async (req, res) => {
        const id = req.params.id
        const user = await usersCollection.findOne({ _id: ObjectId(id) });
        res.send(user);
    })

    // update user by id
    app.put('/user/:id', async (req, res) => {
        const id = req.params.id
        const updatedUser = req.body
        const result = await usersCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedUser }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "User Updated Successfully"
        })
    })

    // update user by id
    app.patch('/user/:id', async (req, res) => {
        const id = req.params.id
        const updatedUser = req.body
        const result = await usersCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedUser }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "User Updated Successfully"
        })
    })

    // delete user by id
    app.delete('/user/:id', async (req, res) => {
        const id = req.params.id
        const result = await usersCollection.deleteOne({ _id: ObjectId(id) });
        
        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "User Deleted Successfully"
        })
    })

    // create category
    app.post('/category', async (req, res) => {
        const category = req.body
        const name = req.body.name

        const isCategoryExist = await categoriesCollection.findOne({ name: name.toLowerCase()})
        
        if(isCategoryExist){
            res.send({
                status: false,
                message: "Category already exists"
            })
        }

        else {
            await categoriesCollection.insertOne(category,(err, result)=> {
                
                err &&
                res.send({
                    status: false,
                    message: "Something went wrong. Please try again later!"
                })

                result && 
                res.send({
                    status: true,
                    message: "Category Created Successfully"
                })
            })
        }
    })

    // get all categories
    app.get('/categories', async (req, res) => {
        const categories = await categoriesCollection.find({}).toArray();
        res.send(categories);
    })

    // get category by id
    app.get('/category/:id', async (req, res) => {
        const id = req.params.id
        const category = await categoriesCollection.findOne({ _id: ObjectId(id) });
        res.send(category);
    })

    // update category by id
    app.put('/category/:id', async (req, res) => {
        const id = req.params.id
        const updatedCategory = req.body
        const result = await categoriesCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedCategory }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Category Updated Successfully"
        })
    })

    // update category by id
    app.patch('/category/:id', async (req, res) => {
        const id = req.params.id
        const updatedCategory = req.body
        const result = await categoriesCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedCategory }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Category Updated Successfully"
        })
    })

    // delete user by id
    app.delete('/category/:id', async (req, res) => {
        const id = req.params.id
        const result = await categoriesCollection.deleteOne({ _id: ObjectId(id) });
        
        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Category Deleted Successfully"
        })
    })

    // create service
    app.post('/service', async (req, res) => {
        const service = req.body
        const name = req.body.name

        const isServiceExist = await servicesCollection.findOne({ name: name.toLowerCase()})
        
        if(isServiceExist){
            res.send({
                status: false,
                message: "Service already exists"
            })
        }

        else {
            await categoriesCollection.insertOne(service,(err, result)=> {
                
                err &&
                res.send({
                    status: false,
                    message: "Something went wrong. Please try again later!"
                })

                result && 
                res.send({
                    status: true,
                    message: "Service Created Successfully"
                })
            })
        }
    })

    // get all services
    app.get('/services', async (req, res) => {
        const services = await servicesCollection.find({}).toArray();
        res.send(services);
    })

    // get service by id
    app.get('/service/:id', async (req, res) => {
        const id = req.params.id
        const service = await servicesCollection.findOne({ _id: ObjectId(id) });
        res.send(service);
    })

    // update service by id
    app.put('/service/:id', async (req, res) => {
        const id = req.params.id
        const updatedService = req.body
        const result = await servicesCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedService }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Service Updated Successfully"
        })
    })

    // update service by id
    app.patch('/service/:id', async (req, res) => {
        const id = req.params.id
        const updatedService = req.body
        const result = await servicesCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedService }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Service Updated Successfully"
        })
    })

    // delete service by id
    app.delete('/service/:id', async (req, res) => {
        const id = req.params.id
        const result = await servicesCollection.deleteOne({ _id: ObjectId(id) });
        
        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Service Deleted Successfully"
        })
    })

    // create staff
    app.post('/staff', async (req, res) => {
        const staff = req.body
        const name = req.body.name

        const isStaffExist = await staffsCollection.findOne({ name: name.toLowerCase()})
        
        if(isStaffExist){
            res.send({
                status: false,
                message: "Staff already exists"
            })
        }

        else {
            await staffsCollection.insertOne(staff,(err, result)=> {
                
                err &&
                res.send({
                    status: false,
                    message: "Something went wrong. Please try again later!"
                })

                result && 
                res.send({
                    status: true,
                    message: "Staff Created Successfully"
                })
            })
        }
    })

    // get all staffs
    app.get('/staffs', async (req, res) => {
        const staffs = await staffsCollection.find({}).toArray();
        res.send(staffs);
    })

    // get staff by id
    app.get('/staff/:id', async (req, res) => {
        const id = req.params.id
        const staff = await staffsCollection.findOne({ _id: ObjectId(id) });
        res.send(staff);
    })

    // update staff by id
    app.put('/staff/:id', async (req, res) => {
        const id = req.params.id
        const updatedStaff = req.body
        const result = await staffsCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedStaff }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Staff Updated Successfully"
        })
    })

    // update staff by id
    app.patch('/staff/:id', async (req, res) => {
        const id = req.params.id
        const updatedStaff = req.body
        const result = await staffsCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedStaff }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Staff Updated Successfully"
        })
    })

    // delete staff by id
    app.delete('/staff/:id', async (req, res) => {
        const id = req.params.id
        const result = await staffsCollection.deleteOne({ _id: ObjectId(id) });
        
        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Staff Deleted Successfully"
        })
    })

    // create slots
    app.post('/slot', async (req, res) => {
        const slot = req.body
            await slotsCollection.insertOne(slot,(err, result)=> {
                
                err &&
                res.send({
                    status: false,
                    message: "Something went wrong. Please try again later!"
                })

                result && 
                res.send({
                    status: true,
                    message: "Slot Created Successfully"
                })
            })
    })

    // get all slots
    app.get('/slots', async (req, res) => {
        const slots = await slotsCollection.find({}).toArray();
        res.send(slots);
    })

    // get slot by id
    app.get('/slot/:id', async (req, res) => {
        const id = req.params.id
        const slot = await slotsCollection.findOne({ _id: ObjectId(id) });
        res.send(slot);
    })

    // update slot by id
    app.put('/slot/:id', async (req, res) => {
        const id = req.params.id
        const updatedSlot = req.body
        const result = await slotsCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedSlot }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Slot Updated Successfully"
        })
    })

    // update slot by id
    app.patch('/slot/:id', async (req, res) => {
        const id = req.params.id
        const updatedSlot = req.body
        const result = await slotsCollection.updateOne(
            { _id: ObjectId(id) },
            { $set: updatedSlot }
        );

        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Slot Updated Successfully"
        })
    })

    // delete slot by id
    app.delete('/slot/:id', async (req, res) => {
        const id = req.params.id
        const result = await slotsCollection.deleteOne({ _id: ObjectId(id) });
        
        result?.modifiedCount > 0 &&
        res.send({
            status: true,
            message: "Slot Deleted Successfully"
        })
    })

    err ? console.log(err) : console.error("MongoDB Connected!");
})

app.listen(port, ()=> {
    console.log(`Backend running on port ${port}`)
})