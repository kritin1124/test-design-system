import { Meta, StoryFn } from "@storybook/react";

import { Button } from "../../src";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

export const Default: StoryFn = ({ ...args }) => {
  return <Button {...args}>Button</Button>;
};