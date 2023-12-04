/*
Crea una catena di Promises per simulare un'operazione asincrona in più fasi.

- La prima Promise recupera i dati dell'utente { id: 1, name: 'John' }. 
- La seconda Promise recupera i post dell'utente ['Post 1', 'Post 2', 'Post 3'].

- Infine, chiama le funzioni per recuperare e stampare in console il nome dell'utente e i titoli dei post.
*/

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = { id: 1, name: 'John' };
      resolve(userData);
    }, 2000);
  })
};

function fetchUserPosts(userId, userName) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userPosts = ['Post 1', 'Post 2', 'Post 3'];
      if (userId == 1 && userName == 'John') {
        resolve(userPosts);
      } else {
        reject(new Error('Ko'));
      }
    }, 2000);
  })
};

fetchUserData().then(user => {
  console.log(user.name);
  return fetchUserPosts(user.id, user.name);
}).then(posts => {
  console.log(posts);
}).catch(error => {
  console.log(error);
});