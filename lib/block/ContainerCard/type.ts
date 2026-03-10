export interface ListData {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  timestamp?: string;
}

export interface TableDefinition {
  columns: string[];
  rows: {
    [key: string]: any | string | React.ReactNode;
  }[];
}

export interface ContainerCardProps {
  title: string;
  withButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  variant: 'paragraph' | 'timeline' | 'list' | 'table' | 'datarow';
  data?: string | ListData[] | TableDefinition;
  emptyPlaceholder?: React.ReactNode;
}
