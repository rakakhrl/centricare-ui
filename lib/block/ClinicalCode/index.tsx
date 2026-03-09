import { Badge as MantineBadge, Text as MantineText } from '@mantine/core';

interface ClinicalCodeProps {
  codeSystem: 'ICD-9' | 'ICD-10' | 'LOINC' | 'SNOMED-CT' | 'KFA';
  code: string;
}

const renderCodeSystem = (codeSystem: string) => {
  switch (codeSystem) {
    case 'ICD-9':
      return <MantineText size="xs">ICD-9</MantineText>;
      break;
    case 'ICD-10':
      return <MantineText size="xs">ICD-10</MantineText>;
      break;
    case 'LOINC':
      return <MantineText size="xs">LOINC</MantineText>;
      break;
    case 'SNOMED-CT':
      return <MantineText size="xs">SNOMED-CT</MantineText>;
      break;
    case 'KFA':
      return <MantineText size="xs">KFA</MantineText>;
      break;

    default:
      return <MantineText size="xs">ICD-9</MantineText>;
      break;
  }
};

const ClinicalCode: React.FC<ClinicalCodeProps> = ({ codeSystem, code }) => (
  <MantineBadge variant="outline" size="md" radius="sm" leftSection={renderCodeSystem(codeSystem)}>
    <MantineText size="xs" fw="bold">
      {code}
    </MantineText>
  </MantineBadge>
);

export default ClinicalCode;
