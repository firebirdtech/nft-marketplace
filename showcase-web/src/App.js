import { Download, Features, SectionWrapper } from "./components";
import assests from './assets'

const App = () => {
  return (
    <>
      <SectionWrapper title="You own store of Nifty NFTs.
      Start Selling & Growing"
      description="Buy, store, collect NFTs, exchange & earn crypto. 
      Join 25+ millions people using ProNef Marketplace./>"
      showBtn
      mockupImg={assests.homeHero}
      banner="banner"
      />
    </>
  );
}

export default App;
