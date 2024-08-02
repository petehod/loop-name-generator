"use client";
import {
  ClearProducerName,
  NameGenerator,
  ProducerNameForm
} from "@/components";
import { useProducerName } from "@/hooks";

export default function Quickie() {
  const [producerName, setProducerName] = useProducerName();
  return (
    <>
      {!producerName ? (
        <div className="bg-dark p-8 rounded-lg">
          <ProducerNameForm onSetProducerName={setProducerName} />
        </div>
      ) : (
        <div className="flex flex-col justify-start items-start">
          <NameGenerator name={producerName} />
          <div className="w-80 mt-4">
            <ClearProducerName />
          </div>
        </div>
      )}
    </>
  );
}
