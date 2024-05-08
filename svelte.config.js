import adapter from "@sveltejs/adapter-cloudflare";
import preprocess from "svelte-preprocess";

export default {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter({
      routes: {
        include: ["/meowmoew"],
        exclude: ["<all>"],
      },
      platformProxy: {
        persist: "./your-custom-path",
      },
    }),
  },
};
