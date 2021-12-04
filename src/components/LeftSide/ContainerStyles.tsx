import { makeStyles} from "@mui/styles"

export const useStyles = makeStyles(() => ({
    container: {
        width: 330,
        height: 560,  
        backgroundColor: "white", 
        borderRadius: 8,
        margin: 20,
        marginleft: 50,
    },
    img: {
        width: 30, 
        height: 25,
        paddingRight: 5
    },
    title: {
        display: "flex", 
        justifyContent: "center", 
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: 17, 
        paddingTop: 40,

    },
    money: {
        display: "flex", 
        justifyContent: "center", 
        fontSize: 50, 
        paddingTop: 10,
        fontWeight: "bold",
        fontFamily: "arial"
    },
    todaysForecast: {
        display: "flex", 
        justifyContent: "center", 
        fontSize: 14, 
        color: "#bbbbbb",
    },
    data: {
        display: "flex",
        justifyContent: "center",
        color: "#6e6d6d",
        paddingBottom: 20,
       
    },
    btnSection: {
        display: "flex",
    },
    button1: {
        display: "flex",
        height: 50,
        margin: "auto",
    },
    button2: {
        display: "flex",
        marginRight: 30,
        height: 50,
    },
    chart: {
        display: "inline-block"
    },
    dateSection: {
        display: "flex",
        justifyContent: "space-around",
        fontFamily: "prestige",
        color: "#6e6d6d",
        paddingBottom: 20
    },
    date: {
        cursor: "pointer",
        padding: "0px 10px",
        "&:hover" :{
            backgroundColor: "#e6f6fe",
        }
    }
    
}));
