import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
  <div className="flex-shrink-0 flex items-center">
    <Link to="/" className="text-xl font-bold">Sklep</Link>
  </div>
);

export default Logo;