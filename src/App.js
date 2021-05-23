import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { IncNumber, DecNumber } from "./action/index";

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="container">
          <h1>Increment/Decrement counter</h1>
          <h4>using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement"
             onClick={()=> dispatch(DecNumber())}
            >
              <span>-</span>
            </a>
            <input
              name="quantity"
              type="text"
              className="quantity__input"
              value={myState}
            />
            <a className="quantity__plus" title="Increment"
              onClick={()=> dispatch(IncNumber())}
            >
              <span>+</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
