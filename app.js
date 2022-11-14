var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var pingPongRouter = require("./routes/pingPong");
var serveStaticRouter = require("./routes/serveStatic");
var videoStreamRouter = require("./routes/videoStream");
var downloadRouter = require("./routes/download");
var engineeringRouter = require("./routes/engineering");
var employeesRouter = require("./routes/employees");
var openWeatherRouter = require("./routes/openWeather");
var mapBoxApiRouter = require("./routes/mapBoxApi");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/post", pingPongRouter);
app.use("/file", serveStaticRouter);
app.use("/video", videoStreamRouter);
app.use("/fileDownloads", downloadRouter);
app.use("/engineering", engineeringRouter);
app.use("/emp", employeesRouter);
app.use("/weather", openWeatherRouter);
app.use("/mapBox", mapBoxApiRouter);

let errors = [
  {
    error_code: 404,
    message: "page not found",
  },
  {
    error_code: 500,
    message: "internal server error",
  },
];
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
const filepath = path.join(__dirname, "./public/view/");
// error handler
app.use(function (err, req, res, next) {
  // // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render("error");

  res.status(err.status || 500);
  errors.map((eachError) => {
    if (eachError.error_code == err.status) {
      res.render(path.join(filepath, "error404.html"));
    }
  });
});

module.exports = app;
