import React from 'react';
import './paginator.css'

const Paginator = ({pages, currentPage, onPageChanged}) => {

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    {pages.map((p, i) => <li key={i} className="page-item">
                        <a className={currentPage === p ? "active page-link" : "page-link"}
                           href="#"
                           onClick={() => { onPageChanged(p) }}
                        >{p}</a>
                    </li>)}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Paginator;