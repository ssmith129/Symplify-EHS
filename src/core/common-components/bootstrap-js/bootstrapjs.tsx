"use client"

import { useEffect } from "react"

export default function BootstrapJs(){
    useEffect(() => {
        // Load Bootstrap and make it available on window
        const loadBootstrap = async () => {
            try {
                // Import Bootstrap directly from the package
                const bootstrap = await import('bootstrap');
                
                // Attach to window for components that expect window.bootstrap
                if (typeof window !== 'undefined') {
                    (window as any).bootstrap = bootstrap;
                }
            } catch (error) {
                console.error('Failed to load Bootstrap:', error);
            }
        };
        
        loadBootstrap();
    }, []);
    return null
}