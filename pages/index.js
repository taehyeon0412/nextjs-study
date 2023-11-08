import NavBar from "@/components/NavBar";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}
