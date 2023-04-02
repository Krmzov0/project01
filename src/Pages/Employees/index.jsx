
// import { useEffect, useState } from 'react';
// import { auth, listEmloyees } from '../../firebase';
// function Employees() {
//   const [users, setUsers] = useState([]);
  
//   useEffect(() => {
//     const usersRef = listEmloyees(auth);

//     usersRef.then((result) => {
//       setUsers(result.users);
//     }).catch((error) => {
//       console.error(error);
//     });
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.uid}>{user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Employees;