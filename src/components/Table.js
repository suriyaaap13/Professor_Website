import React from 'react'

export default function Table({ data, config, keyFn }) {

  const renderedHeader = config.map((column)=>{
    return <th key={column.label}>{column.label}</th>
  });

  const renderedBody = data.map((element)=>{
    const renderedRow = config.map((column)=>{
      return <td key={column.label} >{column.render(element)}</td>
    });
    return <tr key={keyFn(element)}>
      {renderedRow}
    </tr>;
  })



  return (
    <div>
      <table style={{width:"100%"}}>
            <thead>
              <tr>{renderedHeader}</tr>
            </thead>
            <tbody>
              {renderedBody}
            </tbody>
        </table>
    </div>
  )
}
