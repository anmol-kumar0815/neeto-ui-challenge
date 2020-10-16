import React from "react";
import { Pane } from "nitroui";
import NewContactForm from "./NewContactForm";

export default function NewContactPane({ showPane, setShowPane }) {
  const onClose = () => setShowPane(false);
  return (
    <Pane title="Create a new contact" isOpen={showPane} onClose={onClose}>
      <div className="p-6">
        <NewContactForm onClose={onClose} />
      </div>
    </Pane>
  );
}
