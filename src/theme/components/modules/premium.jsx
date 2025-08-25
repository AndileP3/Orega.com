import { ModuleFields, TextField, ImageField, UrlField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import OfficeServicesIsland from "../islands/PremiumSpacesIsland?island";

export function Component({ fieldValues }) {
  return <Island module={OfficeServicesIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Premium spaces. Exceptional amenities."
    />
    <TextField
      name="paragraph"
      label="Paragraph"
      default="Our Grade A workspaces are packed with business-class amenities, providing everything from high-speed internet to fully-equipped meeting rooms - ensuring an exceptional experience for every client."
    />
    <ImageField name="image1" label="Image 1" />
    <ImageField name="image2" label="Image 2" />
    <ImageField name="image3" label="Image 3" />
    <ImageField name="image4" label="Image 4" />
    <ImageField name="image5" label="Image 5" />
  </ModuleFields>
);

export const meta = {
  label: "Office Services Module",
};
