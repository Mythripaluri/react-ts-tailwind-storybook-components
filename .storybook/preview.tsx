import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (StoryFn) => (
      <div className="p-6 bg-gray-50 min-h-screen dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <StoryFn />
      </div>
    ),
  ],
};

export default preview;
