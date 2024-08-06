// src/components/Modal.tsx
import React from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg w-3/4 lg:w-1/2 text-black">
                <h2 className="text-xl font-bold mb-4">How to Use the App</h2>
                <p className="mb-4">To use this app, follow these steps:</p>
                <ol className="list-decimal list-inside mb-4">
                    <li>Enter the text you want to scan in the text area.</li>
                    <li>Click the "Go" button to start the scan.</li>
                    <li>Review the results displayed on the right side of the screen.</li>
                    <li>Click on any claim to view its detailed information and citations.</li>
                </ol>
                <p className="mb-4">
                    Each claim detected in the text is shown along with its relevant citations. You can click on a claim to expand and view more details about its citations, including links to the full sources.
                </p>
                <p>
                    If no citations are found for a claim, a message indicating "No citations found" will be displayed.
                </p>
                <button
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
