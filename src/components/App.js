import '../styles/App.css';
import Hero from './Hero'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

import '../styles/App.css'

function App() {
  return (
    <>
    <div className="mainApp">
      <div className="sideNav">
        <div className="sideNavLogo">
          <h1>T/</h1>
        </div>
        <div className="sideNavBttns">
          <FacebookIcon style={{fontSize: 30}}/>
          <InstagramIcon style={{fontSize: 30}}/>
          <TwitterIcon style={{fontSize: 30}}/>
        </div>
      </div>
      <Hero />
    </div>
    </>
  )
}

export default App;
