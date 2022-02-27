import React, { useCallback, useMemo, useState } from 'react';
import './App.css';

function Swatch({ params, onClick }) {
  console.log(`Swatch rendered ${params.color}`);
  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params.color,
      }}
      onClick={onClick}
    ></div>
  );
}
/*
 memoization is an optimization technique used primarily to speed up
 computer programs by storing the results of expensive function calls and
 returning the cached result when the same inputs occur again
*/

const MemoedSwatch = React.memo(Swatch);

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState('red');

  console.log(`App rendered ${appRenderIndex}`);

  const params = useMemo(() => ({ color }), [color]);
  // const onClick = () => {};
  // https://www.youtube.com/watch?v=DEPwA3mv_R8 (24:28)
  const onClick = useCallback(() => {}, []);

  return (
    <div className="App">
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render App
        </button>
        <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
          Change Color
        </button>
      </div>
      <div>
        <MemoedSwatch params={params} onClick={onClick} />
      </div>
    </div>
  );
}

export default App;

/* big community, more packages, more frameworks, more tools, more best practice more importantly more jobs   */
