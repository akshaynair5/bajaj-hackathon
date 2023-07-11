import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar(){
    return(
        <div className='navbar'>
            <div className='section1'>
                <div className='s1-I1'>
                    <p>Nifty</p>
                    <p>18,233.14</p>
                    <p>223344.987++</p>
                </div>
                <div className='s1-I1'>
                    <p>Nifty</p>
                    <p>18,233.14</p>
                    <p>223344.987++</p>
                </div>

                <button className='search'>S</button>
                <button className='profile'>P</button>
            </div>
            <div className='section2'>
                <Link to='/myStocks'>My Stocks</Link>
                <Link to='nifty'>NIFTY50</Link>
                <Link to='Hacked'>You've been Hacked</Link>
                <button className='options'>O</button>
            </div>
        </div>
    )
}

export default Navbar