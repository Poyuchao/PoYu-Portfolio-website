import { useEffect, useRef } from "react";
import { ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const modalContent = (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={onClose} // Add this to close the modal when clicking outside
        >
            <div
                className="relative bg-white p-6 rounded-md shadow-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
                ref={modalRef}
                style={{ width: "80%", maxWidth: "800px", height: "600px" }}
            >
                <button
                    className="absolute top-2 right-2 text-black"
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                <div id="modal-title" className="sr-only">
                    Modal Content
                </div>
                {children}
            </div>
        </div>
    );

    // The Modal component uses ReactDOM.createPortal to render the modal content into document.body, 
    // ensuring that the modal is not affected by the DOM hierarchy of the parent components.

    return ReactDOM.createPortal(modalContent, document.body);
}
