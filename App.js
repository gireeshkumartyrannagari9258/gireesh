import { useState } from 'react';

import './App.css';

function App() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [facing, setFacing] = useState(null);
  const [position, setPosition] = useState('');

  const place = (x, y, facing) => {
    setX(x);
    setY(y);
    setFacing(facing);
    setPosition(`${x},${y},${facing}`);
  };

  const move = () => {
    switch (facing) {
      case 'NORTH': setY(y => Math.min(y + 1, 4)); break;
      case 'EAST': setX(x => Math.min(x + 1, 4)); break;
      case 'SOUTH': setY(y => Math.max(y - 1, 0)); break;
      case 'WEST': setX(x => Math.max(x - 1, 0)); break;
      default: break;
    }
    setPosition(`${x},${y},${facing}`);
  };

  const left = () => {
    setFacing(facing => {
      const directions = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
      return directions[(directions.indexOf(facing) + 1) % 4];
    });
    setPosition(`${x},${y},${facing}`);
  };

  const right = () => {
    setFacing(facing => {
      const directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
      return directions[(directions.indexOf(facing) + 1) % 4];
    });
    setPosition(`${x},${y},${facing}`);
  };

  return (
    <div>
      <div>Position: {position}</div>
      <button onClick={() => place(0, 0, 'NORTH')}>Place Robot</button>
      <button onClick={move}>Move</button>
      <button onClick={left}>Left</button>
      <button onClick={right}>Right</button>
    </div>
  );

}

export default App;
