import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


import './App.css';


import Home from '../public/Land';
import Navbar from './navbar';
import Mash from './mash';
import Lujain from './lujain';
import Maram from './maram';




function App() {
  
  return (
     <>
       <Navbar/>
       <Canvas className='land'>
         <Suspense fallback={null}>
           <ambientLight />
           
           <OrbitControls enableZoom={false} autoRotate={true} />
           <Home />
           
           
         </Suspense>
          
         {/* cover */}
  
         <Html>
         
           <div className='cover'>
             <h1>LYMonada</h1>
             <p>Model description or additional information.</p>
             <button>TRY FOR FREE</button>


         </div>

    
         </Html>

       </Canvas>
       
       {/* project description  */}
       <div className='container'>
         <h1 className='title3'>Bring your team together</h1>

         <h2 className='des'>In a faraway place among the stars, there are three houses floating atop a celestial island.
        Each house is like a mirror, showing the personalities of their owners through the decorations outside. Inside, they're like showcases of their owners' skills and knowledge.</h2>
 
       </div>

       <Mash />
       <Lujain />
       <Maram />
       

    
     </>
  );
 }
 
 export default App;
