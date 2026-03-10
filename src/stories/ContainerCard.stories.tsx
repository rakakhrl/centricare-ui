import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCircleCheck, IconPencilCheck, IconTrashFilled } from '@tabler/icons-react';
import { Text, ThemeIcon } from '@mantine/core';
import { ContainerCard } from '../../lib/main';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Block/ContainerCard',
  component: ContainerCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ContainerCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Paragraph: Story = {
  args: {
    title: 'Paragraph Variant',
    buttonLabel: 'Open detail',
    onButtonClick: () => {
      alert('clicked!');
    },
    variant: 'paragraph',
    data: 'lorem ipsum',
  },
};

export const List: Story = {
  args: {
    title: 'List Variant',
    buttonLabel: 'Open detail',
    onButtonClick: () => {
      alert('clicked!');
    },
    variant: 'list',
    data: [
      {
        icon: (
          <ThemeIcon color="teal" size={18} radius="xl">
            <IconCircleCheck size={12} />
          </ThemeIcon>
        ),
        title: 'List 1',
      },
      {
        icon: (
          <ThemeIcon color="teal" size={18} radius="xl">
            <IconCircleCheck size={12} />
          </ThemeIcon>
        ),
        title: 'List 2',
      },
      {
        icon: (
          <ThemeIcon color="teal" size={18} radius="xl">
            <IconCircleCheck size={12} />
          </ThemeIcon>
        ),
        title: 'List 3',
      },
    ],
  },
};

export const Timeline: Story = {
  args: {
    title: 'Timeline Variant',
    buttonLabel: 'Open detail',
    onButtonClick: () => {
      alert('clicked!');
    },
    variant: 'timeline',
    data: [
      {
        icon: (
          <ThemeIcon color="red" size={18} radius="xl">
            <IconTrashFilled size={12} />
          </ThemeIcon>
        ),
        title: "You've deleted something!",
        description: 'You deleted this information',
        timestamp: 'Just now',
      },
      {
        icon: (
          <ThemeIcon color="blue" size={18} radius="xl">
            <IconPencilCheck size={12} />
          </ThemeIcon>
        ),
        title: "You've updated something!",
        description: 'You updated some information',
        timestamp: '4 hours ago',
      },
      {
        icon: (
          <ThemeIcon color="teal" size={18} radius="xl">
            <IconCircleCheck size={12} />
          </ThemeIcon>
        ),
        title: "You've created something!",
        description: 'You created some information',
        timestamp: '3 days ago',
      },
    ],
  },
};

export const Table: Story = {
  args: {
    title: 'Result',
    buttonLabel: '+',
    onButtonClick: () => {
      alert('clicked!');
    },
    variant: 'table',
    data: {
      columns: ['ID', 'Test', 'Result', 'Flag'],
      rows: [
        {
          id: 1,
          test: 'LDL Cholesterol',
          result: '112 mg/dL',
          flag: (
            <Text fw="bold" c="red">
              HIGH
            </Text>
          ),
        },
        {
          id: 2,
          test: 'Creatinine',
          result: '0.9 mg/dL',
          flag: (
            <Text fw="bold" c="green">
              LOW
            </Text>
          ),
        },
        {
          id: 3,
          test: 'HbA1c',
          result: '7.1 %',
          flag: (
            <Text fw="bold" c="red">
              HIGH
            </Text>
          ),
        },
      ],
    },
  },
};

export const Datarow: Story = {
  args: {
    title: 'User information',
    variant: 'datarow',
    data: [
      {
        title: 'Name',
        description: 'Raka Khairil Azhar',
      },
      {
        title: 'Gender',
        description: 'Male',
      },
      {
        title: 'Address',
        description: 'Jl. Pedurenan Jaya No. 25, RT 001 RW 011, Planet Bekasi, Indonesia',
      },
    ],
  },
};

export const WithoutButton: Story = {
  args: {
    title: 'Without Button Variant',
    withButton: false,
    variant: 'paragraph',
    data: 'lorem ipsum',
  },
};

export const Empty: Story = {
  args: {
    title: 'Empty Variant',
    buttonLabel: 'Open detail',
    onButtonClick: () => {
      alert('clicked!');
    },
    variant: 'paragraph',
  },
};
