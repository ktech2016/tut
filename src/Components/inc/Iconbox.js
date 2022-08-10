import React from 'react'

function Iconbox() {
  return (
    <div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped" role="progressbar"  aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-success" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-info" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-warning" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="progress">
          <div class="progress-bar progress-bar-striped bg-danger" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>  
        </div>
    </div>
  )
}

export default Iconbox