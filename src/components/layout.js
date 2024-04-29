import * as React from 'react';
import { MDXProvider } from '@mdx-js/react';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import { SidebarContextProvide } from '../context/sidebarContext.jsx';
import Breadcrumb from './custom/breadcrumb/breadcrumb.jsx';
import Header from './Header.js';
import Footer from './footer/footer.js';

const Layout = ({ children, location, edges }) => {
  const [displayBanner, setDisplayBanner] = React.useState(false);

  React.useEffect(() => {
    setDisplayBanner(() => (location.pathname === '/' ? true : false));
  }, [location.pathname]);

  return (
    <SidebarContextProvide edges={edges}>
      <Header location={location} />
      {displayBanner && (
        <>
          <div className="landing-container ">
            <div className="container">
              <h1 style={{ color: 'white' }}>Magic Pixel</h1>
              {/*  <h4 style={{color:'white'}}>Everything you need to get your software documentation online.</h4>
             <form className='form-group pt-3'>
    <div style={{ position: 'relative' }}>
        <input type="text" className="search-bar" placeholder="Search..."/>
        <button className='searchicon' >  
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#1B0C8A' }}></i>
        </button>
    </div>
</form> */}
            </div>
          </div>
        </>
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
              <Footer />
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
