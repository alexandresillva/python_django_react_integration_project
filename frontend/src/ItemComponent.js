import React from 'react'

export default function ItemComponent(props) {
  const status = props.status;
  return (<li>{props.name}<span> - </span>
    {status ? <span>Indisponível</span> : <span>Disponível</span>}</li>)
}