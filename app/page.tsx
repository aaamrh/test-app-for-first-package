import Image from "next/image";
import styles from "./page.module.css";

import { TweetButton } from "@aaamrh/first-package";

export default function Home() {
  return (
    <main style={{ textAlign: "center", paddingTop: "30px" }}>
      <h1>Hi there!</h1>
      <TweetButton />
    </main>
  );
}
