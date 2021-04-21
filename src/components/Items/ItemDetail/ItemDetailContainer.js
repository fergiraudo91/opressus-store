import React from 'react';
import { ItemDetail } from './ItemDetail';

export const ItemDetailContainer = () => {

  return (
    <div className="mt-5 ml-5 mr-5 mb-5">
      {
        <>
          <div className="row">
            <ItemDetail />
          </div>
        </>
      }
    </div>
  );
};
