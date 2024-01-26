import { Button } from './Button';

export default{
    title: 'components/Button',
    component: Button,
    parameters: {
      layout: 'centered',
      controls: {
        presetColors: [{ color: '#ff4785', title: 'Coral' }, 'rgba(0, 159, 183, 1)', '#fe4a49'],
      },
    },
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      variant: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' },
      },
    },

}


export const Primary = {
  args: {
    primary: true,
    label: 'Button',
    variant: 'primary',
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