"use client";
import {
  ClearProducerName,
  NameGenerator,
  ProducerNameForm
} from "@/components";
import { useProducerName } from "@/hooks";

export default function Home() {
  const [producerName, setProducerName] = useProducerName();
  return !producerName ? (
    <ProducerNameForm onSetProducerName={setProducerName} />
  ) : (
    <>
      <NameGenerator name={producerName} />

      <ClearProducerName />
    </>
  );
}
