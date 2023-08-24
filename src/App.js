import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="calculator">
        <div className="output">
          <div className="output_previous">56789</div>
          <div className="output_current">7654324</div>
        </div>
        <div className="buttons_wrapper">
          <div className="button button_span2">AC</div>
          <div className="button">DEL</div>
          <div className="button">+</div>
          <div className="button">7</div>
          <div className="button">8</div>
          <div className="button">9</div>
          <div className="button">-</div>
          <div className="button">4</div>
          <div className="button">5</div>
          <div className="button">6</div>
          <div className="button">*</div>
          <div className="button">1</div>
          <div className="button">2</div>
          <div className="button">3</div>
          <div className="button">/</div>
          <div className="button">.</div>
          <div className="button">0</div>
          <div className="button button_span2">=</div>
        </div>
      </div>
    </div>
  );
}

export default App;
