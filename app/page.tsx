import Image from "next/image";
import Link from "next/link";
'use client'
import {Canvas} from "@react-three/fiber";
import {OrbitControls, useGLTF} from "@react-three/drei";
import {Model} from "./components/utilities"
import {Mainimage} from "./components/utilities"
import {Assaultobject} from "./components/utilities"
import {Revolverobject} from "./components/utilities"
export default function Page(){
  return (
    

    <div>
      <div >
      <img src="./models/gunwithsand.png" alt="guns" className="top" />
      </div>
   
       <p className="title"><b>NUTTER TOOLS</b></p>
       <br />
       <div className="card">
       <div className="bigcard">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
  

            <Canvas>
              <ambientLight/>
              <directionalLight intensity={0.5}/>
              <OrbitControls enableZoom={false}/>
              <Model/>
            </Canvas>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Pistolero</div>
                <p className="text-gray-700 text-base">
                <b>Description :</b>   buy them guns.
                </p>
            </div>
 
        </div>
      

    

      </div>
      <div className="shotguncard">
        <div >
  

            <Canvas>
              <ambientLight/>
              <directionalLight intensity={0.5}/>
              <OrbitControls enableZoom={false}/>
              <Mainimage/>
            </Canvas>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">shotgun</div>
                <p className="text-gray-700 text-base">
                <b>Description :</b>   buy them guns.
                </p>
            </div>
 
        </div>
        
      

    

      </div>
      <div className="assaultguncard">
        <div >
  

            <Canvas>
              <ambientLight/>
              <directionalLight intensity={0.5}/>
              <OrbitControls enableZoom={false}/>
              <Assaultobject/>
            </Canvas>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">assaultrifle</div>
                <p className="text-gray-700 text-base">
                <b>Description :</b>   buy them guns.
                </p>
            </div>
 
        </div>
        
      

    

      </div>
      <div className="revolverguncard">
        <div >
  

            <Canvas>
              <ambientLight/>
              <directionalLight intensity={0.5}/>
              <OrbitControls enableZoom={false}/>
              <Revolverobject/>
            </Canvas>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">revolverrifle</div>
                <p className="text-gray-700 text-base">
                <b>Description :</b>   buy them guns.
                </p>
            </div>
 
        </div>
        
      

    

      </div>
      

       </div>
       
      
      
    </div>
  );
}
