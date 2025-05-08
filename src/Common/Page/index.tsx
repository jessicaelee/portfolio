import React, { ReactNode } from "react";

import styles from "./Page.module.scss"

type PageProps = {
  title: string;
  description: string | ReactNode;
  children?: ReactNode;
}

function Page({ title, description, children }: PageProps) {

  return (<div className={styles.pageContainer}>
    <h1>{title}</h1>
    <div>{description}</div>
    <div>
      {children}
    </div>
  </div>)
};

export default Page;