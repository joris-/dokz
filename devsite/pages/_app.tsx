import { DokzProvider } from 'dokz/src'
import React from 'react'

const order = { index: false, components: { Box: true } }

export default function App(props) {
    const { Component, pageProps } = props
    return (
        <DokzProvider
            // playgroundScope={{...chackra}}
            sidebarOrdering={order}
        >
            <Component {...pageProps} />
        </DokzProvider>
    )
}
