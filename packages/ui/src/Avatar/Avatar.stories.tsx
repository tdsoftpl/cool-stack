import React from "react";
import type {ComponentStory, ComponentMeta} from "@storybook/react";
import Avatar from "./Avatar";
import {avatarPropsMock} from "./Avatar.mocks";

export default {
    title: "Avatar",
    component: Avatar
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = avatarPropsMock;

export const NoImageSource = Template.bind({});
NoImageSource.args = {...avatarPropsMock, src: undefined};
