grunt-css-datauri
=================

> Embed assets in css files

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-datauri --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-datauri');
```

## The "css_datauri" task

### Overview
In your project's Gruntfile, add a section named `css_datauri` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_datauri: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.filter
Type: `Array`
Default value: `[**/*]`

Filter assets by glob pattern relative to current working dir

### Usage Examples

#### Basic Example
Convert assets to data-urls in css-files

```js
grunt.initConfig({
  css_datauri: {
    build: {
      options: {},
      src: 'test/fixtures/test.css',
      dest: 'tmp/default_options'
    }
  }
});
```

#### Custom Example
Filter assets by glob pattern relative to current working dir

```js
grunt.initConfig({
  css_datauri: {
    build: {
      options: {
        filter: ['test/fixtures/fonts/**/*']
      },
      src: 'test/fixtures/test.css',
      dest: 'tmp/custom_options'
    }
  }
});
```