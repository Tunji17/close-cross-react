import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';
import { TimeSeriesChart } from './TimeSeriesChart';
import star from '../assets/greenstar.png'
import fireicon from '../assets/fireicon.png'

interface Props {
  amount: string,
  amountPercentage: string,
  amountType: string,
  data: number[],
  strokeColor: string,
  invertedAreaGraph: string,
}

export const Card: React.FC<Props>  = (props) => {
  return (
    <div className='card-container'>
      <Row className='align-items-center'>
        <Col className='first-column' md={4}>
          <Row>
            <Col md={2} xs={2}>
              <Image src={star} />
            </Col>
            <Col className='first-column-text my-auto'>
              <h4 className={`${props.amount ===`$00.00` && `text-muted`}`}>ETH 48 hours</h4>
              <span>Crypto</span>
            </Col>
          </Row>
        </Col>
        <Col md={5} className='second-column'>
          <div className='big px-3'>
            <div className='cole'>
              <div className='tp-img'>
                <div>
                <Image src={fireicon} />
                </div>
                <div className='h5div'>
                  <h5>2.2x</h5>
                </div>
              </div>
              <Row>
                <span id='outcome'>Outcome in 6h 41m</span>
              </Row>
            </div>
            <TimeSeriesChart data={props.data} strokeColor={props.strokeColor} />
          </div>
        </Col>
        <Col>
          <div className="inverted-graph-amount">
            <div>
                <Image src={props.invertedAreaGraph} />
            </div>
            <div className="amount-text">
              <h4 className={`${props.amount ===`$00.00` && `text-muted`}`}>{props.amountType === 'percentage' ? props.amountPercentage : props.amount}</h4>
              <span>Total commitment amount</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}
