import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button";

export const SavedNames = () => {
  const [modalOpen, setModalOpen] = useState(false);
  console.log("modal open", modalOpen);
  return (
    <div className="">
      <Button onClick={() => setModalOpen(true)} text="Saved Loops" />
      {modalOpen && <Modal onClose={() => setModalOpen(false)}>hi</Modal>}
    </div>
  );
};
