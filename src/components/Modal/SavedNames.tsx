import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "../Button";
import { useUser } from "@/context/UserContext";
import { WordIdea } from "../WordIdea";

export const SavedNames = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { userProfile } = useUser();
  return (
    <div className="">
      <Button onClick={() => setModalOpen(true)} text="Saved Loops" />
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          {userProfile?.savedNames.map((n) => (
            <WordIdea key={n} word={n} />
          ))}
        </Modal>
      )}
    </div>
  );
};
