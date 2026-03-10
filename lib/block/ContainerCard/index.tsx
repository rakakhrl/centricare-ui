import {
  Button as MantineButton,
  Card as MantineCard,
  Center as MantineCenter,
  Group as MantineGroup,
  List as MantineList,
  Table as MantineTable,
  Text as MantineText,
  Timeline as MantineTimeline,
} from '@mantine/core';
import { ContainerCardProps, ListData, TableDefinition } from './type';

const ParagraphVariant: React.FC<{ data: string }> = ({ data }) => (
  <MantineText>{data}</MantineText>
);

const ListVariant: React.FC<{ data: ListData[] }> = ({ data }) => (
  <MantineList spacing="xs" size="sm" center>
    {(data as ListData[]).map((d) => (
      <MantineList.Item icon={d.icon}>{d.title}</MantineList.Item>
    ))}
  </MantineList>
);

const TimelineVariant: React.FC<{ data: ListData[] }> = ({ data }) => (
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

const TableVariant: React.FC<{ data: TableDefinition }> = ({ data }) => (
  <MantineTable>
    <MantineTable.Thead>
      <MantineTable.Tr>
        {data.columns.map((col) => (
          <MantineTable.Th>{col}</MantineTable.Th>
        ))}
      </MantineTable.Tr>
    </MantineTable.Thead>
    <MantineTable.Tbody>
      {data.rows.map((row) => (
        <MantineTable.Tr>
          {Object.keys(row).map((key) => (
            <MantineTable.Td>{row[key]}</MantineTable.Td>
          ))}
        </MantineTable.Tr>
      ))}
    </MantineTable.Tbody>
  </MantineTable>
);

const DatarowVarian: React.FC<{ data: ListData[] }> = ({ data }) => (
  <MantineTable variant="vertical">
    <MantineTable.Tbody>
      {data.map((d) => (
        <MantineTable.Tr>
          <MantineTable.Th>{d.title}</MantineTable.Th>
          <MantineTable.Td>{d.description}</MantineTable.Td>
        </MantineTable.Tr>
      ))}
    </MantineTable.Tbody>
  </MantineTable>
);

const renderContent = (variant: string, data: string | ListData[] | TableDefinition) => {
  switch (variant) {
    case 'paragraph':
      return <ParagraphVariant data={data as string} />;

    case 'list':
      return <ListVariant data={data as ListData[]} />;

    case 'timeline':
      return <TimelineVariant data={data as ListData[]} />;

    case 'table':
      return <TableVariant data={data as TableDefinition} />;

    case 'datarow':
      return <DatarowVarian data={data as ListData[]} />;

    default:
      return <ParagraphVariant data={data as string} />;
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

    <MantineCard.Section
      inheritPadding={variant === 'table' || variant === 'datarow' ? false : true}
      py={variant === 'table' || variant === 'datarow' ? undefined : 'sm'}
    >
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
