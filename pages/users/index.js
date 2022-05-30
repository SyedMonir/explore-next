import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {
  // For data load in React
  // State to hold my data
  // userEffect, load data and set state

  // console.log(users);
  return (
    <div>
      <h2>Inside Users total User {users?.length}</h2>

      {users.map((user) => (
        <div key={user.id}>
          <h4>
            Name: {user.name}{' '}
            <Link href={`/users/${user.id}`}>
              <button>Explore</button>
            </Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  // const res = await fetch('https://api.github.com/users');
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}
