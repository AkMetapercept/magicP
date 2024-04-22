import * as React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import config from '../../config';
import { Sidebar, ListItem } from './styles/Sidebar';

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      console.log('🚀 ~ file: rightSidebar.js:23 ~ allMdx:', allMdx);
      let currentData = null;
      const generateListItems = (items) => {
        console.log('🚀 ~ file: rightSidebar.js:59 ~ generateListItems ~ items:', items);
        return (
          <ul>
            {items?.map((item, index) => (
              <li key={index}>
                <a href={`#${item.title.replace(/ /g, '').toLowerCase()}`}>{item.title}</a>
                {item.items && generateListItems(item.items)}{' '}
                {/* Recursively call if there are sub-items */}
              </li>
            ))}
          </ul>
        );
      };

      let finalNavItems;

      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        const navItems = allMdx.edges.map((item, index) => {
          let innerItems;

          if (item !== undefined) {
            if (
              item.node.fields.slug === location.pathname ||
              config.gatsby.pathPrefix + item.node.fields.slug === location.pathname
            ) {
              currentData = item.node.tableOfContents.items;
            }
          }
          if (innerItems) {
            finalNavItems = innerItems;
          }
        });
      }

      if (finalNavItems && finalNavItems.length) {
        return (
          <>
            {currentData && (
              <Sidebar>
                <h6 className={'rightSideTitle '}>CONTENTS</h6>
                <ul className={'rightSideBarUL'}>
                  {/* {finalNavItems} */}
                  {generateListItems(currentData)}
                </ul>
              </Sidebar>
            )}
          </>
        );
      } else {
        return (
          <>
            {currentData && (
              <Sidebar>
                <h6 className={'rightSideTitle '}>CONTENTS</h6>
                <ul className={'rightSideBarUL'}>
                  {/* {finalNavItems} */}
                  {generateListItems(currentData)}
                </ul>
              </Sidebar>
            )}
          </>
        );
      }
    }}
  />
);

export default SidebarLayout;
