```javascript
const query = { name: 'John Doe' };

// Incorrect use of $regex, causing unexpected results
db.collection('users').find(query).toArray((err, docs) => {
  console.log(docs);
});

//Correct use of $regex
db.collection('users').find({ name: { $regex: 'John Doe' } }).toArray((err, docs) => {
  console.log(docs);
}); 
```