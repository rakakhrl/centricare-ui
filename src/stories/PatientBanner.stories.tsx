import { Meta, StoryObj } from '@storybook/react-vite';
import { PatientBanner } from '../../lib/main';

const meta = {
  title: 'Block/PatientBanner',
  component: PatientBanner,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PatientBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Basic: Story = {
  args: {
    variant: 'basic',
    withExternalLink: false,
    patient: {
      name: 'Ahmad Orochimaru Uchiha Nakama',
      mrn: '22-42-12-01',
      dob: '01/01/2000',
      age: '26 year 2 month 9 day',
    },
    label: {
      patient: {
        mrn: 'MRN',
        dob: 'DOB',
        age: 'AGE',
      },
    },
  },
};

export const EncounterInfo: Story = {
  args: {
    variant: 'encounter',
    withExternalLink: true,
    onLinkClick: () => alert('clicked!'),
    patient: {
      name: 'Ahmad Orochimaru Uchiha Nakama',
      mrn: '22-42-12-01',
      dob: '01/01/2000',
      age: '26 year 2 month 9 day',
    },
    encounter: {
      number: 'OP/260309/000001',
      unit: 'Poli Gigi',
      guarantor: 'JPKM Surya Sumirat - Advance',
      status: 'In Progress',
    },
    label: {
      patient: {
        mrn: 'MRN',
        dob: 'DOB',
        age: 'AGE',
      },
      encounter: {
        number: 'ENCOUNTER NO',
        unit: 'SERVICE UNIT',
        guarantor: 'GUARANTOR',
        status: 'STATUS',
      },
    },
  },
};

export const CustomizeLabel: Story = {
  args: {
    variant: 'encounter',
    withExternalLink: true,
    onLinkClick: () => alert('clicked!'),
    patient: {
      name: 'Ahmad Orochimaru Uchiha Nakama',
      mrn: '22-42-12-01',
      dob: '01/01/2000',
      age: '26 year 2 month 9 day',
    },
    encounter: {
      number: 'OP/260309/000001',
      unit: 'Poli Gigi',
      guarantor: 'JPKM Surya Sumirat - Advance',
      status: 'In Progress',
    },
    label: {
      patient: {
        mrn: 'NO REKAM MEDIS',
        dob: 'TANGGAL LAHIR',
        age: 'UMUR',
      },
      encounter: {
        number: 'NO KUNJUNGAN',
        unit: 'UNIT PELAYANAN',
        guarantor: 'PENJAMIN',
        status: 'STATUS',
      },
    },
  },
};
