import { NavLink, Link } from 'react-router-dom';
import './SideMenu.css';
import { useEffect } from 'react';
const SideMenu = ({ setShowName }) => {
  useEffect(() => {
    let tabLink = document.querySelectorAll('.order-nav');
    let tabLinkContainer = document.querySelector('.all-selected');

    tabLinkContainer.addEventListener('click', function (e) {
      let click = e.target.closest('.order-nav');
      // console.log(click)
      if (!click) return;

      tabLink.forEach((t) => {
        t.classList.remove('order-nav_active');
      });
      click.classList.add('order-nav_active');
    });
  }, []);

  const handle1 = () => {
    setShowName('My Orders');
    window.scrollTo(0, 0);
  };
  const handle2 = () => {
    setShowName('Subscription');
    window.scrollTo(0, 0);
  };
  const handle3 = () => {
    setShowName('Billing and Shipping');
    window.scrollTo(0, 0);
  };
  const handle4 = () => {
    setShowName('Add new card');
    window.scrollTo(0, 0);
  };

  return (
    <div className="container all-selected pb-5 ps-0 pe-md-5">
      <div className="row user-padding " onClick={handle1}>
        <Link
          as={NavLink}
          to="/user/order"
          className="col-md-12  order-nav_active order-nav-small order-nav a_weight"
        >
          <i className="fa-solid fa-circle-user pe-2"></i> My Orders
        </Link>
      </div>
      <div className="row user-padding" onClick={handle2}>
        <Link
          as={NavLink}
          to="/user/subscription"
          className="col-md-12  order-nav a_weight order-nav-small"
        >
          <i className="fa-sharp fa-solid fa-calendar-days pe-2"></i>{' '}
          Subscription
        </Link>
      </div>
      <div className="row user-padding" onClick={handle3}>
        <Link
          as={NavLink}
          to="/user/save-billing-and-shipping"
          className="col-md-12  order-nav a_weight order-nav-small"
        >
          <i className="fa-solid fa-truck-fast pe-2"></i> Billing & Shipping
        </Link>
      </div>
      <div className="row user-padding" onClick={handle4}>
        <Link
          as={NavLink}
          to="/user/addNewCard"
          className="col-md-12  order-nav a_weight order-nav-small"
        >
          <i className="fa-solid fa-user pe-2"></i> Account Setting
        </Link>
      </div>
      <div className="row">
        <Link
          as={NavLink}
          className="col-md-12 order-nav a_weight order-nav-small"
        >
          <i className="fa-solid fa-right-from-bracket pe-2"></i> Logout
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
