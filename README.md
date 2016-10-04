# muracontacts

## Please Note
This is intended for Mura CMS (v7+) training purposes only. It should **not** to be used for production purposes.

This is the [CFML branch of the muracontacts project](https://github.com/stevewithington/muracontacts/tree/cfml). It is intended to be an example of how a ColdFusion/CFML developer might approach creating a simple, framework-agnostic application as a self-contained display object.


## Instructions
Each branch of [this project](https://github.com/stevewithington/muracontacts) is intended to be an example of how to use Mura ORM with a custom display object.

Switch to the desired branch, download it, and place entire directory under the theme's `display_objects` directory. For example:
`{SiteID}/includes/themes/{ThemeName}/display_objects/muracontacts`

Assuming you're using the default Mura CMS application reload key, you should be able to add `?appreload&applydbupdates` to the URL to force Mura to reload and parse the ORM objects into database objects.

A new display object option should appear in the list of available display objects when using **Inline Edit** mode. Simply drag it onto the layout in the desired display region and publish.


## Getting Started

If you want ot be able to play around with the files, and make changes, please note that this project uses [Grunt](http://gruntjs.com/) for combining and minifying JavaScript, Less, and CSS files. If you haven't used Grunt before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide.

Assuming you have [Node.js](https://nodejs.org) installed, you'll need to run `npm install` from the terminal within the project directory before running Grunt. Once you've done that, you should now be able to run `grunt` from the command line to compile scripts and less/css files. Or, run `grunt watch` to have your files automatically compile every time you save your files.


## License
Copyright 2016 Stephen J. Withington, Jr.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this work except in compliance with the License. You may obtain a copy of the License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

![Built with Grunt](https://github.com/pixel-cookers/built-with-badges/blob/master/grunt/grunt-short-flat.png)
![Built with Bootstrap](https://github.com/pixel-cookers/built-with-badges/blob/master/bootstrap/bootstrap-short-flat.png)
![Styled with Less](https://github.com/pixel-cookers/built-with-badges/blob/master/less/less-short-flat.png)
