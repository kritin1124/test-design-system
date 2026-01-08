import { Meta, StoryFn } from "@storybook/react";
import { ButtonSplit } from "./ButtonSplit";


export default {
  title: "Components/Button/ButtonSplit",
  component: ButtonSplit,
} as Meta;

export const Default: StoryFn = ({ ...args }) => {
  return <ButtonSplit {...args}>Button</ButtonSplit>;
};