import React, { useEffect, useState } from 'react';
import ecoimg from '../../assets/images/ecoimg.png';
const ItemTitle = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1530);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const containerClassName = isDesktop ? 'container' : 'container-fluid';
  return (
    <>
      <div className={`${containerClassName} pt-5`}>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6  d-flex align-items-center pb-5 ps-0">
            <img src={ecoimg} className="img-fluid"></img>
          </div>

          <div className="col-md-6 category-item ">
            <h1 className="pb-3">Item Title</h1>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemTitle;
