# Dichotomous Key Application

## Development

## Project setup

To develop the app you will need a system with [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/) installed.

To install all the dependencies needed to run the app:

```
yarn install
```

To test the app while developing, run:

```
yarn serve
```

The link to the test app will be shown in the command output, e.g. http://localhost:8080


## Key data

Key data is stored in `src/assets/keyData.json`

The structure is a nested object:

```
"key_id: {
  "title: "Key title description string",
  "couplets": {
    "couplet_id": {
      "a: {
        "label": "Text description",
        "path": "path to next couplet/endpoint"
      },
      "b": {
        ...
      }
    }
  }
}
```
A key can have any number of couplets. A couplet can have any number of questions.

The `path` takes the following format:

`/key/x/y` - Link points to key x, couplet y.
`https://example.com` - Link points to an external webpage (for 'endpoints').

NOTE: Since the key is JSON, any quotes will need to be correctly escaped - i.e. `"has a \"tail\" and \"horns\"."`

## Updating images

Images are stored in `src/public/images` - in directories matching the key-couplet-question they are associated with.

For example, if there was a single key, containing a couplet with 2 choices:

```
0: {
  "title": "Key 0",
  "couplets": {
    "1": {
      "a": {
        "label": "Choice 1",
        "path": "http://example.com/1"
      },
      "b": {
        "label": "Choice 2",
        "path": "http://example.com/2"
      }
    }
  }
}
```

Then the image directory structure would look as follows:

```
images/
  0/
    0.1.a/
      choice_1i.jpg
      choice_1ii.jpg
      thumb/
        choice_1i.jpg
        choice_1ii.jpg
    0.1.b/
      choice2i.jpg
      choice2ii.jpg
      thumb/
        choice_2i.jpg
        choice_2ii.jpg
```

Each image should have a thumbnail stored in the `thumb` subdirectory relative to the main image. Thumbnails must be `400px` in `height`, but can be any `width`.

A question can have any number of images. Image (and thumbnail) filenames can be anything - but they must match.

To update images, place the image files in `/src/public/images` as described above, then from the project root directory, run:

`node makeImages.js`

This generates images metadata `src/assets/images.json` - do not edit this file directly!


## Building/Publishing the app

To build the app for production, run:

```
yarn build
```

This will generate a 'compiled' version of the app that can be served up from any webserver without needing any special dependencies installed.

The built application is written to `/dist`. Copy the entire contents (including subdirectories) to the production webserver in an appropriate directory, and set permissions as appropriate.

By default the app expects to be served from the `/dichot` path on the website, e.g. `http://example.com/dichot`

This can be changed by editing both of:
* `publicPath` value in `vue.config.js`
* `public/.htaccess`
