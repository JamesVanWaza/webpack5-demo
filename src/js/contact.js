/** React Demo */
import React from 'react'
import { render } from 'react-dom'

/** Stylesheet */
import '../scss/style.scss'

const Contact = () => {
    return ( <
        div >
        <
        h3 > Contact Webpack < /h3> < /
        div >
    )
}

render( <
    Contact / > ,
    document.getElementById('target')
)