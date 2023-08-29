import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import type { PageStoryblok } from "../components-schema";
const Page = ({ blok }: { blok: PageStoryblok} ) => (
  <main {...storyblokEditable(blok)}>
    {blok.body
      ? blok.body.map((blok) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))
      : null}
  </main>
);
 
export default Page;