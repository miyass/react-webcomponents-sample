module.exports = {
  mode: "development",
  entry: "./main.tsx",
  output: {
    path: `${__dirname}/dist`,
    filename: "components.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};
