import { Header } from "./Header";

export default {
  title: "layouts/Header",
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    label: 'solutions',
  },
};

export const Secondary = {
  args: {
    label: 'Metalogix',
  },
};

