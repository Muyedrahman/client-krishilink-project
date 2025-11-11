import React from 'react';
import HeroSlider from '../../components/HeroSlider';
import HowItWorks from '../../components/HowItWorks';
import AgroNews from '../../components/AgroNews';
import FeaturedFarmers from '../../components/FeaturedFarmers';
import AgroEvents from '../../components/AgroEvents';

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
        <section>
          <FeaturedFarmers />
        </section>
        <section>
          <AgroEvents />
        </section>
      </div>
    );
};

export default Home;