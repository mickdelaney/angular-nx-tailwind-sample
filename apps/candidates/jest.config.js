module.exports = {
  name: 'candidates',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/candidates',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
