import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = props => {
  //const categorias = ['One Punch', 'Samurai x', 'Goku'];

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map(category => (
          <GifGrid category={category} key={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
