import {useEffect, useState, useCallback, RefObject} from "react";

type Props = {
    containerRef: RefObject<HTMLDivElement | null>;
};

const Lightbox = ({containerRef}: Props) => {
    const [images, setImages] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const open = useCallback((index: number) => {
        setCurrentIndex(index);
        setIsOpen(true);
    }, []);

    const close = useCallback(() => {
        setIsOpen(false);
    }, []);

    const prev = useCallback(() => {
        setCurrentIndex(i => (i > 0 ? i - 1 : images.length - 1));
    }, [images.length]);

    const next = useCallback(() => {
        setCurrentIndex(i => (i < images.length - 1 ? i + 1 : 0));
    }, [images.length]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const imgElements = container.querySelectorAll<HTMLImageElement>(".gallery img");
        const srcs = Array.from(imgElements).map(img => img.src);
        setImages(srcs);

        const handlers = Array.from(imgElements).map((img, index) => {
            const handler = () => open(index);
            img.addEventListener("click", handler);
            return {img, handler};
        });

        return () => {
            handlers.forEach(({img, handler}) => {
                img.removeEventListener("click", handler);
            });
        };
    }, [containerRef, open]);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") close();
            else if (e.key === "ArrowLeft") prev();
            else if (e.key === "ArrowRight") next();
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, close, prev, next]);

    if (!isOpen || images.length === 0) return null;

    return (
        <div className="lightbox-overlay" onClick={close}>
            <button className="lightbox-close" onClick={close} aria-label="Zavřít">
                &times;
            </button>

            {images.length > 1 && (
                <>
                    <button
                        className="lightbox-nav lightbox-prev"
                        onClick={e => { e.stopPropagation(); prev(); }}
                        aria-label="Předchozí"
                    >
                        &#8249;
                    </button>
                    <button
                        className="lightbox-nav lightbox-next"
                        onClick={e => { e.stopPropagation(); next(); }}
                        aria-label="Další"
                    >
                        &#8250;
                    </button>
                </>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="lightbox-image"
                src={images[currentIndex]}
                alt="Zvětšený obrázek"
                onClick={e => e.stopPropagation()}
            />

            <div className="lightbox-counter">
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
};

export default Lightbox;
