import React from "react";
import { Redirect } from "react-router";
import Card from '../components/Card';
import { data } from "../data";
export default function Home({auth}) {
  if(auth){
   return <Redirect to='/login' />
  }
  return (
    <div className="bg-gray-500 h-screen pt-2 md:pt-10 flex justify-center item-center">
      <div className="bg-gray-500 container m-auto">
        <div className="md:grid grid-cols-2">
          {data.map(post =>{
            return <Card key={post._id} {...post}/>
          })}
        </div>
      </div>
    </div>
  );
}
