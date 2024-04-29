import React from 'react'

 const SearchBar = () => {
  return (
    <div>
     <div className="search-form-container ">
      <form className="form-group">
          <input type="text" className="search-bar" placeholder="Search..." style={{marginLeft:'0px'}} />
          <button className="searchicon">
            <i className="fa-solid fa-magnifying-glass" style={{ color: '#1B0C8A' }}></i>
          </button>
       
      </form>
    </div>
    </div>
  )
}

export default SearchBar;
















/////////////////////////////////////////////////////////////////////////////////Search/////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { useStaticQuery, graphql, Link } from 'gatsby';

// const SearchBar = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       allLocalSearchPages {
//         nodes {
//           index
//           store
//         }
//       }
//     }
//   `);

//   const { index, store } = data.allLocalSearchPages;
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const search = (e) => {
//     const query = e.target.value;
//     console.log(query)
//     if (index) {
//       const filteredResults = index
//         .search(query, { expand: true })
//         .map(({ ref }) => store[ref]);
//       setResults(filteredResults);
//     }
//     setQuery(query);
//   };
  

//   return (
//     <>
//      <div className="search-form-container ">
//       <form className="form-group">
//           <input type="text" className="search-bar" value={query}
//         onChange={search} placeholder="Search..." style={{marginLeft:'0px'}} />
//           <button className="searchicon">
//             <i className="fa-solid fa-magnifying-glass" style={{ color: '#1B0C8A' }}></i>
//           </button>
//           <ul>
//         {results.map(page => (
//           <li key={page.id}>
//             <Link to={page.slug}>{page.title}
//             {/* <span dangerouslySetInnerHTML={{ __html: highlightText(page.title) }} /> */}
//             </Link>
//           </li>
//         ))}
//       </ul>
       
//       </form>
//     </div>
//       {/* <input
//         type="text"
//         value={query}
//         onChange={search}
//         placeholder="Search..."
//       />
//       <ul>
//         {results.map(page => (
//           <li key={page.id}>
//             <Link to={page.slug}>{page.title}</Link>
//           </li>
//         ))}
//       </ul> */}
//     </>
//   );
// };

// export default SearchBar;
