# muracontacts

## Please Note
This is intended for Mura CMS (v7+) training purposes only. It should **not** to be used for production purposes.


## Getting Started

This project uses [Grunt](http://gruntjs.com/) for combining and minifying JavaScript, Less, and CSS files. Assuming you have [Node.js](https://nodejs.org) installed, you'll need to run `npm install` before running Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install the required plugins with these commands:

* `npm install grunt-contrib-concat --save-dev`
* `npm install grunt-contrib-uglify --save-dev`
* `npm install grunt-contrib-less --save-dev`
* `npm install grunt-contrib-watch --save-dev`


## Instructions
Each branch of [this project](https://github.com/stevewithington/muracontacts) is intended to be an example of how to use Mura ORM with a custom display object.

Switch to the desired branch, download it, and place entire directory under the theme's `display_objects` directory. For example:
`{SiteID}/includes/themes/{ThemeName}/display_objects/muracontacts`

A new display object option should appear in the list of available display objects when using **Inline Edit** mode. Simply drag it onto the layout in the desired display region and publish.

## License
Copyright 2016 Stephen J. Withington, Jr.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
