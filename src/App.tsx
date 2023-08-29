import { useStoryblok, StoryblokComponent, storyblokInit, apiPlugin } from "@storyblok/react";
import Page from "./components/Page";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Teaser from "./components/Teaser";

const SbVersion: string = import.meta.env["VITE_STORYBLOK_VERSION"] || "draft";
const SbToken: string = SbVersion === "draft" ? import.meta.env["VITE_STORYBLOK_TOKEN_PREVIEW"] : import.meta.env["VITE_STORYBLOK_TOKEN"];

storyblokInit({
  bridge: true,
  accessToken: SbToken,
  use: [apiPlugin],
  components: {
    page: Page,
    feature: Feature,
    grid: Grid,
    teaser: Teaser
  }
})

function App() {

  const slug = window.location.pathname === "/"
  ? "home"
  : window.location.pathname.replace("/", "");

  const story = useStoryblok(slug, { version: import.meta.env["VITE_STORYBLOK_VERSION"] || "draft" });

  if (!story || !story.content) {
    return <div>Loading...</div>;
  }
 
  return <StoryblokComponent blok={story.content} />;
}

export default App
