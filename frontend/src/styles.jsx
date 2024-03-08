import { makeStyles } from "@mui/styles";

const backgroundimg = "#ffffff"
const useStyles = makeStyles((theme) =>({
  background_box : {
    background : backgroundimg,
    marginTop : "10px",
    marginBottom : "20px"
  },
  container_Main_Page : {
    background : "#f1f2f0",
  },
  container_form : {
    padding : "5px 5px 2px",
  },
  form : {
    margin : "10px"
  },
  formItem: {
    padding : "5px 10px"
  },
  paperComponent : {
    padding : theme.spacing(6),
    margin : theme.spacing(6),
  }

}))

export default useStyles;