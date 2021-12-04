import { Button } from "@mui/material";
import { FC } from "react"
import { useStyles } from "./ContainerStyles";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Chart } from "./Chart";

interface ContainerProps {
    title: string;
    money: number;
    todaysForecast: string;
    replenishBtn: string;
    withdrawBtn: string;
}

export const Container: FC<ContainerProps> = (
    {title, money, todaysForecast, replenishBtn, withdrawBtn}) => {
        const classes: any = useStyles();

      
        return (
            <div className={classes.container}>
                <div className={classes.title}> 
                        <img className={classes.img} src= "https://iconape.com/wp-content/png_logo_vector/tether-usdt-logo.png" alt="logo" /> 
                    <span>{title}</span>
                </div>
                <div className={classes.money}>
                    <span>$ {money}</span>
                </div>
                <div className={classes.todaysForecast}>
                    <span>{todaysForecast}</span>
                </div>
                <div>
                <Chart /> 
                </div>
                <div>
                </div>
                <div className={classes.btnSection}>
                    <div className={classes.button1}>
                        <Button variant="contained"
                            sx ={{
                                borderRadius: 2,
                                backgroundColor: "#00b1a0", 
                                "&:hover": {
                                    backgroundColor: "#039d8e"
                                }
                            }}> 
                            
                            {replenishBtn}
                        </Button>
                    </div>
                    <div className={classes.button2}>
                        <Button  variant="outlined"
                        sx={{
                            borderRadius: 2,
                            borderColor:"#00b1a0",
                            color:"#00b1a0",
                            "&:hover": {
                                borderColor: "#057066",
                                color: "#057066"
                            }
                        }}> 
                        <ArrowUpwardIcon sx={{width:15, height:10}} />
                            {withdrawBtn}
                        </Button>
                    </div>
                </div>
            </div>
        )
    }



