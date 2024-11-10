import React from 'react'

function Dropdown() {
  return (
    <div>
        <div className="dropdown">
  <button className="btn btn-light text-success  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Parameter
  </button>
  <ul className="dropdown-menu">
    <li><button className="dropdown-item" type="button" defaultChecked>Agent Id</button></li>
    <li><button className="dropdown-item" type="button">Interaction Id</button></li>
  </ul>
</div>
    </div>
  )
}

export default Dropdown