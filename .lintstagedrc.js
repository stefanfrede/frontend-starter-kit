export default {
  '**/*.html': ['prettier --write --cache'],
  '**/*.css': ['stylelint --cache --fix', 'prettier --write --cache'],
  '**/*.js': ['eslint --cache --fix', 'prettier --write --cache'],
};
