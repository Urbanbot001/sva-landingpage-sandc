import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './components/Form/Form'; // Main landing page
import SeekersPage from './pages/SeekersPage'; // Seekers page
import SeekersSubpagetwo from './subpages/SeekersSubpagetwo'; // Seekers subpage two
import SeekersSubpagethree from './subpages/SeekersSubpagethree'; // Seekers subpage three
import SeekersSubpagefour from './subpages/SeekersSubpagefour'; // Seekers subpage four
import SeekersSubpagefive from './subpages/SeekersSubpagefive'; // Seekers subpage five
import SeekersSubpagesix from './subpages/SeekersSubpagesix'; // Seekers subpage six
import ExpertsPage from './pages/ExpertsPage'; // Experts page
import ExpertsSubpageone from './subpages/ExpertsSubpageone'; // Experts subpage one
import ExpertsSubpagetwo from './subpages/ExpertsSubpagetwo'; // Experts subpage two
import ExpertsSubpagethree from './subpages/ExpertsSubpagethree'; // Experts subpage three
import ExpertsSubpagefour from './subpages/ExpertsSubpagefour'; // Experts subpage four
import ExpertsSubpagefive from './subpages/ExpertsSubpagefive'; // Experts subpage five
import Section from './subpages/Section'; // Section
import DarkTheme from './subpages/DarkTheme'; // DarkTheme
import DarkThemetwo from './subpages/DarkThemetwo'; // DarkThemetwo
import DarkThemethree from './subpages/DarkThemethree'; // DarkThemethree
import DarkThemefour from './subpages/DarkThemefour'; // DarkThemefour
import HeroSection from './subpages/HeroSection'; // Hero Section
import HeroSectiontwo from './subpages/HeroSectiontwo'; // Hero Section Two
import HeroSectionthree from './subpages/HeroSectionthree'; // Hero Section Three
import HeroSectionfour from './subpages/HeroSectionfour'; // Hero Section Four
import SunTheme from './subpages/SunTheme'; // Sun Theme
import IconOverlay from './subpages/IconOverlay'; // Icon Overlay
import IconOverlaytwo from './subpages/IconOverlaytwo'; // Icon Overlaytwo
import IconOverlaythree from './subpages/IconOverlaythree'; // Icon Overlaythree
import IconOverlayfour from './subpages/IconOverlayfour'; // Icon Overlayfour
import SvaVedatwo from './subpages/SvaVedatwo'; // SvaVeda page Two
import Sanctuary from './subpages/Sanctuary';
import Sanctuarytwo from './subpages/Sanctuarytwo';
import WellnessExperts from './subpages/WellnessExperts';
import SvaVeda from './subpages/SvaVeda';
import WellnessSeekers from './subpages/WellnessSeekers';
import HeroSectionfive from './subpages/HeroSectionfive';
import PhysicalWellbeing from './subpages/PhysicalWellbeing';
import HeroSectionsix from './subpages/HeroSectionsix';
import WellnessServices from './subpages/WellnessServices ';
import WellnessServicestwo from './subpages/WellnessServicestwo ';
import HeroSectionseven from './subpages/HeroSectionseven';
import BodyMassage from './subpages/BodyMassage';
import HeroSectioneight from './subpages/HeroSectioneight';
import CarouselPage from './subpages/CarouselPage';
import HeroSectionnine from './subpages/HeroSectionnine';
import ExpertSeeker from './subpages/ExpertSeeker';



const App = () => {
  return (
    <Routes>
      {/* Default route for "/" */}
      <Route path="/" element={<Form />} />

      {/* Other routes */}
      <Route path="/form" element={<Form />} />
      <Route path="/seekerspage" element={<SeekersPage />} />
      <Route path="/seekerssubpagetwo" element={<SeekersSubpagetwo />} />
      <Route path="/seekerssubpagethree" element={<SeekersSubpagethree />} />
      <Route path="/seekerssubpagefour" element={<SeekersSubpagefour />} />
      <Route path="/seekerssubpagefive" element={<SeekersSubpagefive />} />
      <Route path="/seekerssubpagesix" element={<SeekersSubpagesix />} />
      <Route path="/expertspage" element={<ExpertsPage />} />
      <Route path="/expertssubpageone" element={<ExpertsSubpageone />} />
      <Route path="/expertssubpagetwo" element={<ExpertsSubpagetwo />} />
      <Route path="/expertssubpagethree" element={<ExpertsSubpagethree />} />
      <Route path="/expertssubpagefour" element={<ExpertsSubpagefour />} />
      <Route path="/expertssubpagefive" element={<ExpertsSubpagefive />} />
      <Route path="/section" element={<Section />} />
      <Route path="/darktheme" element={<DarkTheme />} />
      <Route path="/darkthemetwo" element={<DarkThemetwo />} />
      <Route path="/darkthemethree" element={<DarkThemethree />} />
      <Route path="/darkthemefour" element={<DarkThemefour />} />
      <Route path="/herosection" element={<HeroSection />} />
      <Route path="/herosectiontwo" element={<HeroSectiontwo />} />
      <Route path="/herosectionthree" element={<HeroSectionthree />} />
      <Route path="/herosectionfour" element={<HeroSectionfour />} />
      <Route path="/suntheme" element={<SunTheme />} />
      <Route path="/iconoverlay" element={<IconOverlay />} />
      <Route path="/iconoverlaytwo" element={<IconOverlaytwo />} />
      <Route path="/iconoverlaythree" element={<IconOverlaythree />} />
      <Route path="/iconoverlayfour" element={<IconOverlayfour />} />
      <Route path="/svaveda" element={<SvaVeda />} />
      <Route path="/svavedatwo" element={<SvaVedatwo />} />
      <Route path="/sanctuary" element={<Sanctuary />} />
      <Route path="/sanctuarytwo" element={<Sanctuarytwo />} />
      <Route path="/wellnessexperts" element={<WellnessExperts />} />
      <Route path="/wellnessseekers" element={<WellnessSeekers />} />
      <Route path="/herosectionfive" element={<HeroSectionfive />} />
      <Route path="/physicalwellbeing" element={<PhysicalWellbeing />} />
      <Route path="/herosectionsix" element={<HeroSectionsix />} />
      <Route path="/wellnessservices" element={<WellnessServices />} />
      <Route path="/wellnessservicestwo" element={<WellnessServicestwo />} />
      <Route path="/herosectionseven" element={<HeroSectionseven />} />
      <Route path="/bodymassage" element={<BodyMassage />} />
      <Route path="/herosectioneight" element={<HeroSectioneight />} />
      <Route path="/carouselpage" element={<CarouselPage />} />
      <Route path="/herosectionnine" element={<HeroSectionnine />} />
      <Route path="/expertseeker" element={<ExpertSeeker />} />
    </Routes>
  );
};

export default App;
