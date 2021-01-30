import React, { useRef } from 'react';

import HeaderComponent from './components/Header.component';
import HeroComponent from './components/Hero.component';
import AboutComponent from './components/About.component';
import SkillsComponent from './components/Skills.components';
import PortfolioComponent from './components/Portfolio.component';
import ContactComponent from './components/Contact.component';
import FooterComponent from './components/Footer.component';

const App = () => {
	const refAbout = useRef(null);
	const refSkills = useRef(null);
	const refPortfolio = useRef(null);
	const refContact = useRef(null);

	const refProps = [refAbout, refSkills, refPortfolio, refContact];

	return (
		<div className="prodz-wrapper">
			<HeaderComponent refProps={refProps} />
			<HeroComponent />
			<AboutComponent refProp={refAbout} />
			<SkillsComponent refProp={refSkills} />
			<PortfolioComponent refProp={refPortfolio} />
			<ContactComponent refProp={refContact} />
			<FooterComponent />
		</div>
	);
};
export default App;
