import gulp from "gulp"
import del from "del"
import {base, tasks} from "./const"

gulp.task(tasks.CLIENT_DEL_DIST, (done) => {
    del.sync([base.DIST])
    done()
});
