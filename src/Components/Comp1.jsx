import { fontString } from "chart.js/helpers";
import "./Comp.css";

// function Comp1() {
//     return (
//         <>
//             <section className="row justify-content-evenly m-3">
//                 <div className="col-11 col-md-3 bg-light  shadow-sm rounded rounded-3">
//                     <div>
//                         <p className='fw-bold fs-3'>Sales: <span className='text-success fw-semibold'>Jan - Apr</span></p>
//                         <p className='fw-bold fs-3'>45%</p>
//                     </div>
//                     <div className="chart-wrapper">
//                         <div className='chart' data-percent="45" id='chart1'>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-11 col-md-3 bg-light  shadow-sm rounded rounded-3">
                    
//                     <div className="chart-wrapper">
//                         <div className="chart" data-percent="75" id='chart2'>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-11 col-md-3 bg-light  shadow-sm rounded rounded-3">
                    
//                     <div className="chart-wrapper">
//                         <div className="chart" data-percent="95" id='chart3'>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Comp1;

import React from 'react';

function Comp1() {
    return (
        <div className="container-fluid">
           


            {/* Pie Charts Section */}

            <section className="row justify-content-centerborder text-dark text-center bg-white">
                <div className="col-11 col-md-3  ">

                    <div className="chart-wrapper">
                        <div className='chart' data-percent="83" id='chart1'>
                          
                            <p className='fw-semibold fs-5'>Analytics</p>
                        </div>
                    </div>
                    <div>
                    <p className='fw-bold percent' style={{ fontSize: '20px' }}>
    83%
</p>

                    </div>
                </div>
                <div className="col-11 col-md-3  ">

                    <div className="chart-wrapper">
                        <div className="chart" data-percent="100" id='chart2'>
                        
                            <p className='fw-semibold fs-5'>Downloads</p>

                        </div>
                    </div>
                    <div>
                    <p className='fw-bold percent' style={{ fontSize: '20px' }}>100%</p>

                    </div>
                </div>
                <div className="col-11 col-md-3  ">

                    <div className="chart-wrapper">
                        <div className="chart" data-percent="75" id='chart3'>
                        <p className='fw-semibold fs-5'>Databases</p>
                          
                        </div>
                    </div>
                    <div>
                    <p className='fw-bold percent' style={{ fontSize: '20px' }}>75%</p>

                    </div>
                </div>
                <div className="col-11 col-md-3   ">

                    <div className="chart-wrapper">
                        <div className="chart" data-percent="65" id='chart4'>
                        <p className='fw-semibold fs-5'>Working tech</p>
                        </div>
                    </div>
                    <div>
                        
                    <p className='fw-bold percent' style={{ fontSize: '20px' }}>65%</p>

                    </div>
                </div>
            </section>

            {/* end of the session */}

        </div>
    );
};

export default Comp1;
