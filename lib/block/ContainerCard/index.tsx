import {
  Button as MantineButton,
  Card as MantineCard,
  Center as MantineCenter,
  Group as MantineGroup,
  List as MantineList,
  Text as MantineText,
  Timeline as MantineTimeline,
} from '@mantine/core';

interface ListData {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  timestamp?: string;
}

interface ContainerCardProps {
  title: string;
  withButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  variant: 'paragraph' | 'timeline' | 'list';
  data?: string | ListData[];
  emptyPlaceholder?: React.ReactNode;
}

const renderContent = (variant: string, data: string | ListData[]) => {
  switch (variant) {
    case 'paragraph':
      return <MantineText>{data as string}</MantineText>;
      break;
    case 'list':
      return (
        <MantineList spacing="xs" size="sm" center>
          {(data as ListData[]).map((d) => (
            <MantineList.Item icon={d.icon}>{d.title}</MantineList.Item>
          ))}
        </MantineList>
      );
      break;
    case 'timeline':
      return (
        <MantineTimeline>
          {(data as ListData[]).map((d) => (
            <MantineTimeline.Item bullet={d.icon} title={d.title}>
              <MantineText c="dimmed" size="sm">
                {d.description}
              </MantineText>
              <MantineText size="xs" mt={4}>
                {d.timestamp}
              </MantineText>
            </MantineTimeline.Item>
          ))}
        </MantineTimeline>
      );
      break;
    default:
      return <MantineText>{data as string}</MantineText>;
      break;
  }
};

const ContainerCard: React.FC<ContainerCardProps> = ({
  title,
  withButton = true,
  buttonLabel,
  onButtonClick,
  variant = 'paragraph',
  data,
  emptyPlaceholder,
}) => (
  <MantineCard withBorder radius="md" styles={{ root: { width: 'auto' } }}>
    <MantineCard.Section withBorder inheritPadding py="xs">
      <MantineGroup justify="space-between">
        <MantineText>{title}</MantineText>
        {withButton ? (
          <MantineButton size="compact-sm" variant="subtle" onClick={onButtonClick}>
            {buttonLabel}
          </MantineButton>
        ) : undefined}
      </MantineGroup>
    </MantineCard.Section>

    <MantineCard.Section inheritPadding py="sm">
      {data ? (
        renderContent(variant, data)
      ) : (
        <MantineCenter>
          {emptyPlaceholder ? emptyPlaceholder : <MantineText c="dimmed">No data</MantineText>}
        </MantineCenter>
      )}
    </MantineCard.Section>
  </MantineCard>
);

export default ContainerCard;
