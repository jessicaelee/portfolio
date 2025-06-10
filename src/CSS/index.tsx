import { useState } from "react";
import Page from "../Common/Page";
import FlexBoxExamples from "./flexbox";
import GridExamples from "./grid";

function CSSExamples() {
  const title = "CSS Examples"
  const description = <></>

  return <Page title={title} description={description}>
    <FlexBoxExamples />
    <GridExamples />
  </Page>
}

export default CSSExamples;