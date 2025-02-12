import { useState } from "react";

const messages = [
  "Learn React 🔯",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (steps > 1) {
      setSteps(steps - 1);
    }
  }
  function handleNext() {
    if (steps < 3) {
      setSteps(steps + 1);
    }
  }
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        X
      </button>
      {isOpen && (
        <div>
          <div className="steps">
            <div className="numbers">
              <div className={steps >= 1 ? "active" : ""}>1</div>
              <div className={steps >= 2 ? "active" : ""}>2</div>
              <div className={steps >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Steps {steps} : {messages[steps - 1]}
            </p>
            <div className="buttons">
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
