import React from 'react'
import Member from './member'
import { childrenWithProps } from '../util/util'

export default  props => (
    <div>
        <h3>Família</h3>
       { childrenWithProps(props.children, props) }
    </div>
)