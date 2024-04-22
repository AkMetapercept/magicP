import * as React from 'react';
import Tree from './tree';
import { StaticQuery, graphql } from 'gatsby';

const SidebarLayout = ({ location }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
                title
              }
              frontmatter {
                order
              }
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      return (
        <aside className="left-sidebar">
          <ul className={'sideBarUL'}>
            <Tree edges={allMdx.edges} />
          </ul>
        </aside>
      );
    }}
  />
);

export default SidebarLayout;
