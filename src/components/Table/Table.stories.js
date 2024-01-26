// Table.stories.js
import React from 'react';
import Table from './Table';

export default {
  title: 'Components/Table', // Set a title for your component
  component: Table,
};

export const TableProps = () => <Table />;

// Additional stories for your component can go here
export const AnotherStory = () => <Table /* additional props */ />;
