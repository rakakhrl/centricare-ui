import { IconExternalLink } from '@tabler/icons-react';
import {
  ActionIcon as MantineActionIcon,
  Avatar as MantineAvatar,
  Card as MantineCard,
  Divider as MantineDivider,
  Group as MantineGroup,
  Text as MantineText,
} from '@mantine/core';

interface PatientBannerProps {
  variant: 'basic' | 'encounter';
  withExternalLink: boolean;
  onLinkClick?: () => void;
  avatarUrl?: string;
  patient: {
    name: string;
    mrn: string;
    dob: string;
    age: string;
  };
  encounter?: {
    number: string;
    unit: string;
    guarantor: string;
    status: string;
  };
  label: {
    patient: {
      mrn: string;
      dob: string;
      age: string;
    };
    encounter?: {
      number: string;
      unit: string;
      guarantor: string;
      status: string;
    };
  };
}

const PatientBanner: React.FC<PatientBannerProps> = ({
  variant = 'basic',
  withExternalLink = false,
  onLinkClick,
  avatarUrl = 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
  patient,
  encounter,
  label,
}) => (
  <MantineCard withBorder radius="md" styles={{ root: { width: 'auto' } }}>
    <MantineCard.Section withBorder inheritPadding py="xs">
      <MantineGroup wrap="nowrap">
        <MantineAvatar src={avatarUrl} size={94} radius="md" />
        <div>
          <MantineGroup wrap="nowrap" gap={4} mt={3}>
            <MantineText fz="lg" fw="bold">
              {patient.name}
            </MantineText>
            {withExternalLink ? (
              <MantineActionIcon variant="subtle" onClick={onLinkClick}>
                <IconExternalLink size={16} stroke={1.5} />
              </MantineActionIcon>
            ) : null}
          </MantineGroup>

          <MantineGroup wrap="nowrap" gap={4} mt={3}>
            <MantineText fz="xs" c="dimmed">
              {label.patient.mrn}
            </MantineText>
            <MantineText fz="xs">{patient.mrn}</MantineText>
          </MantineGroup>

          <MantineGroup wrap="nowrap" gap={4} mt={5}>
            <MantineText fz="xs" c="dimmed">
              {label.patient.dob}
            </MantineText>
            <MantineText fz="xs">{patient.dob}</MantineText>
          </MantineGroup>

          <MantineGroup wrap="nowrap" gap={4} mt={5}>
            <MantineText fz="xs" c="dimmed">
              {label.patient.age}
            </MantineText>
            <MantineText fz="xs">{patient.age}</MantineText>
          </MantineGroup>
        </div>
      </MantineGroup>
    </MantineCard.Section>

    {variant == 'encounter' ? (
      <MantineCard.Section withBorder inheritPadding py="xs">
        <MantineGroup>
          <MantineGroup wrap="nowrap" gap={4}>
            <MantineText fz="xs" c="dimmed">
              {label.encounter?.number}
            </MantineText>
            <MantineText fz="xs">{encounter?.number}</MantineText>
          </MantineGroup>
          <MantineDivider orientation="vertical" />
          <MantineGroup wrap="nowrap" gap={4}>
            <MantineText fz="xs" c="dimmed">
              {label.encounter?.unit}
            </MantineText>
            <MantineText fz="xs">{encounter?.unit}</MantineText>
          </MantineGroup>
          <MantineDivider orientation="vertical" />
          <MantineGroup wrap="nowrap" gap={4}>
            <MantineText fz="xs" c="dimmed">
              {label.encounter?.guarantor}
            </MantineText>
            <MantineText fz="xs">{encounter?.guarantor}</MantineText>
          </MantineGroup>
          <MantineDivider orientation="vertical" />
          <MantineGroup wrap="nowrap" gap={4}>
            <MantineText fz="xs" c="dimmed">
              {label.encounter?.status}
            </MantineText>
            <MantineText fz="xs">{encounter?.status}</MantineText>
          </MantineGroup>
        </MantineGroup>
      </MantineCard.Section>
    ) : null}
  </MantineCard>
);

export default PatientBanner;
