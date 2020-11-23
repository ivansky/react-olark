# react-olark

React component to render an Olark chatbox on your page. \
This is based on the work completed by [jgnewman](https://github.com/jgnewman/react-olark).

## How it works

1. Sign up for Olark at [olark.com](https://olark.com). After signing up, you'll have access to your unique site ID.
2. Import `Olark` from react-olark and pass it your site id.
3. That's it!

```jsx
import Olark from "react-olark";

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <Olark siteId={YOUR_SITE_ID} />,
  document.getElementById("root")
);
```

**Note that you _should not_ use the Olark JavaScript snippet on your page \
if you are using react-olark because it will be automatically generated for you.**

## Options

Olark allows you to to [configure your chatbox](https://www.olark.com/api) in lots of cool ways.\ 
These mainly come in the form of "system" configurations and "locale" configurations. \
System values change how the chatbox does things \
and locale values allow you to customize text strings for use with different languages.

You can pass these configuration options to the `Olark` component as props:

```jsx
<Olark
  siteId={YOUR_SITE_ID}
  systemConfig={{ hb_dark_theme: true, ... }}
  localeConfig={{ chatting_title: 'Chat ki a tatou!', ... }}
/>
```

## Styling

React-olark will generate a div with the id `olark-box-container`. Once the chatbox has successfully loaded, that div will be given an extra class called `olark-loaded`. You can use these labels to do simple things like specify position and size. However, further customizations should mostly be handled through the Olark dashboard.
