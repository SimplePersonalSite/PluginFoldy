## PluginInBrowserEdits
This plugin allows you to show/hide elements in [SimplePersonalSiteJavaServer](https://github.com/SimplePersonalSite/SimplePersonalSiteJavaServer).

## Install
1. follow directions to setup a [SimplePersonalSiteJavaServer](https://github.com/SimplePersonalSite/SimplePersonalSiteJavaServer).
1. symlink `PluginFoldy.css` and `PluginFoldy.js` to the plugins directory of your site
1. include `PluginFoldy.js` as a script in `index.html` **below** `SimplePersonalSite.js`
  - `<script src='plugins/PluginFoldy.js'></script>`
1. Tell the app to initialize the plugin by passing `PluginFoldy.plugin` to `app.run()` in `index.html`
  - if you only have one plugin, this looks like:
  - `app.run([PluginFoldy.plugin])`

## Usage
### `foldy-div`
Show/hide an entire section of content.

1. Above the content you want to show/hide, add `<div id='your-id-here' class='foldy-div'></div>`
2. Below your content, add `<div id='your-id-here-close'></div>`


##### `foldy-div-found`
If you want to style your foldy-divs, you can add style to the class `foldy-div-found`. I like to add margin to the left so content get indented (css): `.foldy-div-found { margin-left: 15px }`

##### Why not just put the content inside of a div?
Some markdown renderers don't render markdown inside divs very well. Adding a div above and below content should work well for most markdown renderers.

### `foldy-next`
Show/hide the next element.

If there is no next element, recursively keep search up to parents until a next element can be found, or the `body` is reached.

1. Before the element you want to show/hide, add `<span class='foldy-next'></span>`

### `foldy-hide`
If you want the element to start off as hidden instead of shown, just add `foldy-hide` as a class to the foldy element.

Examples:
- `<span class='foldy-next foldy-hide'></span>`
- `<span id='cool-element-yes' class='foldy-div foldy-hide'></span>`
