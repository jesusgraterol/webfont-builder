# WebFont Builder

The `webfont-builder` package is a simple script which purpose is to help build Web Fonts so they can be easily self-hosted in production-grade applications.

## Getting Started

Install `webfont-builder` in the font package:

```bash
npm install -D webfont-builder
```

Include the binary in your `build` script:

```json
{
  ...
  "scripts": {
    "start": "webfont-builder",
    ...
  },
  ...
}
```

Build the font:
```bash
npm start
```




<br/>

## Built With

- JavaScript





<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)





<br/>

## Acknowledgments

- [clean-css](https://github.com/clean-css/clean-css)





<br/>

## Deployment

Install dependencies:
```bash
npm install
```

Publish to `npm`:
```bash
npm publish
```