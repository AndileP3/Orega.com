import { ModuleFields, TextField, ImageField, UrlField } from "@hubspot/cms-components/fields";
import { Island } from "@hubspot/cms-components";
import OfficeServicesIsland from "../islands/OfficeServicesIsland?island";

export function Component({ fieldValues }) {
  return <Island module={OfficeServicesIsland} fieldValues={fieldValues} />;
}

export const fields = (
  <ModuleFields>
    <TextField
      name="heading"
      label="Heading"
      default="Orega Office Services"
    />
    <TextField
      name="paragraph"
      label="Paragraph"
      default="We believe that great things happen when people come together in person: so we create stylish workspaces and deliver unbeatable office services to help you boost face-to-face time and unlock the full potential of your business."
    />
    <TextField 
      name="buttonText" 
      label="Button Text" 
      default="Get a quote" 
    />
    <UrlField 
      name="buttonLink" 
      label="Button Link" 
      default={null} 
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
