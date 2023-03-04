import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "../model/Model";

type SceneProps = {
    modelUrl: string;
};

export function Scene({ modelUrl }: SceneProps) {
    return (
        <Canvas
            camera={{
                position: [
                    0.6161005895885414, 99.09634000772243, -707.0925607051696,
                ],
                fov: 25,
            }}
        >
            <Suspense fallback={null}>
                <Model modelUrl={modelUrl} />
                <OrbitControls />
                <Environment preset="dawn" background />
            </Suspense>
        </Canvas>
    );
}
