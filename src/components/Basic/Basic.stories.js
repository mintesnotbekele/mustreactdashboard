import { Basic } from ".";

export default {
  title: "Components/Basic",
  component: Basic,
  argTypes: {
    property1: {
      options: ["waiting", "schedule", "refusal", "approval", "check"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "waiting",
    className: {},
    text: "대기",
    text1: "승인",
    text2: "거부",
  },
};
