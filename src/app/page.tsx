"use client";
import {
  ClearProducerName,
  NameGenerator,
  ProducerNameForm
} from "@/components";
import { Header } from "@/components/Header";
import { useProducerName } from "@/hooks";

export default function Home() {
  const [producerName, setProducerName] = useProducerName();
  return !producerName ? (
    <>
      <Header />
      <ProducerNameForm onSetProducerName={setProducerName} />
    </>
  ) : (
    <>
      <NameGenerator name={producerName} />
    </>
  );
}
