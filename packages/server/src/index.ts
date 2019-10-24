import app from './app';
// import db from './db';

const { PORT = 4444 } = process.env;

app.listen(PORT);

console.log(`Server is running on ${PORT} port in ${app.env} mode`);
// db.init()
//   .then(() => {
//     app.listen(PORT);

//     console.log(`Server is running on ${PORT} port in ${app.env} mode`);
//   })
//   .catch(err => console.error(err));
