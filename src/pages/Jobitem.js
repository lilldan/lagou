import React, { Component } from 'react';
import {IndexLink,Link} from 'react-router';


class Jobitem extends Component {
  render() {
    let {job}=this.props
    return (
      
          
          <li className="activeable list-item" data-positionid="1530285" data-companyid="35514">
            <img src={job.companyLogo} className="item-logo"/>
            <div className="item-desc">
                <h4 className="item-title">{job.companyName}</h4>
                <p className="item-info">
                    <span className="item-pos">
                        {job.positionName}
                    </span>
                    <span className="item-salary">{job.salary}</span>
                </p>
                <p className="item-time">{job.createTime}</p>
            </div>
        </li>
      
    );
  }
}

export default Jobitem;