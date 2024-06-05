import { NavLink, Link } from 'react-router-dom';
import './SideMenu1.css';
import { useEffect } from 'react';
import { sideData, sideData1 } from '../Data/SideData';
const SideMenu1 = () => {
  useEffect(() => {
    let tabLink = document.querySelectorAll('.category-nav');
    let tabLinkContainer = document.querySelector('.all-category-selected');

    tabLinkContainer.addEventListener('click', function (e) {
      let click = e.target.closest('.category-nav');
      // console.log(click)
      if (!click) return;

      tabLink.forEach((t) => {
        t.classList.remove('category-nav_active');
      });
      click.classList.add('category-nav_active');
    });
  }, []);

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="container all-category-selected pb-5 ">
        <div className="row">
          <h1 className="category-head">Categories</h1>
        </div>
        <div className="row user-padding" onClick={handleScroll}>
          <Link as={NavLink} to="/subcategory/Bowls" className="col-md-12">
            <div className="category-nav_active category-nav category-name">
              Bowls
            </div>
          </Link>
        </div>
        {sideData.map((data) => (
          <div
            className="row user-padding "
            onClick={handleScroll}
            key={data.id}
          >
            <Link as={NavLink} to={data.to} className="col-md-12">
              <div className="category-nav category-name">{data.name}</div>
            </Link>
          </div>
        ))}
        <hr style={{ border: '0.5px solid #385F59' }} />
        <div className="row">
          <h1 className="category-head">Other Select</h1>
          {sideData1.map((data) => (
            <div
              className="row user-padding "
              onClick={handleScroll}
              key={data.id}
            >
              <Link as={NavLink} to={data.to} className="col-md-12">
                <div className="category-nav category-name">{data.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideMenu1;
