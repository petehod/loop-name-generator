import React from "react";
import { Header } from "./Header";
import MainContentFormWrapper from "./MainContentFormWrapper";
import MainContentWrapper from "./MainContentWrapper";
import { ProducerNameForm } from "./ProducerNameForm";
import { useProducerName } from "@/hooks";

export default function NoProducerYet() {
  const [_, setProducerName] = useProducerName();

  return (
    <>
      <Header />
      <MainContentWrapper>
        <MainContentFormWrapper>
          <ProducerNameForm onSetProducerName={setProducerName} />
        </MainContentFormWrapper>
      </MainContentWrapper>
    </>
  );
}
