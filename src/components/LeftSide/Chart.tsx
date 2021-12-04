import { useState } from "react";
import { Area, AreaChart } from "recharts";
import ChartData from "./ChartData";
import { useStyles } from "./ContainerStyles";



export const Chart = () => {
    const [chData, setChData] = useState(ChartData);
        const classes: any = useStyles();

        const onClickDate : any = () => {
            const a = chData.map(elem => {
                elem.uv = Math.random() * 100;
                return elem;
            })

            setChData(a);
        }
        
        return (
            <>
            <div className={classes.chart}> 
                <AreaChart width={360} height={270} data={chData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <Area type="monotone" dataKey="uv" stroke="#03a9f4" fillOpacity={0.4} fill={"#e6f6fe"}/>
                </AreaChart>
            </div>
            <div className={classes.dateSection}>
                {ChartData.map((elem) =>
                <span className={classes.date} onClick={onClickDate} key={Math.random()}>{elem.day}</span>
                )}
            </div>
            </>
        )
    }
