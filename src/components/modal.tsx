"use client";

import { useModalStore } from "@/store/useModelStore";

export const Modal = () => {
  const { isOpen, content, closeModal } = useModalStore();

  if (!isOpen) return null; // hide when closed

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-black/50" onClick={closeModal} />

      {/* Modal */}
      <div
        className="
      fixed z-50 top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
      w-[90%] max-w-md
      rounded-lg border border-border
      bg-background text-foreground
      shadow-lg
      p-6
    "
      >
        {/* Content */}
        <div className="text-sm leading-relaxed">{content}</div>

        {/* Actions */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={closeModal}
            className="
          inline-flex items-center justify-center
          rounded-md px-4 py-2 text-sm font-medium
          bg-primary text-primary-foreground
          hover:bg-primary/90
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-ring
          focus-visible:ring-offset-2
          ring-offset-background
        "
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};
