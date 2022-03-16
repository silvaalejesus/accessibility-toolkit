import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  subTitle: {
    fontSize: "32px",
    color: "#ededed",
    fontFamily: "'Gotham', sans-serif",
  },
  description: {
    fontSize: "21px",
    color: "#c4c5c5",
    width: "60%",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    marginBottom: "26px",
  },
});

export default function Content() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className={classes.title}>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAEP0lEQVR4nO2bW2gcVRjHf2cu2d1stsRsEhrTXLRIsYVaA0JiEQlFijUgVdMUQaoIPghi6lMqQqkPog9C+uSTaFFRKdKAUhWUEG8VizeEFvJiLhJy203buNnZ2Z05PsSETXfT2U12ZrfJ/J5mznxn/9/59jvfmTk7Cz4+Pj7bGJGvMT72l7y5bceOyGZ0JDANjEvEsCb5UETbrmQbLE2NPpGxrQGJfW+4OrwI7FzPv2xGr1zl46925712+pWqNedaXXvO52mFj2FTCKAJaBLITktwKhMfG5ZCnkknU/eZGeuMYaZqs+xrPPJrOQC9Jz6QAL/99K1XugDdQopuw0x7Jrj7nmclQMeDhwA4f+4ZoXimXqFs+wA41oBf/pxk8L0fiC0sAdAYjTDw4iG6Otpdd84LHDPg7Ps/rg4eYDa2yFvvfOOqU17imAHz8QQAly70A9B1dJCZ+X9dcebTz3WmZhTAzLnW2qzwXF/pFy2vlsGCmJpR6G8bYEdrbc61178fcEWz4AB0HR10xYFys+1XgYIDcOlC/2od2Eo4ToGvzz2/5nyrBWFLTYG+I/Gx4z2xyWL6OGbA4RPvbtyjdVgvi5p3SgbH34Tx3Gutzbf+rvqOxMcUe6EdG473MPnJF9GWQnypqGXwWM/y+l/so/exR2PjDVG9HRqIzc0hMtdannqsYQR42KlvwTVgk/sBrtJYr7VFG+oBEALmZ+fYt0dzHDxUWAZshGhDAyuDB6irr0fmbOesT0XVACetfP2yB3+rtvXYUqvARqioGlCOeuNngJNBpdeAzeJngJOBXwO2OLdVDSil1gp+BjgZ+DXgf4q5v94sXmr5NaDkircZBdcARVGpqQlRwE/2G8ZLrRUKzgDbtjDNjJu+lEWrqClgpAysjDeOeaVVXA2QkEgmMU1z+cRNPNIqfktMgmGkMM00epWOrqkIRUG4MV890NrwnqBt26SMFKkC7QUCRRGomoqu66iq6ppWMXi2KSqRWLbEMm1MM42qqgSCVc4dXaZs9wGWZbGUSJZLfpVtfyO07QOQtwY88MjbJZYRBAMBu/aOULqzoy359JP3h+9qrdOzLf6eiKc/+uz3xM+/joeuX0vqRiqluL7U4lkRlBgpQ5meNgJDFxcCQxf/oLWlMfnqy90AvHF2mInJ2RCQ+26My6wJwMoblKVGSollZciYJoaRIJlIcD1xI/TSqSEAqiMRmlruJhQOEwyG0aqqUFUNIdx/FvAkA4QQaJqOpukEq8PU1nmh6uPj4+OMY5k9ePDwPqmKXinp/e61O/d64VSpWNxzcuXwH5Av1LXv//Jmm7yrQPagbdjrwf2Iq5imuSsWmz9Pnn+i5A2AaZr1acvab1mZXXbGWm2/MVHtnpcuMGpfXT3WVC2YzyZvAC5fHh4BRgAOHHjocQQnrYzVCQRc8NN1NFWzwpHI6XL74ePj41Nx/AdJCYGlKIleYQAAAABJRU5ErkJggg=="
          alt=""
        />
        <Typography variant="h2" className={classes.subTitle}>
          User Story:
        </Typography>
      </div>
      <Typography className={classes.description}>
        As a user, I would like to be able to do this thing better so that my
        life is just a bit easier.
      </Typography>
    </div>
  );
}
