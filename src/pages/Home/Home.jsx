import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import HowItWorks from '../../components/HowItWorks';
import AgroNews from '../../components/AgroNews';

const Home = () => {
    return (
      <div>
        <section>
          <HeroSlider />
        </section>
        {/* <section>
          Latest Crops
        </section> */}
        <HowItWorks />
        <section>
          <AgroNews />
        </section>
      </div>
    );
};

export default Home;