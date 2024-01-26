// Table.stories.js
import React from 'react';
import Rating from './Rating';

export default {
  title: 'Components/Rating', // Set a title for your component
  component: Rating,
};

export const RatingProps = () => <Rating />;

// Additional stories for your component can go here
export const AnotherStory = () => <Rating /* additional props */ />;
