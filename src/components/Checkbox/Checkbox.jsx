/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { TypeCheckedStateDefaultLabelFalseDarkNo } from "../../icons/TypeCheckedStateDefaultLabelFalseDarkNo";
import { TypeCheckedStateFocusLabelFalseDarkNo } from "../../icons/TypeCheckedStateFocusLabelFalseDarkNo";
import { TypeCheckedStateHoverLabelFalseDarkNo } from "../../icons/TypeCheckedStateHoverLabelFalseDarkNo";
import { TypeUncheckedStateHoverLabelFalseDarkNo } from "../../icons/TypeUncheckedStateHoverLabelFalseDarkNo";
import "./style.css";

export const Checkbox = ({ type, stateProp, label, dark, typeUncheckedStateClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    type: type || "unchecked",
    state: stateProp || "default",
    label: label || false,
    dark: dark || false,
  });

  return (
    <>
      {(state.type === "indeterminate" ||
        (state.state === "default" && state.type === "unchecked") ||
        (state.state === "focus" && state.type === "unchecked")) && (
        <div
          className={`checkbox ${state.type} ${state.state} ${typeUncheckedStateClassName}`}
          onMouseEnter={() => {
            dispatch("mouse_enter");
          }}
          onMouseLeave={() => {
            dispatch("mouse_leave");
          }}
          onClick={() => {
            dispatch("click");
          }}
        >
          {state.type === "indeterminate" && <div className="div" />}
        </div>
      )}

      {state.state === "hover" && state.type === "unchecked" && (
        <TypeUncheckedStateHoverLabelFalseDarkNo className="instance-node" />
      )}

      {state.state === "default" && state.type === "checked" && (
        <TypeCheckedStateDefaultLabelFalseDarkNo className="type-checked-state" />
      )}

      {state.type === "checked" && state.state === "focus" && (
        <TypeCheckedStateFocusLabelFalseDarkNo className="type-checked-state-focus-label-false-dark-no" />
      )}

      {state.type === "checked" && state.state === "hover" && (
        <TypeCheckedStateHoverLabelFalseDarkNo className="instance-node" />
      )}
    </>
  );
};

function reducer(state, action) {
  if (state.dark === false && state.label === false && state.state === "default" && state.type === "unchecked") {
    switch (action) {
      case "mouse_enter":
        return {
          dark: false,
          label: false,
          state: "hover",
          type: "unchecked",
        };
    }
  }

  if (state.dark === false && state.label === false && state.state === "hover" && state.type === "unchecked") {
    switch (action) {
      case "mouse_leave":
        return {
          dark: false,
          label: false,
          state: "default",
          type: "unchecked",
        };
    }
  }

  if (state.dark === false && state.label === false && state.state === "focus" && state.type === "unchecked") {
    switch (action) {
      case "click":
        return {
          dark: false,
          label: false,
          state: "default",
          type: "checked",
        };
    }
  }

  return state;
}

Checkbox.propTypes = {
  type: PropTypes.oneOf(["checked", "indeterminate", "unchecked"]),
  stateProp: PropTypes.oneOf(["hover", "focus", "default"]),
  label: PropTypes.bool,
  dark: PropTypes.bool,
};
