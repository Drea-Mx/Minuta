import React from 'react'
import Text from '../components/home/Text';
import Layout from "../components/layout/layout";
import { Seo } from '../components/layout/Seo';


const IndexPage = () => {

  return(
    <Layout>
      <Text />
      
    </Layout>
  )
}

export const Head = () => (
  <Seo title='Minuta' description='Setting the scene, below the line.' image='image.png' />
)


export default IndexPage
