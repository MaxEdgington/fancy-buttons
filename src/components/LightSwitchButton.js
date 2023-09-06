import React from "react";

function LightSwitchButton(props) {
  const { light, switchLight } = props;
  const handleClick = () => switchLight();
  return (
    <button onClick={switchLight} className="LightSwitchButton">
      {light === "on" && (
        <span className="on">
          <i>💡</i> I'm on!
        </span>
      )}
      {props.light === "off" && (
        <span className="off">
          <i>💡</i> I'm off!
        </span>
      )}
    </button>
  );
}

export default LightSwitchButton;
