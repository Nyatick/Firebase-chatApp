import React from 'react'

import { Redirect } from "react-router-dom"

const Auth = props => (
    props.user ?
        props.children :
        <Redirect to={"/signIn"} />
)

export default Auth
