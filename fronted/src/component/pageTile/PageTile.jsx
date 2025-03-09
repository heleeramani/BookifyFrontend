import React from "react";
import "./PageTile.css";

const PageTile = ({ title, breadcrumbs }) => {
  return (
    <header className="page-tile-about-us-header">
      <div className="page-tile-container">
        <h1 className="page-tile-page-title">{title}</h1>
        <nav>
          <ol className="page-tile-breadcrumb">
            {breadcrumbs.map((breadcrumb, index) => (
              <li
                key={index}
                className={`page-tile-breadcrumb-item ${breadcrumb.active ? "active" : ""}`}
              >
                {breadcrumb.active ? (
                  breadcrumb.label
                ) : (
                  <a href={breadcrumb.link}>{breadcrumb.label}</a>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default PageTile;
