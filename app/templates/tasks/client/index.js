import gulp from 'gulp';

gulp.task('client.build', [
  'client.del_dist',
  'client.test_client',
  'client.views:dist',
  'client.imgs:dist',
  'client.fonts:dist',
  'client.rev:dist'
]); // dist build

gulp.task('client.build_temp', [
  'client.del_temp',
  'client.views:temp',
  'client.imgs:temp',
  'client.fonts:temp',
  'client.rev:temp'
]); // browser-sync build
