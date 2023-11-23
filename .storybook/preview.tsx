// .storybook/preview.tsx

import { MantineProvider } from '@mantine/core';
// import theme object you've exported in previous step
import React from 'react';

// Create a wrapper component that will contain all your providers.
// Usually you should render all providers in this component:
// MantineProvider, DatesProvider, Notifications, Spotlight, etc.
function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    
    <MantineProvider >
      {props.children}
    </MantineProvider>
  );
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];