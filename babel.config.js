module.exports = {
  env: {
    production: {
      presets: [
        "@babel/preset-env",
        {
          exclude: [
            "@babel/plugin-transform-regenerator",
            "@babel/plugin-transform-async-to-generator",
          ],
          modules: false,
        },
      ],
    },
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            exclude: [
              "@babel/plugin-transform-regenerator",
              "@babel/plugin-transform-async-to-generator",
            ],
          },
        ],
      ],
    },
  },
};
