### **Introducing Mongoose as an ODM**

**Mongoose** is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides a straightforward way to model and interact with MongoDB data, offering a higher-level abstraction compared to native MongoDB drivers. Mongoose is built on top of MongoDB’s native driver and helps manage relationships between data, validate data, and more.

---

### **Difference Between ODM and ORM**

#### **Object Data Modeling (ODM)**

- **Definition**: ODM is a library that maps between MongoDB documents and JavaScript objects. It provides a way to model MongoDB collections in terms of classes, which simplifies interactions with MongoDB.
- **Use Case**: ODM is used with NoSQL databases like MongoDB where data is stored in a flexible, schema-less format. Mongoose is a popular ODM for MongoDB.
- **Features**:
  - Schema definition and validation.
  - Data manipulation using models.
  - Middleware and hooks for pre/post operations.

#### **Object-Relational Mapping (ORM)**

- **Definition**: ORM is a library that maps between relational database tables and JavaScript objects. It helps interact with SQL databases like MySQL or PostgreSQL by treating database tables as objects.
- **Use Case**: ORM is used with SQL databases where data is structured in tables with defined schemas. Sequelize and TypeORM are popular ORMs for relational databases.
- **Features**:
  - Schema definition and validation.
  - Data manipulation using models.
  - Support for complex queries and relationships.

---

### **Creating Schemas Using Mongoose and Using Models to Manipulate Data**

#### **1. Setting Up Mongoose**

1. **Install Mongoose**:
   ```bash
   npm install mongoose
   ```

2. **Connect to MongoDB**:
   ```javascript
   const mongoose = require('mongoose');

   mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
       .then(() => console.log('MongoDB connected'))
       .catch(err => console.error('MongoDB connection error:', err));
   ```

#### **2. Defining a Schema**

Schemas in Mongoose define the structure of documents within a collection. You specify fields, data types, and validation rules.

**Example: Creating a User Schema**

```javascript
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true }
}, {
    timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create a User model from the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
```

- **`Schema`**: Represents the structure of documents in a collection.
- **`timestamps`**: Adds `createdAt` and `updatedAt` fields automatically.

#### **3. Using Models to Manipulate Data**

Models are constructors compiled from schemas. They are used to interact with MongoDB collections, performing CRUD operations.

**Inserting a Document**

```javascript
const User = require('./models/user'); // Import the User model

// Create a new user
const newUser = new User({
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
});

// Save the user to the database
newUser.save()
    .then(user => console.log('User saved:', user))
    .catch(err => console.error('Error saving user:', err));
```

**Finding Documents**

```javascript
// Find all users
User.find()
    .then(users => console.log('Users:', users))
    .catch(err => console.error('Error finding users:', err));

// Find a user by ID
User.findById('60c72b2f5f1b2c001f647e34')
    .then(user => console.log('User found:', user))
    .catch(err => console.error('Error finding user:', err));
```

**Updating Documents**

```javascript
// Update a user by ID
User.findByIdAndUpdate(
    '60c72b2f5f1b2c001f647e34', // User ID
    { $set: { age: 26 } },      // Update operation
    { new: true }               // Return the updated document
)
    .then(user => console.log('User updated:', user))
    .catch(err => console.error('Error updating user:', err));
```

**Deleting Documents**

```javascript
// Delete a user by ID
User.findByIdAndDelete('60c72b2f5f1b2c001f647e34')
    .then(user => console.log('User deleted:', user))
    .catch(err => console.error('Error deleting user:', err));
```

---

### **Interview Questions & Answers**

1. **Q: What is Mongoose?**
   - **A:** Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js. It provides a schema-based solution to model data, enforce data validation, and perform CRUD operations.

2. **Q: How does Mongoose differ from native MongoDB drivers?**
   - **A:** Mongoose provides a higher-level abstraction with schemas, models, and validation, whereas native MongoDB drivers offer a lower-level API to interact directly with MongoDB without built-in data modeling features.

3. **Q: What is the purpose of a schema in Mongoose?**
   - **A:** A schema defines the structure of documents within a collection, including fields, data types, validation rules, and default values.

4. **Q: How can you ensure a field is unique in a Mongoose schema?**
   - **A:** Set the `unique` option to `true` in the schema definition:
     ```javascript
     email: { type: String, required: true, unique: true }
     ```

5. **Q: What are timestamps in Mongoose, and how do you enable them?**
   - **A:** Timestamps automatically add `createdAt` and `updatedAt` fields to documents. Enable them by setting the `timestamps` option to `true` in the schema:
     ```javascript
     const userSchema = new Schema({}, { timestamps: true });
     ```

---