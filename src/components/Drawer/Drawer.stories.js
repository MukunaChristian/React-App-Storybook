// Table.stories.js
import React from 'react';
import Drawer from './Drawer';

export default {
  title: 'Components/Drawer', // Set a title for your component
  component: Drawer,
};

export const DrawerProps = () => <Drawer />;

// Additional stories for your component can go here
export const AnotherStory = () => <Drawer /* additional props */ />;
