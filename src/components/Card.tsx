import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { TimeSeriesChart } from './TimeSeriesChart';
import star from '../images/greenstar.png'
import group from '../images/Group 2.png'

interface Props {
  funds: string,
  fundsPerc: string,
  amountType: boolean,
  data: number[],
  strokeColor: string,
}

export const Card: React.FC<Props>  = (props) => {
  return (
    <div className='cardd'>
      <Row className='align-items-center'>
        <Col className='f-col' md={4}>
          <Row>
            <Col md={2} xs={2}>
              <Image src={star} />
            </Col>
            <Col className='c-txt my-auto'>
            <h4 className={`${props.funds ===`$00.00` && `text-muted`}`}>ETH 48 hours</h4>
            <span>Crypto</span>
            </Col>
          </Row>
        </Col>
        <Col md={5} className='s-col'>
          <div className='big px-3'>
            <div className='cole'>
              <div className='tp-img'>
                <div>
                <Image src={group} />
                </div>
                <div className='h5div'>
                  <h5>2.2x</h5>
                </div>
              </div>
              <Row>
                <span id='outcome'>Outcome in 6h 41m</span>
              </Row>
            </div>
            <div className='imgparent'>
              <div className="imge">
              <TimeSeriesChart data={props.data} strokeColor={props.strokeColor} />
              </div>
            </div>
          </div>
        </Col>
        <Col className='third'>
          <div className="three">
        <div className="">
              {/* <Image src={props.gph} /> */}
            </div> 
            <div className="am-text">
              <h4 className={`${props.funds ===`$00.00` && `text-muted`}`}>{props.amountType === true ? props.fundsPerc : props.funds}</h4>
              <span>Total commitment funds</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
