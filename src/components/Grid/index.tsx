import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { GridStoryblok } from "../components-schema";

const Grid = ({ blok }: { blok: GridStoryblok }) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-around" }}
      {...storyblokEditable(blok)}
      className="grid"
    >
      {blok?.columns?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
};

export default Grid;