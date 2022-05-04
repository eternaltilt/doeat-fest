/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import style from './FestCard.module.css';

// eslint-disable-next-line react/prop-types
function FestCard({ name, description, photo, adress }) {
  const [modalIsOpened, SetModalIsOpened] = useState(false);
  const openModal = () => {
    SetModalIsOpened(true);
  };
  const closeModal = () => {
    SetModalIsOpened(false);
  };
  return (
    <div>
      <div className={style.background} onClick={openModal}>
        <div>
          <img
            className="activator"
            style={{ height: '200px', width: '100%' }}
            src={photo}
            alt="img"
          />
        </div>
        <div className="card-content">
          <span className={style.cardText}> {name} </span>
          <p className={style.cardText}>Адрес: {adress}</p>
        </div>
      </div>

      {modalIsOpened && (
        <div>
          <div className={style.hystmodal} id="myModal">
            <div className={style.hystmodal__wrap} onClick={closeModal}>
              <div>
                <div className={style.hystmodal__window} role="dialog" aria-modal="true">
                  {/* className={style.hystmodal__window} */}
                  <img
                    style={{ height: '400px', width: '500px' }}
                    src={photo}
                    alt="Изображение в окне"
                  />
                  {/* className="hystmodal__close" */}
                  <h1>{name}</h1>
                  <p>{description}</p>
                  {/* <button onClick={closeModal}>Close</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FestCard;
