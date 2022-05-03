import CardHello from "components/Card/CardHello";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_COUNT } from "store/reducers/count/action";
import typeStore from "store/type";

function App() {
  const { count } = useSelector((state: typeStore) => state.count);
  const dispatch = useDispatch();
  const [useCount, setCount] = useState(count);

  useEffect(() => {
    dispatch({
      type: SET_COUNT,
      payload: {
        count: useCount,
      },
    });
  }, [useCount]);

  return (
    <div className="w-full h-screen text-center vertical">
      <header className="App-header">
        <CardHello />
      </header>
      <section className="mt-[24px]">
        Current count : {useCount}
        <br />
        <div className="mt-[24px] flex gap-[8px] justify-center">
          <button
            className="border-2 p-[4px]"
            onClick={() => setCount(useCount + 1)}
          >
            Increment +
          </button>
          <button
            className="border-2 p-[4px]"
            onClick={() => setCount(useCount - 1)}
          >
            Decrement -
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
