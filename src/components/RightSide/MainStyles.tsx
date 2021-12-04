
import { makeStyles} from "@mui/styles"

export const useStyles = makeStyles(() => ({
    wrapper :{
        dipslay: "flex",
        
    },
    main: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
    },
    leftside: {
        display:"inline-flex",
        width: "20%"
    },
    rightside: {
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        width: "70%",
        marginTop: 20
    },
    mainHeader:{
        display:"inline-flex",
        fontSize: 20,
        fontFamily: "arial",
        margin: "40px 0px 0px 60px",
        fontWeight: "bold"
    },
    title2: {
        marginLeft: 175
    },
    
    container: {
        display: "flex",
        flexDirection: "column",
        width: 310,
        height: 270,  
        backgroundColor: "white", 
        borderRadius: 8,
        marginRight: 20
    },
    header: {
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#2381c3",
        fontFamily: "sans-serif",
        color: "white",
        width: 110,
        height: 35,
        margin: "0 auto",
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    logo: {
        width: 30, 
        height: 18,
        paddingRight: 5,
    },
    title: {
        display: "flex", 
        justifyContent: "center", 
        fontSize: 16, 
        marginTop: 40,
        fontFamily: "helvetica",
        fontWeight: "bold",
    },
    count: {
        display: "flex", 
        justifyContent: "center", 
        fontSize: 35, 
        marginTop: 15,
        marginBottom: 10,
        fontWeight: "bold",
        fontFamily: "arial"
    },
    money: {
        display: "flex", 
        justifyContent: "center",
        fontFamily: "prestige", 
        fontSize: 16, 
        marginBottom: 25,
        color: "#6e6d6d",
    },
    btnDiv: {
        display: "flex", 
        justifyContent: "center",
    },
    button: {
        color: "white", 
        width:"80%", 
        border: "none", 
        height: 40,
        fontSize: 18,
        
    },
}));
