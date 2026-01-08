import { Meta, StoryFn } from "@storybook/react";
import { Sidebar } from "../../..";

export default {
    title: "Components/Sidebar",
    component: Sidebar,
} as Meta

export const Default: StoryFn =({...args})=>{
    return <Sidebar {...args}>Sidebar</Sidebar>
}
