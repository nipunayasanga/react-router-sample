import React from 'react'
import { Link } from "react-router-dom";


export default function MenuItem(props) {
  return (
        <>
        {/* <a href={props.linkurl}>{props.linktext}</a> */}

        <Link to={props.linkurl}>{props.linktext}</Link>

        </>
  )
}
