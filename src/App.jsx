import React from 'react'
import Header from './Components/Header';

import Dropdown from './Components/Left /Dropdown';
import Elapsed from './Components/Left /Elapsed';
import Upload  from './Components/Left /Upload';
import Tolerance from './Components/Left /Tolerance';

import Questions from './Components/Right/Questions';
import TestingCenter from './Components/Right/TestingCenter';
import Import from './Components/Left /Import';



function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* Overlay */}
      <div className=" bg-black/50 absolute top-0 left-0 right-0 bottom-0" />
       <div className='w-[1270px] h-[800px] bg-white z-0 rounded-3xl'>    
      <Header />  
      <Dropdown />
      <Upload />
      <Elapsed />
      <Tolerance />
      <Import />
      <Questions />
      <TestingCenter />
       </div>
    </div>
   
  );
}

export default App;
