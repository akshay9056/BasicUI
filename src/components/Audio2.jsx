import React from 'react'
import AudioPlayer from './Audio';
import paths from "../audioMap";

/*
Folder-> Files

Files path -> array..

agentId date/time audio


*/


function Audio2() {
   

    return (
        <div style={{ width: "100%" }}>
          {/* Table with headers */}
          <table className="table table-striped table-hover">
            <thead className="bg-success text-light">
              <tr>
                <th scope="col">
                 <h1 className='fs-6 font-weight-bold'>
                 Agent ID

                 </h1>
                </th>
                <th scope="col" className="">
                <h1 className='fs-6  font-weight-bold'>
                Date
                    </h1>

                  
                </th>
                <th scope="col" className="fs-6 font-weight-bold">
                <h1 className='fs-6  font-weight-bold'>
                Audio
                    </h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Data Rows */}
              {paths.map((vl) => {
                const { path, agentId, date } = vl;
                return (
                  <tr key={agentId + date} className="text-dark">
                    <td className="fs-6 my-auto" >{agentId}</td>
                    <td className="fs-6 my-auto" style={{height:"100%"}}>{date}</td>
                    <td>
                      <AudioPlayer path={path} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
      
      
}

export default Audio2