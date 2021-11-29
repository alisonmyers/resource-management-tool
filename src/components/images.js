import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const ImageSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const data = useStaticQuery(
        graphql`
        query ReturnImagesQuery {
            allFile(filter: {sourceInstanceName: {eq: "images"}}) {
            edges {
                node {
                id
                name
                relativePath
                childImageSharp{
                    gatsbyImageData(layout:FIXED)
        
                }
                }
            }
            }
        }
    `
    );

    const imageData = data.allFile.edges;

    return(
        <div>
            <h1>Hello</h1>
            <Slider {...settings}>
            {
                imageData.map(({node}, i) => (
                    
                    <div key={i} className="pdf-container">
                        <p>{node.name}</p>
                        <GatsbyImage image={getImage(node)} />
                        
                    </div>
                ))
            }
            </Slider>
        </div>
    )


}


export default ImageSlider