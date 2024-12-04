import { useState } from "react";
import Footer from "./features/footer/components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Footer />
    </>
  );
}

export default App;
