# Database and Related Concepts for Interviews

This document provides a structured overview of key database concepts, including SQL, NoSQL, ORMs, and Mongoose, tailored for technical interviews.

---

## 1. **Database Basics**
### What is a Database?
- A structured collection of data that can be stored, retrieved, and managed electronically.  
- Common Types:
  - **Relational Databases (RDBMS)**: Data stored in tables (rows and columns) with relationships.  
    Example: MySQL, PostgreSQL.
  - **Non-Relational Databases (NoSQL)**: Data stored in various formats such as key-value pairs, documents, or graphs.  
    Example: MongoDB, Cassandra.

---

## 2. **SQL (Structured Query Language)**
### Key Features
- A language used to interact with relational databases.
- Operations include:
  - **Data Definition**: `CREATE`, `ALTER`, `DROP`.
  - **Data Manipulation**: `SELECT`, `INSERT`, `UPDATE`, `DELETE`.
  - **Data Control**: `GRANT`, `REVOKE`.
  - **Transaction Control**: `COMMIT`, `ROLLBACK`.

### Example Queries
```sql
-- Create Table
CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- Insert Data
INSERT INTO users (id, name, email) VALUES (1, 'Alice', 'alice@example.com');

-- Fetch Data
SELECT * FROM users;

-- Update Data
UPDATE users SET email = 'alice_new@example.com' WHERE id = 1;

-- Delete Data
DELETE FROM users WHERE id = 1;
```

### Advantages of SQL
- Strong ACID compliance.
- Predefined schema ensures data integrity.
- Best suited for complex queries and transactions.

---

## 3. **NoSQL (Non-Relational Databases)**
### Key Features
- Flexible schemas.
- Highly scalable for large datasets and real-time applications.
- Types of NoSQL Databases:
  - **Document-based**: Data stored in JSON-like documents (e.g., MongoDB).
  - **Key-Value**: Simple key-value pairs (e.g., Redis).
  - **Columnar**: Data stored in columns (e.g., Cassandra).
  - **Graph-based**: Data represented as nodes and edges (e.g., Neo4j).

### Example: MongoDB
```json
{
  "_id": "1",
  "name": "Alice",
  "email": "alice@example.com",
  "preferences": {
    "theme": "dark",
    "notifications": true
  }
}
```

### Advantages of NoSQL
- High flexibility for unstructured or semi-structured data.
- Horizontal scalability.
- Better suited for distributed systems and large-scale applications.

---

## 4. **ORM (Object-Relational Mapping)**
### What is ORM?
- A programming technique to map database tables to objects in code, enabling interaction without writing raw SQL.

### Common ORMs
- **For Python**: SQLAlchemy, Django ORM.
- **For JavaScript**: Sequelize, TypeORM.
- **For Java**: Hibernate.
- **For PHP**: Doctrine.

### Advantages
- Simplifies database operations.
- Promotes code reusability and maintainability.
- Abstracts SQL, reducing errors.

### Example: Using Django ORM
```python
# Define a Model
class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

# Insert Data
user = User(name="Alice", email="alice@example.com")
user.save()

# Fetch Data
users = User.objects.all()

# Update Data
user = User.objects.get(id=1)
user.email = "alice_new@example.com"
user.save()

# Delete Data
user.delete()
```

---

## 5. **Mongoose (ODM for MongoDB)**
### What is Mongoose?
- An Object Data Modeling (ODM) library for MongoDB and Node.js, providing schema-based solutions for modeling application data.

### Key Features
- Schema validation.
- Middleware (hooks for operations like `save` and `delete`).
- Supports queries and aggregation pipelines.

### Example: Using Mongoose
```javascript
const mongoose = require('mongoose');

// Define a Schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    createdAt: { type: Date, default: Date.now }
});

// Create a Model
const User = mongoose.model('User', userSchema);

// Insert Data
const user = new User({ name: 'Alice', email: 'alice@example.com' });
user.save().then(() => console.log('User saved'));

// Fetch Data
User.find().then(users => console.log(users));

// Update Data
User.findByIdAndUpdate('user_id', { email: 'new_email@example.com' });

// Delete Data
User.findByIdAndDelete('user_id').then(() => console.log('User deleted'));
```

### Advantages
- Provides a clean way to work with MongoDB in Node.js.
- Enables schema validation and middleware functions.
- Reduces the need for repetitive MongoDB operations.

---

## 6. **Comparison: SQL vs. NoSQL**
| Feature                | SQL                         | NoSQL                       |
|------------------------|-----------------------------|-----------------------------|
| **Schema**             | Fixed schema                | Flexible schema             |
| **Scalability**        | Vertical                    | Horizontal                  |
| **Transaction Support**| Strong (ACID compliance)    | Limited (BASE compliance)   |
| **Data Structure**     | Tabular (rows & columns)    | Various (JSON, key-value)   |
| **Use Cases**          | Complex queries, analytics  | Big data, real-time apps    |

---


## **Sample Interview Questions and Answers**

---

### **SQL Questions**

#### **1. Explain normalization and its types.**
**Answer:**  
Normalization is the process of organizing a database to reduce redundancy and improve data integrity. It involves dividing large tables into smaller tables and defining relationships among them.

**Types of Normal Forms:**
- **1NF (First Normal Form):** Ensures each column contains atomic values, and each row is unique.
- **2NF (Second Normal Form):** Builds on 1NF, ensuring all non-primary attributes are fully functionally dependent on the primary key.
- **3NF (Third Normal Form):** Builds on 2NF by ensuring no transitive dependency exists between non-primary attributes.
- **BCNF (Boyce-Codd Normal Form):** A stricter version of 3NF where every determinant is a candidate key.
- **4NF and 5NF:** Address multi-valued dependencies and join dependencies, ensuring further normalization.

---

#### **2. Write a query to find the second-highest salary in a table.**
**Answer:**
```sql
-- Assuming the table name is 'employees' and column name is 'salary'.
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (SELECT MAX(salary) FROM employees);
```
**Explanation:**
- The subquery fetches the highest salary.
- The main query finds the maximum salary less than the highest salary.

---

#### **3. Explain the difference between `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`.**
**Answer:**
- **INNER JOIN:** Returns rows where there is a match in both tables.
  ```sql
  SELECT a.*, b.*
  FROM table_a a
  INNER JOIN table_b b ON a.id = b.id;
  ```
- **LEFT JOIN (or LEFT OUTER JOIN):** Returns all rows from the left table, and matched rows from the right table. Unmatched rows in the right table are filled with `NULL`.
  ```sql
  SELECT a.*, b.*
  FROM table_a a
  LEFT JOIN table_b b ON a.id = b.id;
  ```
- **RIGHT JOIN (or RIGHT OUTER JOIN):** Returns all rows from the right table, and matched rows from the left table. Unmatched rows in the left table are filled with `NULL`.
  ```sql
  SELECT a.*, b.*
  FROM table_a a
  RIGHT JOIN table_b b ON a.id = b.id;
  ```

---

### **NoSQL Questions**

#### **1. What are the main types of NoSQL databases and their use cases?**
**Answer:**
1. **Document-based:** Stores data in JSON-like documents (e.g., MongoDB).  
   - **Use Case:** Content management systems, user profiles.
2. **Key-Value:** Data stored as key-value pairs (e.g., Redis).  
   - **Use Case:** Caching, session storage.
3. **Columnar:** Data stored in columns rather than rows (e.g., Cassandra).  
   - **Use Case:** Time-series data, analytics.
4. **Graph-based:** Data stored as nodes and edges (e.g., Neo4j).  
   - **Use Case:** Social networks, recommendation engines.

---

#### **2. How does MongoDB achieve horizontal scaling?**
**Answer:**  
MongoDB achieves horizontal scaling through **sharding**, which splits large datasets across multiple servers or clusters.  
- **Shard Key:** Determines how data is distributed.
- **Chunks:** Data is divided into smaller parts called chunks.
- **Replica Sets:** Ensure redundancy and high availability within each shard.

---

#### **3. Discuss the CAP theorem and how it relates to NoSQL databases.**
**Answer:**  
The **CAP theorem** states that a distributed database can guarantee only two out of three properties simultaneously:
1. **Consistency (C):** All nodes have the same data at the same time.
2. **Availability (A):** The system is always responsive.
3. **Partition Tolerance (P):** The system continues to operate despite network failures.

**Relation to NoSQL:**
- **MongoDB:** Prioritizes availability and partition tolerance (AP system) but allows tunable consistency.
- **Cassandra:** Also an AP system.
- **HBase:** Focuses on consistency and partition tolerance (CP system).

---

### **ORM/Mongoose Questions**

#### **1. What is the difference between an ORM and an ODM?**
**Answer:**  
- **ORM (Object-Relational Mapping):** Maps objects to relational databases (e.g., SQL). Examples: SQLAlchemy, Hibernate.
- **ODM (Object-Document Mapping):** Maps objects to document-based databases (e.g., MongoDB). Example: Mongoose.

---

#### **2. Explain how middleware works in Mongoose.**
**Answer:**  
Middleware in Mongoose are functions executed at specific stages of the lifecycle of a model (e.g., `save`, `find`, `update`). They are used for logging, validation, or modifying data.

**Example:**
```javascript
userSchema.pre('save', function (next) {
    console.log('Before saving user:', this);
    next();
});

userSchema.post('save', function (doc, next) {
    console.log('User saved:', doc);
    next();
});
```

---

#### **3. What are the advantages and disadvantages of using an ORM?**
**Answer:**
**Advantages:**
- Simplifies database interactions.
- Reduces boilerplate code for queries.
- Provides abstraction, increasing portability.

**Disadvantages:**
- May generate inefficient queries.
- Learning curve for mastering ORM syntax.
- Adds an additional layer, which may reduce performance in complex scenarios.