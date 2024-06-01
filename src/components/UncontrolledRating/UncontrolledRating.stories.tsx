import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';

const meta: Meta<typeof UncontrolledRating> = {
    component: UncontrolledRating,
    title: 'UncontrolledRating',
};

export default meta;

type Story = StoryObj<typeof UncontrolledRating>;

const onClickHandler = action(`Rating changed`);

export const Rating0 = () => <UncontrolledRating />
export const Rating1 = () => <UncontrolledRating defaultValue={1} callback={onClickHandler} />
export const Rating2 = () => <UncontrolledRating defaultValue={2} callback={onClickHandler} />
export const Rating3 = () => <UncontrolledRating defaultValue={3} callback={onClickHandler} />
export const Rating4 = () => <UncontrolledRating defaultValue={4} callback={onClickHandler} />
export const Rating5 = () => <UncontrolledRating defaultValue={5} callback={onClickHandler} />

