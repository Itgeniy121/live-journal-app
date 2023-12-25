import {Meta, StoryFn} from "@storybook/react";
import MyButton from "./MyButton"

export default{
    title: "Button",
    component: MyButton,
} as Meta

const Template: StoryFn = (args: any) => <MyButton {...args}/>

export const BigButton = Template.bind({})

BigButton.args = {
children: 'xyui',
size: '50px',
}
export const MediumButton = Template.bind({})

MediumButton.args = {
children: 'xyui',
size: '30px',
}
export const SmallButton = Template.bind({})

SmallButton.args = {
children: 'xyui',
size: '20px',
}
export const ExtraButton = Template.bind({})

ExtraButton.args = {
children: 'xyui',
size: '70px',
}
