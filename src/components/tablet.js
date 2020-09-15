import React, { useState } from "react";

export default function Questions() {
  const [random, setRandom] = useState(false);
  const [showTier1, setTier1] = useState(false);
  const [showTier2, setTier2] = useState(false);
  const [tequila, findTequila] = useState(false);
  const [wine, findWine] = useState(false);
  const [shot, findShot] = useState(false);
  const [ginBrandy, findginBrandy] = useState(false);

  return (
    <div>
      <div className="questionHolder">
        <button onClick={() => setRandom(true)}>Random</button>
        <button>Virgin Drinks Only!</button>
        <button onClick={() => setTier1(!showTier1)}> Awesome Day</button>
        {showTier1 ? (
          <div>
            <button onClick={() => findTequila(true)}>Celebrate</button>
            <button onClick={() => findWine(true)}>Early Day</button>
          </div>
        ) : (
          <p />
        )}
        <button onClick={() => setTier2(!showTier2)}>Sucked</button>
        {showTier2 ? (
          <div>
            <button onClick={() => findShot(true)}>Forget</button>
            <button onClick={() => findginBrandy(true)}>Sulk</button>
          </div>
        ) : (
          <p />
        )}
      </div>
    </div>
  );
}
