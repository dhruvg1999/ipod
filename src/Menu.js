import React from 'react';
import fw from './fastforward.png';
import bw from './fastbackward.png';
import pp from './pauseplay.png'; 

class Menu extends React.Component{
    render(){
        return(
            <div className="ipod">
                <div className="screen">
                    <div className="menu">
                        Hello
                    </div>
                </div>
                <div className="scroller">
                    <div className="action" id="top"><b>MENU</b></div>
                    <img alt="" className="action" id="right" src={fw} />
                    <img alt="" className="action" id="left" src={bw} />
                    <img alt="" className="action" id="bottom" src={pp} />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/angelo-troiano" title="Angelo Troiano">Angelo Troiano</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                </div>
                <div className="ok-button"></div>
            </div>
        );
    }
}

export default Menu;