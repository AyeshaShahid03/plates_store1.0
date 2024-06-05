import { Outlet } from 'react-router-dom';
import SideMenu1 from './SideMenu1';
import ItemTitle from './ItemTitle';
import Client from '../Client/Client';
const Required1 = () => {
  return (
    <>
      <div className="container outlet-container">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-2 pt-md-5 d-none d-lg-block">
            <SideMenu1 />
          </div>
          <div className="col-md-10 pb-5 pt-md-5 ">
            <Outlet />
          </div>
        </div>
      </div>
      <ItemTitle />

      <Client />
    </>
  );
};
export default Required1;
