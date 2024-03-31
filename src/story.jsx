import { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera, ContactShadows } from '@react-three/drei';
import { useThree, useFrame } from '@react-three/fiber';
import { useEffect } from 'react';
import { Html } from '@react-three/drei';
import { BoxGeometry, MeshBasicMaterial } from 'three';


 
import './App.css';
import '../main.js'



function App() {
  
  return (
     <>
       <Canvas className='story2'>
       
      
        
         <Suspense fallback={null}>
         </Suspense>


         
       </Canvas>
      
      
       

    
     </>
  );
 }
 
 export default App;
