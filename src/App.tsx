import React from 'react';
import { Container } from './components/LeftSide/Container';
import { Card } from './components/RightSide/Card';
import CardInfoArray from './components/RightSide/Info';
import {useStyles} from './components/RightSide/MainStyles';


const App: React.FC = () => {
  const classes: any = useStyles();

  return ( 
    <>
      <div className={classes.wrapper}>
        <div className={classes.mainHeader}>
              <div className={classes.title1}> Кошельки платформы </div>
              <div className={classes.title2}> Кошельки приложения</div>
            </div>
            <div className={classes.main}>
              <div className={classes.leftside}>
              <Container title="USDT Баланс"
                money={240000}
                todaysForecast="Сегодня:"
                replenishBtn="+ Пополнить"
                withdrawBtn="Вывести"
              />
              </div> 
              <div className={classes.rightside}>
              {CardInfoArray.map((elem) => 
                <Card header={elem.header} logo={elem.logo} title={elem.title} count={elem.count} money={elem.money} btn={elem.btn} key={Math.random()}/> 
              )}
            </div>
        </div>
      </div>
    </>
    
  )
}

export default App;
