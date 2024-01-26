// Table.stories.js
import React from 'react';
import TransferList from './TransferList';

export default {
  title: 'Components/TransferList', // Set a title for your component
  component: TransferList,
};

export const TransferListProps = () => <TransferList />;

// Additional stories for your component can go here
export const AnotherStory = () => <TransferList /* additional props */ />;
