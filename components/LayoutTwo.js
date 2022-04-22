import Head from "next/head"


export default function LayoutTwo({ title, children, keywords, description }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
                <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
                <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
                <link href="/css/blog.css" rel="stylesheet" type="text/css" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}

LayoutTwo.defaultProps = {
    title: 'isepulveda',
    keywords: "Israel Sepulveda's Web Portfolio",
    description: 'Web Applications built by Israel Sepulveda'
}
