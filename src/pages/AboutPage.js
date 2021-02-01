import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Title, MainContainer, SubTitle, Text, AboutPageLink } from 'styled-components/GlobalStyles';

export const AboutPage = () => {
  return (
    <Section>
      <MainContainer>
        <Title>About Time Capsule</Title>
        <SubTitle>How Time Capsule came to be...</SubTitle>
        <Text>
        &quot;Time Capsule&quot; is a student project developed by Sofia Vaz Sousa and
        Vanessa Sue Smith for the <a href="https://www.technigo.io/" target="_blank" rel="noopener noreferrer">Technigo Development Bootamp</a> Graduation assignment.
        </Text>
        <Text>
        Sofia has experience working as a neonatal ICU nurse where she used to
        write daily log books for premature babies who did not end up
        immediately under their parents&apos; care. Depending on the situation,
        it can sometimes take a couple of hours or even days before the parents
        can visit them. A lot can happen in that time frame, good and bad, so
        memory making and data recording is important and crucial.
        </Text>
        <Text>
        This log book was like a &quot;time capsule&quot; that parents could
        then carry on and give to that little person when they grow up, and a
        handy way for them to record important data around the baby&apos;s
        growing years.
        </Text>
        <Text>
        Originally this was done in paper format. Our idea was to take this to
        the next level and create a web app that every parent can use to log on
        details about their child, from birth until they are toddlers: a digital
        &quot;time capsule&quot;. Digitalizing this concept makes it possible to
        log, not only measurements, but also reflections about specific days and
        even milestones.
        </Text>
        <SubTitle>Disclaimer</SubTitle>
        <Text>Time Capsule was developed for educational purposes only.
        The materials provided in this website and any information is intended
        for educational purposes only and should not be considered professional
        advice.
        </Text>
        <SubTitle>Technical Aspects</SubTitle>
        <Text>
        For a detailed explanation on what technologies were used to build this
        project, please refer to the corresponding GitHub repositories:
        </Text>
        <AboutPageLink href="https://github.com/VanessaSue27/final-project-frontend" target="_blank" rel="noopener noreferrer">Time Capsule: Frontend</AboutPageLink>
        <a href="https://github.com/VanessaSue27/final-project-backend" target="_blank" rel="noopener noreferrer">Time Capsule: Backend</a>
        <Text>
        Images and icons assets are provided by <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a>,
          <a href="https://icons8.com/" target="_blank" rel="noopener noreferrer"> ICONS8</a> and <a href="https://undraw.co/" target="_blank" rel="noopener noreferrer">unDraw </a>
        under the Open Source or Free Download and Attribution required license.
        </Text>
        <SubTitle>Project Developed by:</SubTitle>
        <div>
          <h4>Sofia Vaz Sousa</h4>
          <a href="https://sofiavazs.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>

        <div>
          <h4>Vanessa Sue Smith</h4>
          <a href="https://vanessa-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>
        <Link to="/signup">Back to Sign Up Page</Link>

      </MainContainer>

    </Section>

  );
};
