// src/theme/components/modules/LatestNewsModule.js
import { ModuleFields, TextField } from '@hubspot/cms-components/fields';
import { Island } from '@hubspot/cms-components';
import LatestNewsIsland from '../islands/LatestNewsIsland?island';

export function Component({ fieldValues }) {
  return (
      <Island module={LatestNewsIsland} fieldValues={fieldValues} />
  );
}

export const fields = (
  <ModuleFields>
    {[1, 2, 3, 4, 5, 6].map(i => (
      <TextField
        key={i}
        name={`article${i}_title`}
        label={`Article ${i} Title`}
        default={[
          "The Best Offices in London",
          "The Best Virtual Office Addresses in London",
          "Why Are Face-to-Face Meetings Better Than Virtual Meetings?",
          "The Best Office",
          
        ][i - 1]}
      />
    ))}
  </ModuleFields>
);

export const meta = {
  label: 'Latest News Module',
};
