import { createStyles, makeStyles } from "@material-ui/core/styles";
// import { Maximize } from "@material-ui/icons";
const useStylesBase = makeStyles((theme) =>
  createStyles({
    root: {
      height: "100vh",
      width: "100vw",
      // overflow: "hidden",
      whiteSpace: "pre-line",
      //   background: "#293144",
    },
    overrides: {
      "& a": {
        textDecoration: "unset",
        wordBreak: "break-word",
        cursor: "pointer",
        color: "inherit",
        "&:visited": {
          color: "inherit",
        },
      },
      "& p": {
        fontSize: 14,
        lineHeight: 1.4,
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
      "& h1": {
        fontSize: 40,
        fontWeight: 400,
        margin: 0,
      },
      "& h2": {
        fontSize: 30,
        fontWeight: 350,
      },
      "& h3": {
        fontSize: 25,
        fontWeight: 300,
        margin: 0,
      },
      "& .MuiPaper-elevation1": {
        boxShadow: "none",
      },
      "& .MuiPaper-elevation4": {
        boxShadow: "none",
      },
      "& .MuiStepIcon-root": {
        color: "#fff",
      },
      "& .MuiContainer-root.MuiContainer-maxWidthLg": {
        padding: 0,
        maxWidth: "100",
      },
    },

    homeOverride: {
      maxHeight: "100%",
      "@media (min-width: 1280px)": {
        maxWidth: "100%",
      },
    },

    cardLastChildOverride: {
      "& .MuiCardContent-root:last-child": {
        paddingBottom: 0
      }
    },

    rootOverride: {
      "& .makeStyles-root-80": {
        height: 0,
        width: 0,
      },
    },

    cardOverride: {
"& .MuiCardContent-root": {
  padding: 5
}
    },

    homeGrid: {
      marginLeft: 10,
      marginRight: 10,
      position: "relative",
      marginTop: 30,
    },
    fullWidthHeight: {
      height: "100%",
      width: "100%",
    },
    fullHeight: {
      height: "100%",
    },
    fullWidth: {
      width: "100%",
    },
    centerText: {
      textAlign: "center",
    },
    centerCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      color: "#fff",
    },
  })
);

export default useStylesBase;
