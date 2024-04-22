import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import { SidebarContextProvide } from '../context/sidebarContext.jsx';
import Breadcrumb from './custom/breadcrumb/breadcrumb.jsx';
import Header from './Header.js';

const Layout = ({ children, location, edges }) => {
  const [displayBanner, setDisplayBanner] = React.useState(false);

  React.useEffect(() => {
    setDisplayBanner(() => (location.pathname === '/' ? true : false));
  }, [location.pathname]);

  return (
    <SidebarContextProvide edges={edges}>
      <Header location={location} />
      {displayBanner && (
        <div className="landing-container">
          <div>
            <h1>Magic Pixel</h1>
            <input type="text" className="search-bar" placeholder="Search..." />
          </div>
        </div>
      )}

      <MDXProvider components={mdxComponents}>
        <section className="container-fluid">
          <div className="row">
            <div className="sidebar-container">
              <Sidebar location={location} />
            </div>

            <div className="col">
              <main>
                {!displayBanner && <Breadcrumb location={location} key={location.pathname} />}
                {children}
              </main>
            </div>
            {!displayBanner && (
              <div className="d-none d-lg-block" style={{ width: '300px' }}>
                <RightSidebar location={location} />
              </div>
            )}
          </div>
        </section>
      </MDXProvider>
    </SidebarContextProvide>
  );
};

export default Layout;
