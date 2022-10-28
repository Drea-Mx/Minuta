import React from 'react'
import Text from '../components/home/Text';
import Layout from "../components/layout/layout";
import { SEO } from '../components/layout/seo';


const IndexPage = () => {

  return(
    <Layout>
      <Text />
      
    </Layout>
  )
}

export const Head = () => (
  <SEO title='Minuta' description='Setting the scene, below the line.' image='image.png' />
)


export default IndexPage
