import { Meta, StoryFn } from "@storybook/react";
import { Button } from "../../..";


export default {
  title: "Components/Button/Button",
  component: Button,
} as Meta;

export const Default: StoryFn = ({ ...args }) => {
  return <Button {...args}>Button</Button>;
};