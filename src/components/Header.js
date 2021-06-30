import React, { useState, useEffect } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import HeaderLocalNav from './HeaderLocalNav'
import HeaderNavButtons from './HeaderNavButtons';
import Monogram from '../images/monogram.inline.svg'
import { useStaticQuery, graphql } from "gatsby"


export const Header = (props) => {
  const [pageScroll, setPageScroll] = useState("topish")
  const listenScrollEvent = (event) => {
    if (window.scrollY < 100 && props.currentPath === "/") {
      return setPageScroll("topish")
    } else if (window.scrollY > 100 && props.currentPath === "/") {
      return setPageScroll("below")
    } else {
      return setPageScroll("below")
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
    <div className={`vmv-header ${pageScroll}`}>
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
    </div>
  )
}
