import React from 'react'
import style from './style.module.scss'
export default function Card(props) {
    let color;
    if (props.color === 'blue'){
        color = style.blue
    } else if (props.color === 'red'){
        color = style.red
    } else if (props.color === 'green'){
        color = style.green
    } else{
        color = style.black
    }
  return (
    <div className={style.card}>
            <div className={`${style.title} ${color}`}>
                <h2>{`Безлимитный ${props.price}`}</h2>
            </div>
            <div className={`${style.price} ${color}`}>
                <div className={style.container}>
                    <p>руб</p>
                    <p className={style.number}>{props.price}</p>
                    <p>/мес</p>
                </div>
                
            </div>
            <div className={style.info}>
                <div className={style.info_top}>
                    <p>{`до ${props.mbit} Мбит/сек`}</p>
                </div>
                <div className={style.info_bottom}>
                    <p>Объем включенного трафика не ограничен</p>
                </div>
            </div>
    </div>
  )
}
