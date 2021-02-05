import React from 'react';

import { Title, MainContainer, SubTitle, TextBox, Text, AboutPageLink, Divider, RocketCardImage, CardImage, PersonalImage } from '../styled-components/MainStyles';
import { ButtonLink } from '../styled-components/SignUpAndLoginStyles';
import rocket from '../assets/rocket.jpg';
import info from '../assets/information.png';
import tech from '../assets/energy-system.png';
import sofia from '../assets/sofia.jpg';
import vanessa from '../assets/vanessa.jpeg';

export const AboutPage = () => {
  return (
    <MainContainer>
      <Title>About Time Capsule</Title>
      <SubTitle>How Time Capsule came to be...</SubTitle>
      <Divider>
        <RocketCardImage src={rocket} alt="rocket" />
        <TextBox>
          <Text>
            &quot;Time Capsule&quot; is a student project developed by Sofia Vaz Sousa and
            Vanessa Sue Smith for the <AboutPageLink href="https://www.technigo.io/" target="_blank" rel="noopener noreferrer">Technigo Development Bootcamp</AboutPageLink> Graduation assignment.
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
        </TextBox>
      </Divider>
      <SubTitle>Disclaimer</SubTitle>
      <Divider>
        <TextBox>
          <Text>
            Time Capsule was developed for educational purposes only.
          </Text>
          <Text>
            The materials provided in this website and any information is intended
            for educational purposes only and should not be considered professional
            advice.
          </Text>
        </TextBox>
        <CardImage src={info} alt="disclaimer" />
      </Divider>
      <SubTitle>Technical Aspects</SubTitle>
      <Divider>
        <CardImage src={tech} alt="disclaimer" />
        <TextBox>
          <Text>
            For a detailed explanation on what technologies were used to build this
            project, please refer to the corresponding GitHub repositories:
            <Text>
              <AboutPageLink href="https://github.com/VanessaSue27/final-project-frontend" target="_blank" rel="noopener noreferrer">Time Capsule: Frontend</AboutPageLink> 
            </Text>
            <Text>
              <AboutPageLink href="https://github.com/VanessaSue27/final-project-backend" target="_blank" rel="noopener noreferrer">Time Capsule: Backend</AboutPageLink>
            </Text>
            Images and icons assets are provided by <AboutPageLink href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</AboutPageLink>,
            <AboutPageLink href="https://icons8.com/" target="_blank" rel="noopener noreferrer"> ICONS8</AboutPageLink> and <AboutPageLink href="https://undraw.co/" target="_blank" rel="noopener noreferrer">unDraw </AboutPageLink>
            under the Open Source or Free Download and Attribution required license.
          </Text>
        </TextBox>
      </Divider>
      <SubTitle>Project Developed by:</SubTitle>
      <Divider>
        <PersonalImage src={sofia} alt="sofia" />
        <TextBox>
          <SubTitle>Sofia Vaz Sousa</SubTitle>
          <AboutPageLink href="https://sofiavazs.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</AboutPageLink>
          <Text>Hello! I&apos;m Sofia and I was raised surrounded by MS-DOS and command lines,
            I worked as a Nurse for 13 years before becoming a developer and I&apos;m an avid VR games player! <span role="img" aria-label="emoji">👾</span>
          </Text>
        </TextBox>
      </Divider>
      <Divider>
        <TextBox>
          <SubTitle>Vanessa Sue Smith</SubTitle>
          <AboutPageLink href="https://vanessa-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Portfolio</AboutPageLink>
        </TextBox>
        <PersonalImage src={vanessa} alt="vanessa" />
      </Divider>
      <ButtonLink to="/signup">Back to Sign Up Page</ButtonLink>
    </MainContainer>
  );
};
