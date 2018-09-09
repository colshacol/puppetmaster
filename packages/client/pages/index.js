import Head from 'next/head'

export default (props) => {
  return (
    <div>
      <PageHead />
      Hello dogs!
    </div>
  )
}

const PageHead = (props) => {
  return (
    <Head>
      <title>puppetmaster | home</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
  )
}
