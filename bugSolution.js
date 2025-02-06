```javascript
// Correct use of $regex operator within the field specification
const query = { name: { $regex: 'John Doe', $options: 'i' } }; // 'i' for case-insensitive match
db.collection('users').find(query).toArray((err, docs) => {
  console.log(docs);
});
```