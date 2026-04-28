import React from "react";
import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";

// TODO: Use useState to manage counter
// TODO: Use useEffect to show a message when counter > 5
// TODO: Use useEffect to reset counter to 0 if it becomes negative
// TODO: Pass counter value to CounterDisplay as a prop
// TODO: Pass increment/decrement functions to CounterControls as props
function CounterPage() {
  return (
    <div>
      <CounterDisplay />
      <CounterControls />
      {/* TODO: Show a message when counter > 5 */}
    </div>
  );
}

export default CounterPage;