import React from 'react';

const NovedadItem = (props)=>{
    const { service, time, imagen, descrip} = props;

    return (
            <div className="novedades">
                    <h3>{service} </h3>
                    <h4>{time} </h4>
                    <img className='imgNov' src={imagen}/>
                    <div className='descripNov' dangerouslySetInnerHTML={{__html: descrip}}/>
                    <hr />

            </div>
    );
}


export default NovedadItem;