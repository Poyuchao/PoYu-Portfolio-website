
declare module 'react-text-rotator' {
    import { ComponentType } from 'react';

    interface TextRotatorProps {
        content: Array<{ text: string; className?: string }>;
        time?: number;
        startDelay?: number;
    }

    const TextRotator: ComponentType<TextRotatorProps>;
    export default TextRotator;
}
