import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderLocalNav from './HeaderLocalNav'
import HeaderNavButtons from './HeaderNavButtons';
import Monogram from '../images/monogram.inline.svg'
import { useStaticQuery, graphql } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"


const Header = (props) => {
  const { title } = useSiteMetadata()
  const [scrollClass, setScrollClass] = useState("")
  const listenScrollEvent = (event) => {
    // console.log(props.currentPath)
    //fix - the prop isn't update cuz component doesnt rerender
    if (window.scrollY < 100 && props.type === "homepage") {
      return setScrollClass("sticky-transparent")
    } else if (window.scrollY >= 100 && props.type === "homepage") {
      return setScrollClass("sticky-solid")
    } else if (window.scrollY < 100 && props.type === "regular") {
      return setScrollClass("inlayout-big")
    } else if (window.scrollY >= 100 && props.type === "regular") {
      return setScrollClass("inlayout-small")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allSanityHeader {
        edges {
          node {
            internalLinks {
              ... on SanityNavLinkDropdownGroup {
                categoryTitle
                pages {
                  title
                  slug {
                    current
                  }
                }
                _type
              }
              ... on SanityPage {
                title
                slug {
                  current
                }
                _type
              }
            }
          }
        }
      }
    }
  `)
  const navItemsData = data.allSanityHeader.edges[0].node.internalLinks;

  return (
    <div className={`vmv-header ${scrollClass}`}>
      <StaticImage
        src="../images/Monogram.webp"
        alt="Monogram"
        className={"vmv-header__monogram"}
        width={65}
        height={65}
        placeholder={'none'}
        loading="eager"
      ></StaticImage>
      <HeaderLocalNav items={navItemsData}></HeaderLocalNav>
      <HeaderNavButtons></HeaderNavButtons>
    </div >
  )
}
export default Header
