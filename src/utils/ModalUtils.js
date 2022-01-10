/**
 * This utility is for functions needed for modal
 *
 * @module utils/ModalUtils
 */
import { makeStyles } from "@material-ui/core/styles";

/**
 * Represents a modal style function
 *
 * @method
 * @returns styles for modal
 */
  export const getModalStyle = () =>{
    return {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80%"
    };
  }

  /**
 * Represents a modal paper style function
 *
 * @method
 * @returns styles for modal paper
 */
  export const useStyles = makeStyles((theme) => ({
    paper: {
      position: "absolute",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '5px'
    }
  }));