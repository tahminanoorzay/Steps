const messages = [
  "Learn React 🔯",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  function pShow() {
    alert("Previous Show");
  }
  function nShow() {
    alert("Next Show");
  }
  return (
    <div>
      <div className="steps">
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <p className="message">Steps : {messages[0]}</p>
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={pShow}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={nShow}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
