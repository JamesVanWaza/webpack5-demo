/** React Demo */
import React from 'react'
import { render } from 'react-dom'

/** Stylesheet */
import '../scss/style.scss'

const About = () => {
    return ( <
        div >
        <
        h2 > About Webpack < /h2> <
        /div>
    )
}

render( <
    About / > ,
    document.getElementById('target')
)