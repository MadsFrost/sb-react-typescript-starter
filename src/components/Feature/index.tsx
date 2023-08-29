import { storyblokEditable } from "@storyblok/react";
import { FeatureStoryblok } from "../components-schema";

const Feature = ({ blok }: { blok: FeatureStoryblok }) => (
  <div {...storyblokEditable(blok)} className="column feature">
    {blok.name}
  </div>
);

export default Feature;