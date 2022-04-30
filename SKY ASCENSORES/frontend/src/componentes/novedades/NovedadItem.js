import React from 'react';

const NovedadItem = (props)=>{
    const { service, time, imagen, description} = props;

    return (
            <div className="noveades">
                    <h1>{service} </h1>
                    <h2>{time} </h2>
                    <img src={imagen}/>
                    <div dangerouslySetInnerHTML={{__html: body}}/>
                    <hr />

            </div>
    );
}


export default NovedadItem;