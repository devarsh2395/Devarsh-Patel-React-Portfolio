import React, { useEffect } from "react";

function Navigation(props) {
  const { pages = [], setCurrentPage, currentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
          {pages.map((Page) => (
            <li
              className={`nav-item ${
                currentPage.name === Page.name && "active"
              }`}
              key={Page.name}
            >
              <span
                className="nav-link"
                onClick={() => setCurrentPage(Page)}
              >
                {Page.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;