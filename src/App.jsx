import React from 'react'
import Header from './Components/Header';
import Import from './Components/Import';
import RightSide from './Components/RightSide';
import Upload from './Components/Upload';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      {/* Overlay */}
      <div className=" bg-black/50 absolute top-0 left-0 right-0 bottom-0" />
       <div className='w-[1120px] h-[700px] bg-white z-0 rounded-3xl'>    
      <Header />
      <Import />
      <RightSide />
      <Upload />
       </div>
    </div>
   
  );
}

export default App;
