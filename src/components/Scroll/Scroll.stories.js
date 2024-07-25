import { Scroll } from ".";

export default {
  title: "Components/Scroll",
  component: Scroll,
  argTypes: {
    property1: {
      options: ["width", "lenght"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "width",
    className: {},
    rectangleClassName: {},
  },
};
