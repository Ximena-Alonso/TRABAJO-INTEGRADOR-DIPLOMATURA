import React from 'react';

const NovedadItem = (props)=>{
    const { service, time, imagen, body} = props;

    return (
            <div className="novedades">
                    <h1>{service} </h1>
                    <h2>{time} </h2>
                    <img src={imagen}/>
                    <div dangerouslySetInnerHTML={{__html: body}}/>
                    <hr />

            </div>
    );
}


export default NovedadItem;