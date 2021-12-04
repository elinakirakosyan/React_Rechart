import { Button} from "@mui/material"
import { FC } from "react"
import {useStyles}from './MainStyles'



interface CardProps {
    header: string,
    logo: string,
    title: string,
    count: number,
    money: number,
    btn: string,
} 

 export const Card: FC <CardProps> = ({header, logo, title, count, money, btn}) => {

    const classes: any = useStyles();

    return(
        <div className= {classes.container}>
            <div className={classes.header}>
                {header}
            </div>
            <div className={classes.title}> 
                <img className={classes.logo} src={logo} alt="logo"/>
                <span>{title}</span>
            </div>
            <div className={classes.count}>
                <span> {count}</span>
            </div>
            <div>
                <span className={classes.money} > $ {money}</span>
            </div>
            <div className={classes.btnDiv}>
                <Button className={classes.button} variant="contained"
                sx ={{
                    backgroundColor: "#00b1a0", 
                    "&:hover": {
                        backgroundColor: "#039d8e"
                    }
                }}
                > 
                {btn}
                </Button>
            </div>
        
        </div>
    )
}