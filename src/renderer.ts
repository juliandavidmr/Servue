import * as fs from "fs"
import * as path from "path"
import * as vue from "vue";

declare var Promise: any;

// Get the HTML layout
// var layout = fs.readFileSync('./views/index.html', 'utf8')
var layout = '';
// Create a renderer
// var renderer = require('vue-server-renderer').createRenderer()

export default (app) => {
  return new Promise((resolve, reject) => {
    // Render our Vue app to a string
/*    renderer.renderToString(
      // Create an app instance
      app,
      // Handle the rendered result
      function (error, html) {
        // If an error occurred while rendering...
        if (error) {
          return reject(error);
        } else {
          // Send the layout with the rendered app's HTML
          return resolve(
            layout.replace('<div id="app"></div>', html)
          )
        }
      }
    )
    */
  });
}
