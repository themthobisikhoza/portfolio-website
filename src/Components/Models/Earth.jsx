/*
Auto-generated GLTF converted to React component
Modified to safely load nested nodes using primitive
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Earth(props) {
    // Load the GLTF
    const gltf = useGLTF("/Earth/earth.gltf");

    // Render the entire scene as a primitive
    return <primitive object={gltf.scene} {...props} />;
}

// Preload the GLTF for faster rendering
useGLTF.preload("/Earth/earth.gltf");
