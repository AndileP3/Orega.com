import { ModuleFields, TextField, NumberField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import NewsIsland from '../islands/NewsIsland?island';

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Section Heading"
      defaultValue="News & Views"
    />
    <NumberField
      name="hubdb_table_id"
      label="HubDB Table ID"
      defaultValue={129487190} // your table ID
    />
  </ModuleFields>
);

export const meta = {
  label: 'News Views Module',
  name: 'NewsViews',
  description: 'Displays news from HubDB using an Island.',
};

export function Component({ fieldValues }) {
  // Ensure hubdb_table_id is passed to the Island
  const islandProps = {
    ...fieldValues,
    hubdb_table_id: fieldValues.hubdb_table_id || 129487190,
  };

  return <Island module={NewsIsland} fieldValues={islandProps} />;
}
