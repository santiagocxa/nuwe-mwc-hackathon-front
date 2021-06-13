import React from 'react';
import ItemForm from './ItemForm';
import '../assets/styles/Join.css'

const Join = () => {
  const data={
    title: 'Join the community :)',
    description: 'to get started, tell us which account you would like to open',
    display:true
  }
  return (
    <div className='Join'>
      <ItemForm data={data} />
    </div>
  );
};
export default Join;
