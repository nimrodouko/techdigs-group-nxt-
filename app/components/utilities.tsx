
import { useGLTF } from '@react-three/drei';


export  function Model(){
  const {scene} = useGLTF("models/pistol.glb");
  
  return (<primitive object={scene} scale={1.5}/>
  
  );
};
export  function Mainimage(){
  const {scene} = useGLTF("models/shotgun.glb");
  return (<primitive object={scene} scale={1.5}/>)
}

export function Assaultobject(){
    const {scene} = useGLTF("models/assault.glb");
    return(<primitive object={scene} scale={1.5}/>)
}
export function Revolverobject(){
    const {scene} = useGLTF("models/Revolver.glb");
    return(<primitive object={scene} scale={1.5}/>)
}