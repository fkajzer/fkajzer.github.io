import React, { useState } from 'react';
import { GiVrHeadset } from 'react-icons/gi';

import Avatar from './Avatar';
import Links from '../Links';
import Footer from './Footer';

interface Props {
  onClick: () => void;
}

const Profile: React.FC<Props> = ({ onClick }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
    onClick();
  };

  return (
    <div className="profile">
      <Avatar />
      <span>
        Filip Kajzer • <GiVrHeadset />{' '}
      </span>
      <div onClick={handleClick} className={`projectButton ${clicked ? 'clicked' : ''}`}>
        <span>Projects</span>
      </div>
      <Links />
      <div style={{ maxWidth: '300px' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
