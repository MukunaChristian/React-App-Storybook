import { Button } from './Button';

export default{
    title: 'components/Button',
    component: Button,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
    },

}


export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    size: 'medium',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};;