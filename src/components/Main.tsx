import React, {useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from './Card'
import SideBar from './SideBar'

interface Props {
  
}

const trendsData = [{
  funds: '$34,346.00',
  fundsPerc: '40.5%',
  data: [4, 8, -6, 0, 8, 0, -2, -4, 4],
  strokeColor: "#9ac802"
},
{
  funds: '$329,146.00',
  fundsPerc: '90.5%',
  data: [4, 8, -6, 0, 8, 0, -2, -4, 4],
  strokeColor: "#9ac802"
},
{
  funds: '$129,146.00',
  fundsPerc: '80.5%',
  data: [4, 8, -6, 0, 8, 0, -2, -4, 4],
  strokeColor: "#9ac802"
},
{
  funds: '$46.00',
  fundsPerc: '0.01%',
  data: [-8, 6, -4, 2, 0, -2, 4, -6, -3],
  strokeColor: "#FA4F4F"
},
{
  funds: '$00.00',
  fundsPerc: '0.00%',
  data: [-8, 6, -4, 2, 0, -2, 4, -6, 0],
  strokeColor: "#666E79"
}]
const Main = (props: Props) => {
  const [amountType, setAmountType] = useState(false)
  return (
    <div className='mainp'>
      <Row className='m-row'>
        <Col className='sb' md={3}>
          <SideBar />
        </Col>
        <Col className='mp' md={9}>
          <div className="topbar mb-5">
            <div className="filter">
              <span>Select assets, types and period:</span>
              <span className='span'>FILTER</span>
            </div>
            <div className="unit">
              <span>Units:</span>
              <span className='s1' onClick={() => setAmountType(true)} id={`${amountType === true ? `s2` : `s1`}`}>%</span>
              <span className='s2' onClick={() => setAmountType(false)} id={`${amountType === false ? `s2` : `s1`}`}>$</span>
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
              trendsData.map((item) =>
                (<Card
                  funds={item.funds}
                  fundsPerc={item.fundsPerc}
                  amountType={amountType}
                  data={item.data}
                  strokeColor={item.strokeColor} />))
            }
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Main
