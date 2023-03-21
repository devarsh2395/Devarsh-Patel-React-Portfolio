import React from 'react';
import './style.css';

function Navigation({ currentPage, handlePageChange }) {
  const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a
              href={`#${page}`}
              onClick={() => handlePageChange(page)}
              className={currentPage === page ? 'active' : ''}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;