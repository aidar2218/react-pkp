import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';

const meta: Meta<typeof UncontrolledOnOff> = {
    component: UncontrolledOnOff,
    title: 'UncontrolledOnOff',
};

export default meta;

type Story = StoryObj<typeof UncontrolledOnOff>;

const onClickHandler = action("Mode changed")

export const OnMode = () => <UncontrolledOnOff defaultMode={true} onChange={onClickHandler} />
export const OffMode = () => <UncontrolledOnOff defaultMode={false} onChange={onClickHandler} />

