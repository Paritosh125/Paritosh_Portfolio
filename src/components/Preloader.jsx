import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/juggling-cleaned.json";

const Preloader = ({ onFinish }) => {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Start fade-out after 2.5s
        const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
        // Trigger onFinish after fade completes
        const finishTimer = setTimeout(() => onFinish(), 3200);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(finishTimer);
        };
    }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-[9999] bg-[#0f0f0f] backdrop-blur-sm flex items-center justify-center transition-opacity duration-700 ease-in-out ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
        >
            <div className="w-40 md:w-56">
                <Lottie animationData={animationData} loop autoplay />
            </div>
        </div>
    );
};

export default Preloader;
