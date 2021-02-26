import document, { Html, Head, Main, NextScript } from 'next/document'; 

export default class Mydocument extends document {
    render () {
        return (
            <Html>
                <Head>
                <link rel="shortcut icon" href="favicon.png" type="images/png"/>

                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" /> 
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}