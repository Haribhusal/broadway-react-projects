import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

// https://jsonplaceholder.typicode.com/posts

function App() {

  const [users, setUsers] = useState([]);
  const[showUsers, setShowUsers] = useState(2)

  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    // console.log(response.data);
    setUsers(response.data)
    console.log(response.data)
  })

  // .catch(function (error) {
  //   console.log(error);
  // })
  // .finally(function () {
  //   // always executed
  // });

  return (
    <div className="App">
     {/* {articles.slice(0,showPosts).map((item) => (
      <div className='post py-5'>
        <h3 className='text-3xl font-bold mb-3 text-cyan-400'>{item.title}</h3>
        <p>{item.body}</p>
        <ul className='mt-3 text-slate-600'>
          <li className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
{item.userId}



          </li>
        </ul>
      </div>
     ))} */}

   

     <hr/>
     <ul role="list" class="p-6 divide-y divide-slate-200">
     {users.slice(0,showUsers).map((person)=> (
    <li class="flex py-4 first:pt-0 last:pb-0">
      <img class="h-10 w-10 rounded-full" src="{person.imageUrl}" alt="" />
      <div class="ml-3 overflow-hidden">
        <p class="text-sm font-medium text-slate-900">{person.name} - {person.address.city}</p>
        <p class="text-sm text-slate-500 truncate">{person.email} - {person.company.name}</p>
      </div>
    </li>
     ))}
       <button className='bg-blue-800 px-10 py-4 text-white rounded hover:bg-blue-900 hover:drop-shadow-lg' onClick={()=> setShowUsers(showUsers+2)}>
      Load More
     </button>
</ul>
    </div>
  );
}

export default App;
