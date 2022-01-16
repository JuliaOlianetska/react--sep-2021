import {useState} from "react";

export default function UserDetailedInfo({user, getPosts}) {
console.log(getPosts)

  return (
      <div>
        <div className={'fullInfo'}>
          <h4>{user.id} - {user.name}</h4>
          <p>username: {user.username}</p>
          <p>email: {user.email}</p>
          <p>address: {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
          <p>phone: {user.phone}</p>
          <p>website: {user.website}</p>
          <p>company: {user.company.name}, catch phrase: {user.company.catchPhrase}, bs: {user.company.bs}</p>
        </div>

        <button onClick={()=>getPosts(user.id)}>Posts</button>

      </div>


  );
}