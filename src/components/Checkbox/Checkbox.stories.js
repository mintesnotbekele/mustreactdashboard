import { Checkbox } from ".";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    type: {
      options: ["checked", "indeterminate", "unchecked"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "focus", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "checked",
    stateProp: "hover",
    label: true,
    dark: true,
    typeUncheckedStateClassName: {},
  },
};
