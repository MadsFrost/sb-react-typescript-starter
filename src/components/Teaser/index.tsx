import { storyblokEditable } from "@storyblok/react";
import { TeaserStoryblok } from "../components-schema";

const Teaser = ({ blok }: { blok: TeaserStoryblok }) => {
  return (
    <h2 style={{ textAlign: "center" }} {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;