import React, { useEffect, useState } from 'react';
import config from '../../../config';
import TreeNode from './treeNode';
import { useSidebarContext } from '../../context/sidebarContext';

const calculateTreeData = (edges) => {
  //  (landing page to be add or not)
  const originalData = config.sidebar.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== '/'
      )
    : edges;

  const tree = originalData.reduce(
    (
      accu,
      {
        node: {
          fields: { slug, title },
          frontmatter: { order },
        },
      }
    ) => {
      const parts = slug.split('/');

      let { items: prevItems } = accu;

      const slicedParts =
        config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const slicedLength =
        config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

      const existingItem = prevItems.find(({ label }) => label === parts[slicedLength]);

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
          order,
        });
      }
      // ==============custom code to sort by order frontmatter============================
      function sortNestedArrayByKey(arr) {
        // Sort the array of objects based on the specified key
        arr.items.sort((a, b) => a.order - b.order);

        arr.items.forEach((obj) => {
          if (obj.items) {
            sortNestedArrayByKey(obj);
          }
        });
      }
      sortNestedArrayByKey(accu);

      return accu;
    },
    { items: [] }
  );

  return tree;
};

const Tree = ({ edges }) => {
  const { urlObject, setUrlObject } = useSidebarContext();

  let [treeData] = useState(() => {
    return calculateTreeData(edges);
  });
  useEffect(() => {
    setUrlObject(() => treeData);
  }, [treeData]);

  return <TreeNode className={`hideFrontLine firstLevel`} {...treeData} />;
};

export default Tree;
