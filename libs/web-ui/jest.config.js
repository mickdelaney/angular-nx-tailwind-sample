module.exports = {
  name: 'web-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/web-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
