# AMD-Sketch Template
###### by [Kyle Phillips](http://haptic-data.com)


This is the default template for **[Sketchplate](http://github.com/hapticdata/sketchplate)**. The template is of minimal structure and is oriented towards web-based computational design sketches. [These libraries](https://github.com/hapticdata/template-amd-sketch/blob/master/template.json#L6) are assembled to be automatically retrieved and configured to work together with the [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) workflow I prefer.

### Install with sketchplate:

This template comes pre-installed with sketchplate. If you would like to update the template, or re-install it with a different name you can do so with:

```
sketchplate template install hapticdata/template-amd-sketch amd-sketch
```


### Create a new project with this template:

```
sketchplate new ./my-project -t amd-sketch
```



#### The libraries configured in the template are:
* [Require.js](http://requirejs.org) - with [domReady](https://github.com/requirejs/domReady) and [text](https://github.com/requirejs/text) plugins bundled
* [jquery](http://jquery.com)
* [dat-gui](http://code.google.com/p/dat-gui/)
* [toxiclibsjs](http://haptic-data.com/toxiclibsjs)
* [underscore.js](http://documentcloud.github.com/underscore/)
* [backbone.js](http://documentcloud.github.com/backbone/)
* [three.js](http://mrdoob.github.com/three.js/)
* [Stats.js](http://github.com/mrdoob/stats.js/)
* [d3](http://github.com/mbostock/d3)


All of these libraries will be fetched the first time automatically, they are placed in a `javascripts/vendor` folder with a matching [configuration file](https://github.com/hapticdata/Sketchplate/blob/master/defaults/templates/amd-sketch/template/javascripts/config.js) _([ more about require.js shim config](http://requirejs.org/docs/api.html#config-shim) )_. Only resources that you reference in your project will ever be loaded or included in a built project. The output directory structure is setup to easily be moved into a [node.js](http://nodejs.org) + [express.js](http://expressjs.com) file structure.


Begin editing the javascript of your project at [javascripts/app/main.js](https://github.com/hapticdata/template-amd-sketch/blob/master/template/javascripts/app/main.js) this will be invoked once the DOM has completed loading.


created by [Kyle Phillips](http://haptic-data.com) on April 8th, 2012
