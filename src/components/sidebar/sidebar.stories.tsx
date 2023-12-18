import React from "react";
import SideMenu from './sidebar';
import Sidebar from "./sidebar";

export default {
    children: '',
    title: 'Component/SideMenu',
    component: SideMenu,
};

const Template = (args: any) => {
    return (
        <Sidebar {...args} />
    )
};

const props = {
    defaultProps: () => ({
    }),
};

export const SideMenuStory: any = Template.bind({});
const defaultProps = props.defaultProps();
SideMenuStory.storyName = 'SideMenu';
SideMenuStory.args = {
    ...defaultProps,
};