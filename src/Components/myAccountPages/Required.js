import { Outlet, useParams } from 'react-router-dom';
import SideMenu from './SideMenu';
import { useState } from 'react';
const Required = () => {
  const [showName, setShowName] = useState('My Orders');
  return (
    <>
      <div className="main-heading">
        <h1>{showName}</h1>
      </div>
      <div className="container outlet-container">
        <div className="row d-flex justify-content-center p-0">
          <div className="col-md-3 pt-md-5 pt-0 px-0">
            <SideMenu setShowName={setShowName} />
          </div>
          <div className="col-md-9 pb-5 pt-md-5 pt-0">
            <Outlet setShowName={setShowName} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Required;
