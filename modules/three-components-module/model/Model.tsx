import React from "react";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { Group, MeshStandardMaterial } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

type ModelProps = {
    modelUrl: string;
};

export function Model({ modelUrl }: ModelProps) {
    const group = useRef<Group>(null);

    const { nodes } = useLoader(GLTFLoader, modelUrl);

    const temp = nodes.ship_model as any;

    console.log(nodes);

    return (
        <group ref={group} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={temp.geometry}
                material={new MeshStandardMaterial()}
                position={[0, 0, 0]}
                rotation={[0, 0, Math.PI]}
                scale={-0.04}
            />
        </group>
    );
}
