import React from 'react';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
  return (
    <div
      className={`fixed px-5 inset-0 flex justify-center items-center
    transition-colors ${open ? 'visible bg-black/20' : 'invisible'}`}
      onClick={onClose}
      data-testid="modal-background"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-lg shadow p-6 overflow-auto h-[400px] transition-all max-w-md ${
          open ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
        }`}
        data-testid="modal-content"
      >
        <button
          className="absolute top-2 right-2 py-1 px-2 border border-neutral-200 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          onClick={onClose}
          data-testid="close-button"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;