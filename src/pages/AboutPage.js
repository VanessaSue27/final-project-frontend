import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <>
      <h1>This is the About Page!!</h1>
      <h2>How Time Capsule came to be...</h2>
      <p>
        &quot;Time Capsule&quot; is a student project developed by Sofia Vaz Sousa and
        Vanessa Sue Smith for the <a href="https://www.technigo.io/" target="_blank" rel="noopener noreferrer">Technigo Coding Bootamp</a> Graduation assignment.
      </p>
      <p>
        Sofia has experience working as a neonatal ICU nurse where she used to
        write daily log books for premature babies who did not end up
        immediately under their parents&apos; care. Depending on the situation,
        it can sometimes take a couple of hours or even days before the parents
        can visit them. A lot can happen in that time frame, good and bad, so
        memory making and data recording is important and crucial.
      </p>
      <p>
        This log book was like a &quot;time capsule&quot; that parents could
        then carry on and give to that little person when they grow up, and a
        handy way for them to record important data around the baby&apos;s
        growing years.
      </p>
      <p>
        Originally this was done in paper format. Our idea was to take this to
        the next level and create a web app that every parent can use to log on
        details about their child, from birth until they are toddlers: a digital
        &quot;time capsule&quot;. Digitalizing this concept makes it possible to
        log, not only measurements, but also reflections about specific days and
        even milestones.
      </p>
      <h2>Disclaimer</h2>
      <p>Time Capsule was developed for educational purposes only.</p>
      <p>
        The materials provided in this website and any information is intended
        for educational purposes only and should not be considered professional
        advice.
      </p>
      <h2>Technical Aspects</h2>
      <p>
        For a detailed explanation on what technologies were used to build this
        project, please refer to the corresponding GitHub repositories:
      </p>
      <a href="https://github.com/VanessaSue27/final-project-frontend" target="_blank" rel="noopener noreferrer">Time Capsule: Frontend</a>
      <a href="https://github.com/VanessaSue27/final-project-backend" target="_blank" rel="noopener noreferrer">Time Capsule: Backend</a>
      <p>Images and icons assets are provideo by <a href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">Flaticon</a> under the Free Download and Attribution required license.</p>
      <h2>Include our pictures and link to our portfolios</h2>
      <Link to="/signup">Back to Sign Up Page</Link>
    </>
  );
};
