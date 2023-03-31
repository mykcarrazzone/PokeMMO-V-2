const path = require("path");

module.exports = {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    path
      .join(
        "src",
        "components",
        "__snapshots__",
        path
          .basename(testPath)
          .replace(/\.test\.([tj]sx?)/, `${snapshotExtension}.$1`)
      )
      .replace(/\\/g, "/"),

  resolveTestPath: (snapshotPath, snapshotExtension) =>
    path
      .join(
        "src",
        "components",
        path.basename(snapshotPath).replace(snapshotExtension, ".test")
      )
      .replace(/\\/g, "/"),

  testPathForConsistencyCheck: "src/components/example.test.js",
};
