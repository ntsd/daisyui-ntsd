# DaisyUI NTSD

A DaisyUI theme

## Installation

```sh
npm i -D daisyui-ntsd
```

Add `...require("daisyui-ntsd")` to themes on `tailwind.config.cjs`

```diff
module.exports = {
  ...
  daisyui: {
-    themes: [],
+    themes: [...require("daisyui-ntsd")],
  },
};
```

Customize the theme

```js
module.exports = {
  ...
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui-ntsd').light,
          "primary": "blue",
          "primary-focus": "mediumblue",
        }
      },
      {
        dark: require('daisyui-ntsd').dark
      }
    ],
  },
};
```

Example usage for `tailwind.config.ts`

```ts
import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
// daisyui-ntsd support typescript module
import { light, dark } from 'daisyui-ntsd';

export default {
  ...
	plugins: [daisyui],
	daisyui: {
		themes: [
      {
				light: {
          // apply default light theme
          ...light,
          // customize
          "primary": "blue",
          "primary-focus": "mediumblue",
        },
			},
			{
				dark: dark,
			}
		]
	}
} satisfies Config;
```
