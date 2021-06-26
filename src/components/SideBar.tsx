import { Row, Col, Image } from 'react-bootstrap';
import { AreaChart } from './AreaChart';
import { tradingData } from '../types';
import lifeline from '../assets/lifeline.png';
import trade from '../assets/trade.png';
import wallet from '../assets/Wallet.png';
import { tradingHistoryData } from '../mockdata';

export const SideBar = () => {
  return (
    <div className='sidebar'>
      <Row>
        <Col style={{background: '#181B1C'}}>
          <div className="opentrades">
            <div className="opentext">
              <Image src={lifeline} />
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
              data={tradingHistoryData}
              extractColor={(element: tradingData) => {
                switch (element.verdict) {
                  case "win":
                    return "#9ac802";
                  case "loss":
                    return "#FA4F4F";
                  default:
                    return "#000000";
                }
              }}
            />
          </div>

          <div className="trainingwallet">
          <div className="opentext">
              <Image src={wallet} />
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
