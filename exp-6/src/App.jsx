import { useState } from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: "" });

  return (
    <div>
      {step === 1 && (
        <Step1 next={() => setStep(2)} data={data} setData={setData} />
      )}
      {step === 2 && (
        <Step2 prev={() => setStep(1)} data={data} />
      )}
    </div>
  );
}

export default App;