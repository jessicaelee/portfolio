import { useState } from "react";
import Page from "../Common/Page";
import FlexBoxExamples from "./flexbox";

function CSSExamples() {
  const title = "CSS Examples"
  const description = <></>

  return <Page title={title} description={description}>
    <FlexBoxExamples />

  </Page>
}

export default CSSExamples;