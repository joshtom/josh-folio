// const nextConfig = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       issuer: /\.[jt]sx?$/,
//       use: ["@svgr/webpack"],
//     });

//     return config;
//   },
// };

// module.exports = nextConfig;

// const withSass = require("@zeit/next-sass");

// const withCSS = require("@zeit/next-css");

// const withTM = require("next-transpile-modules");

// module.exports = withTM({
//   transpileModules: ["gsap"],
// });

// module.exports = withCSS(
//   withSass({
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,

//         use: {
//           loader: "url-loader",

//           options: {
//             limit: 100000,
//           },
//         },
//       });

//       return config;
//     },
//   })
// );

// Return the line below incase scroll trigger stopped working
// const withTM = require("next-transpile-modules")(["gsap"]);

// module.exports = withTM({});
