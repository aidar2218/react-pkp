import type {Meta, StoryObj} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Rating, RatingValueType} from './Rating';
import {useState} from "react";

const meta: Meta<typeof Rating> = {
    component: Rating,
    title: 'Rating',
};

export default meta;

type Story = StoryObj<typeof Rating>;

const onClickHandler = action("Star was clicked")

export const EmptyRating: Story = {
    args: {
        value: 0,
        callback: onClickHandler
    }
}

export const Rating1 = () => <Rating value={1} callback={onClickHandler} />;
export const Rating2 = () => <Rating value={2} callback={onClickHandler} />;
export const Rating3 = () => <Rating value={3} callback={onClickHandler} />;
export const Rating4 = () => <Rating value={4} callback={onClickHandler} />;
export const Rating5 = () => <Rating value={5} callback={onClickHandler} />;

export const RatingChanging = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);

    return (
        <Rating value={ratingValue} callback={setRatingValue} />
    )
}

