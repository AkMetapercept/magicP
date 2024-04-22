import * as React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';
import { useSidebarContext } from '../../context/sidebarContext';

const TreeNode = ({ className = '', url, title, items, ...rest }) => {
  const { collapsed, toggle } = useSidebarContext();
  const isCollapsed = collapsed[url];

  const collapse = () => {
    toggle(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof window !== 'undefined') {
    location = window.location;
  }

  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  React.useEffect(() => {
    toggle(location?.pathname);
  }, [location?.pathname]);

  return (
    <li className={calculatedClassName}>
      {title && (
        <Link to={url} onClick={collapse}>
          {title}
          {title && hasChildren ? (
            <button aria-label="collapse" className="collapser">
              {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
            </button>
          ) : null}
        </Link>
      )}
      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode key={item.url + index.toString()} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
