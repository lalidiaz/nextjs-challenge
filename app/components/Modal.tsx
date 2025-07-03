"use client";

import Button from "./Button";

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  confirmDelete?: () => void;
  title?: string;
  message?: string;
}

export default function Modal({
  open,
  onClose,
  confirmDelete,
  title = "Confirm Delete",
  message = "Are you sure you want to delete this post? This action cannot be undone.",
}: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog_label"
      aria-describedby="dialog_desc"
    >
      <div
        className="absolute inset-0 bg-gray bg-opacity-100 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative border border-zinc-300 bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md mx-4">
        <h3 className="text-lg font-semibold text-white mb-2" id="dialog_label">
          {title}
        </h3>
        <p className="text-gray-300 mb-6" id="dialog_desc">
          {message}
        </p>

        <div className="flex justify-end space-x-3">
          <Button
            onClick={onClose}
            type="button"
            className="text-gray-300 bg-gray-700 rounded-md hover:bg-gray-600"
            ariaLabel="Cancel"
            label="Cancel"
          />

          <Button
            onClick={confirmDelete}
            type="button"
            className="bg-red-700 text-white hover:bg-red-600"
            ariaLabel="Confirm-delete"
            label="Delete"
          />
        </div>
      </div>
    </div>
  );
}
