"use client";
import {
  ClearProducerName,
  NameGenerator,
  ObtainProducerName,
} from "@/components";
import { OpenAIChat } from "@/components/OpenAiChat";
import { useProducerName } from "@/hooks";

export default function Quickie() {
  const [producerName, setProducerName] = useProducerName();

  return (
    <>
      <OpenAIChat />
      {!producerName ? (
        <ObtainProducerName onSetProducerName={setProducerName} />
      ) : (
        <>
          <div className="w-80 mt-4">
            <ClearProducerName />
          </div>
          <NameGenerator name={producerName} />
        </>
      )}
    </>
  );
}
