import React, { useState } from "react"
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import './../utils/_variables.scss'
import './index.scss'
import Products from "../components/products"
import Jumbo from '../components/jumbo'
import Carousel from '../components/carousel'
import CarouselItem from '../components/carousel-item'


export const query = graphql`
query GET_DATA {
  allStripePrice {
    edges {
      node {
        id
        unit_amount
        product {
          active
          description
          name
          metadata {
            img
          }
        }
      }
    }
  }
}

`

const IndexPage = ({data}) => {


  const items = [
    {
      src: "https://i.postimg.cc/7JVBDL2m/03de94f5838137ae8d90359519f3a1d7.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/F14N9nSL/107738.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/mtZ49z8Z/b10ce75ce5d68d38844f26013775abf9.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/kBjmvJpQ/e181fe710f90ad53d76a8b8cb8fa0440.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/946gYK2t/elise-mathez-foret-illu02.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/LYBdY2PZ/forest-land-art-nature-spencer-byles-110.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/t7Ny7tdm/Ice-Nation-Square-03-1-2480.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/5Qxh8T5K/il-1140x-N-1947749169-ldm2.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/WF0WW8bR/yuuki-morita-compfinalsign5.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/zyV1dss9/painting-art-artist-artwork-drawing-contemporary-art-photography-illustration-paint-love-design-sket.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/Xrm6t23X/romance-love-couple-heart-preview.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/8FJnWD2z/rhiannon-shephard-forest-rhiannon-shephard-digital-art-illustrator-painting-concept.jpg",
      title: "gallery image"
    },
    {
      src: "https://i.postimg.cc/4KcRGzNP/painting-photo-painting-art-artwork-preview.jpg",
      title: "gallery image"
    },
  ]


  return(
    <>
      <SEO title='Home' description="The best artsy store in the planet, get a piece of someone soul here!!" />
      <Jumbo />
      <Products products={data.allStripePrice.edges} />
        <Carousel>
          {
            items.map((i, _i) => (
              <CarouselItem 
              key={_i}
              src={i.src}
              title={i.title} />
            ))
          }
        </Carousel>
    </>
  )
}

export default IndexPage
