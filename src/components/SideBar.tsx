import React, {useState} from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { AreaChart } from './AreaChart';
import { tradingData } from '../types';
import stroke from '../images/Vector (Stroke).png';
import trade from '../images/trade.png';
import Wallet from '../images/Wallet.png';

export interface IAppProps {
}

const tradingHistoryData = [
  { x: 1, y: 200, verdict: "win" },
  { x: 2, y: 305, verdict: "win" },
  { x: 3, y: 407, verdict: "win" },
  { x: 4, y: 402, verdict: "loss" },
  { x: 5, y: 301, verdict: "loss" },
  { x: 6, y: 412, verdict: "win" },
  { x: 7, y: 518, verdict: "win" },
  { x: 8, y: 740, verdict: "win" },
  { x: 9, y: 600, verdict: "loss" },
  { x: 10, y: 357, verdict: "loss" },
  { x: 11, y: 690, verdict: "win" },
  { x: 12, y: 807, verdict: "win" },
  { x: 13, y: 920, verdict: "win" },
  { x: 14, y: 490, verdict: "loss" },
  { x: 15, y: 370, verdict: "loss" },
  { x: 16, y: 260, verdict: "loss" }
];

export default function App (props: IAppProps) {
  const [tradinghistory] = useState(tradingHistoryData);
  return (
    <div className='sidebar'>
      <Row>
        <Col style={{background: '#181B1C'}}>
          <div className="opentrades">
            <div className="opentext">
              <Image src={stroke} />
              <span>OPEN TRADES</span>
              <i className="fas fa-angle-right"></i>
            </div>
            <div className="inprogress my-3">
              <Row className='heads'>
                <Col>Trades in progress</Col>
                <Col>Closest outcome</Col>
              </Row>
              <Row className='numbers'>
                <Col><h4>15</h4></Col>
                <Col><h4>25m 40s <br/> <span>ETH 48 hour</span></h4></Col>
              </Row>
            </div>
          </div>

          <div className="tradinghistory">
            <div className="opentext">
              <Image src={trade} />
              <span>TRADING HISTORY</span>
              <i className="fas fa-angle-right"></i>
            </div>
            <div className="time my-3">
              <span>Last</span>
              <span>day</span>
              <span>week</span>
              <span>month</span>
              <span>all</span>
            </div>
            <div className="totaltrades">
              <Row className='heads'>
                <Col>Total Trades</Col>
                <Col>Profit</Col>
              </Row>
              <Row className='numbers'>
                <Col><h4>245</h4></Col>
                <Col><h4>+21.5%</h4></Col>
              </Row>
            </div>
            <AreaChart
              data={tradinghistory}
              extractColor={(element: tradingData) => {
                switch (element.verdict) {
                  case "win":
                    return "#9ac802";
                  case "loss":
                    return "#FA4F4F";
                  default:
                    return "white";
                }
              }}
            />
          </div>

          <div className="trainingwallet">
          <div className="opentext">
              <Image src={Wallet} />
              <span>TRAINING WALLET</span>
              <i className="fas fa-angle-right"></i>
            </div>
            <div className="trd my-2">
              <span>Trading</span>
              <div className="amount">
                <div className='dol'>$ 34,752.00</div>
                <div className='topu'><button>TOP UP</button></div>
              </div>
            </div>
            <div className="trd">
              <span>Holding</span>
              <div className="amount">
                <div className='doll'>$ 4,102.00</div>
                <div className='topu topuu'><button>BUY DAI</button></div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
