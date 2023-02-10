import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Registry() {
  const [data, setData] = useState({
    name: '',
    userName: '',
    email: '',
    password: '',
    age: 0
  });

  const sendRequest = e => {
    e.preventDefault();
    const url = 'https://first-node-js-app-r.herokuapp.com/api/users/register';

    axios
      .post(url, {
        name: data.name,
        userName: data.userName,
        email: data.email,
        password: data.password,
        age: +data.age
      })
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <h1>Registry</h1>
      <form onSubmit={sendRequest}>
        <label htmlFor="name">
          {' '}name:
          <div>
            <input
              id="name"
              type="text"
              value={data.name}
              onChange={e => setData(e.target.value)}
            />
          </div>
        </label>
        <label htmlFor="userName">
          user name:
          <div>
            <input
              id="userName"
              type="text"
              value={data.userName}
              onChange={e => setData(e.target.value)}
            />
          </div>
        </label>
        <label htmlFor="email">
          email:
          <div>
            <input
              id="email"
              type="email"
              value={data.email}
              onChange={e => setData(e.target.value)}
            />
          </div>
        </label>
        <label htmlFor="password">
          password:
          <div>
            <input
              id="password"
              type="password"
              value={data.password}
              onChange={e => setData(e.target.value)}
            />
          </div>
        </label>

        <label htmlFor="age">
          age:
          <div>
            <input
              id="age"
              type="age"
              value={data.age}
              onChange={e => setData(e.target.value)}
            />
          </div>
        </label>
        <button>registry</button>
      </form>
      <div>
        <p>
          or return to &nbsp;<Link to="/">log in</Link>&nbsp; page
        </p>
      </div>
    </div>
  );
}
