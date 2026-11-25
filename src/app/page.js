// import {useState} from 'react';

// let students  = [
//   { id: 1, name: 'John Doe', points: 10 },
//   { id: 2, name: 'Jane Smith', points: 20 },
//   { id: 3, name: 'Alice Johnson', points: 15 },
// ];


// export async function addStudent(formData) {
//   const name = formData.get('name');
//   const points = formData.get('points');      
// }






// export default function Home() {
// return (
//     <main>
//     <h1>All Points</h1>
//       {events.map((event) => (
//        <div key={event.id}>
//                   <h2>{event.name}</h2>
//           <p>Points: {event.points}</p>

//           <Link href={`/event/${event.id}`}>
//             View Event
//           </Link>

//           <hr />
//         </div>
//       ))}
//     </main>
//   );
// }








import login from './action';

export default function Login(){
 const cookieStore = cookies();
 const role = cookieStore.get('role')?.value;
 console.log(username);

  return(
    <>
    <h1>
      Login Page
    </h1>
    <form action={login} method="POST">
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" required />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required />
      <br />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
</>
  )
}