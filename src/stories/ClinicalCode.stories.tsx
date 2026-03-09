import { Meta, StoryObj } from '@storybook/react-vite';
import { ClinicalCode } from '../../lib/main';

const meta = {
  title: 'Block/ClinicalCode',
  component: ClinicalCode,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ClinicalCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ICD9: Story = {
  args: {
    codeSystem: 'ICD-9',
    code: 'E11.9',
  },
};
export const ICD10: Story = {
  args: {
    codeSystem: 'ICD-10',
    code: 'E11.9',
  },
};
export const LOINC: Story = {
  args: {
    codeSystem: 'LOINC',
    code: 'E11.9',
  },
};
export const SNOMEDCT: Story = {
  args: {
    codeSystem: 'SNOMED-CT',
    code: '279039007',
  },
};
export const KFA: Story = {
  args: {
    codeSystem: 'KFA',
    code: 'E11.9',
  },
};
