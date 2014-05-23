# grunt-css-image-include

> include images in css-files as data-uri

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-css-image-include --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-css-image-include');
```

## The "css_image_include" task

### Overview
In your project's Gruntfile, add a section named `css_image_include` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  css_image_include: {
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

#### options.exclude
Type: `Array`
Default value: `[]`

Exclude files by providing an array of glob-patterns

### Usage Examples

#### Basic Example
Include images in src/styles.css as data-uri

```js
grunt.initConfig({
  css_image_include: {
    build: {
      options: {},
      src: 'src/styles.css',
      dest: 'build/styles.css'
    }
  }
});
```

#### Exclude files
You can exclude files by specifying a glob-pattern

```js
grunt.initConfig({
  css_image_include: {
    build: {
      options: {
        exclude: ['*.gif']
      },
      src: 'src/styles.css',
      dest: 'build/styles.css'
    }
  }
});
```

