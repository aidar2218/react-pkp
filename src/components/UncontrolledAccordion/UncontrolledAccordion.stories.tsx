import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';

const meta: Meta<typeof UncontrolledAccordion> = {
    component: UncontrolledAccordion,
    title: 'UncontrolledAccordion',
};

export default meta;

type Story = StoryObj<typeof UncontrolledAccordion>;

const onChangeHandler = action("onChange was clicked")

export const ModeChanging: Story = {
    args: {
        titleValue: "Uncontrolled Accordion",
    }
}