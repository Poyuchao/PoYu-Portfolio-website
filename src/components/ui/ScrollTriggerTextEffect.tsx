import React, { useRef, useState, useEffect } from 'react';
import { TextGenerateEffect } from './text-generate-effect'; // Adjust the path accordingly

type ScrollTriggerTextEffectProps = {
    words: string;
    className?: string;
};

export const ScrollTriggerTextEffect: React.FC<ScrollTriggerTextEffectProps> = ({ words, className }: ScrollTriggerTextEffectProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={className}>
            {isVisible && <TextGenerateEffect words={words} className={className} />}
        </div>
    );
};
