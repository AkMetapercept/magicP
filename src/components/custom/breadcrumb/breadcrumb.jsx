import React, { useEffect, useState } from 'react';
import { useSidebarContext } from '../../../context/sidebarContext';
import { Link } from 'gatsby';

const Breadcrumb = ({ location }) => {
  const { urlObject } = useSidebarContext();
  const [breadcrumbs, setBreadcrumb] = React.useState(null);

  const generateBreadcrumb = (data) => {
    data.unshift({
      url: '/',
      title: 'Home',
    });
    const tempBreadcrumbs = data?.map((obj, index) => {
      const url = obj.url;
      const label = obj.title;
      return (
        <React.Fragment key={url}>
          {index !== data.length - 1 ? <Link to={url}>{label}</Link> : <span>{obj.title}</span>}
          {index < data.length - 1 && ' / '}
        </React.Fragment>
      );
    });
    setBreadcrumb(tempBreadcrumbs);
  };

  function findItemHierarchy(items, selectedLabel) {
    const sortedArr = [];
    for (const item of items) {
      if (selectedLabel.startsWith(item.url)) {
        sortedArr.push(item);
      }
    }
    sortedArr.sort((a, b) => a.url.length - b.url.length);
    generateBreadcrumb(sortedArr);
  }

  function flatten(arr) {
    return arr.reduce((acc, curr) => {
      // Push the current object into the accumulator array
      acc.push(curr);
      // If the current object has a 'children' property which is an array, recursively flatten it
      if (curr.items) {
        acc.push(...flatten(curr.items));
      }
      return acc;
    }, []);
  }

  useEffect(() => {
    const pathnames = location.pathname;
    if (urlObject?.items) {
      const objects = flatten(urlObject.items);
      if (objects) {
        findItemHierarchy(objects, pathnames);
      }
    }
  }, [location.pathname, urlObject]);

  return <div className="mt-3">{breadcrumbs}</div>;
};

export default Breadcrumb;
