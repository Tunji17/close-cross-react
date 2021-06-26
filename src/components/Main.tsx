import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';
import { Card } from './Card';
import { SideBar } from './SideBar';
import { trendsData } from '../mockdata'

export const Main = () => {

  const [amountType, setAmountType] = useState('fiat')

  return (
    <>
      <Row>
        <Col className='side-bar' md={3}>
          <SideBar />
        </Col>
        <Col className='main-container' md={9}>
          <div className="topbar mb-5">
            <div className="filter">
              <span>Select assets, types and period:</span>
              <span className='span'>FILTER</span>
            </div>
            <div className="unit">
              <span>Units:</span>
              <span className='units-percentage' onClick={() => setAmountType('percentage')} id={`${amountType === 'percentage' ? `units-fiat` : `units-percentage`}`}>%</span>
              <span className='units-fiat' onClick={() => setAmountType('fiat')} id={`${amountType === 'fiat' ? `units-fiat` : `units-percentage`}`}>$</span>
            </div>
            <div className="sort">
              <span>Sort by</span>
              <select>
                <option value="">Trending</option>
              </select>
            </div>
          </div>
          <div className="card-div">
            {
              trendsData.map((item, index) =>
                (<Card
                  key={index}
                  amount={item.amount}
                  amountPercentage={item.amountPercentage}
                  amountType={amountType}
                  data={item.data}
                  strokeColor={item.strokeColor}
                  invertedAreaGraph={item.invertedAreaGraph} />))
            }
          </div>
        </Col>
      </Row>
    </>
  )
};
