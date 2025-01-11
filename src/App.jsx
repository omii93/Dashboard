import React from 'react';
import Navbar from "./Components/Navbar";
import Comp1 from "./Components/Comp1";
import Comp2 from "./Components/Comp2";
import Comp3 from "./Components/Comp3";
import Comp4 from "./Components/Comp4";
import PieChart from "./Components/PieChart";
import BubbleChart from "./Components/BubbleChart";
import AreaChart from "./Components/AreaChart";
import ScatterChart from "./Components/ScatterChart";
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function App() {
  return (
    <>
      <div className="container-fluid bg-light  ">
        <div className='row justify-content-center p-0'>
          <div className='col-12 'style={{ backgroundColor: '#33ccff' }} >
            <Navbar />
          </div>
          <div className='row justify-content-center '>
            <div className=" col-11 my-4 bg-white">
              <Comp1 />
            </div>
          </div>


          {/* Second Section with Two Charts Side by Side */}
          <div className="row justify-content-center   mb-4">
            <div className=" col-12 col-md-7 my-3 me-md-3 p-lg-4 rounded shadow-sm bg-white ms">
              <Comp3 />
            </div>

            <div className=" col-12 col-md-4 my-3 p-lg-4 rounded shadow-sm bg-white">
              <Comp2 />

            </div>

          </div>

          {/* Pie Chart and Bubble Chart in a Row */}
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-3 my-3  rounded shadow-sm bg-white me-md-3 ">


              <PieChart />

            </div>
            <div className="col-md-8 my-3 p-md-2 rounded shadow-sm bg-white">
              <div className="">

                <Comp4 />

              </div>
            </div>
          </div>

          {/* Area Chart and Scatter Chart in a Row */}
          <div className="row justify-content-center mb-4  position-relative ">
            <div className="col-md-6 my-3 me-md-3 bg-white rounded shadow-sm ">
              <BubbleChart />
            </div>
            <div className="col-md-5 my-3  bg-white rounded shadow-sm ">
              <ScatterChart />
            </div>
          </div>

          {/* Footer Section */}
          <footer className="text-center py-5 ">
            <p className="text-muted"> Developed by <span className='fw-bold'>omkar Hole</span>  All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;