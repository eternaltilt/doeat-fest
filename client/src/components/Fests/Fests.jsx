import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initFestsAC } from '../../redux/actionCreators/festsAC';
import FestCard from './FestCard/FestCard';
import style from './Fests.module.css';

function Fests() {
  const { fests } = useSelector((state) => state.fests);
  // console.log(fests);
  const dispatch = useDispatch();
  useEffect(() => {
    const rests = [
      {
        id: 1,
        name: 'St.Martin',
        description:
          'Ромовый бар St.Martin (Сен-Мартен) - многоконцептуальный проект барно-ресторанной группы Daiquiri group. Мы собрали самую большую библиотеку рома в России: в баре представленно более 300 видов этого напитка',
        photo:
          'https://cdn.images.restoclub.ru/uploads/place_thumbnail_big/5/2/5/b/525bca90cb415df8214a0116131bd3d6.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 2,
        name: 'Imbibe Cocktail Bar',
        description:
          'Почему особенный? Всё дело в атмосфере. Из колонок играют знакомые всем гитарные рифы, каждая деталь бара располагает к душевным разговорам, а приглушенный электрический свет и дрожащие огни горящих свечей расслабят вас и настроят на нужный лад.',
        photo:
          'https://assets.allcafe.ru/k/places/canvas/1920x1080/pic/places/21499/10effbe63844d59a0969861c8fe671f8.png',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 3,
        name: 'The Hat Bar',
        description:
          '«Шляпа» — самое шумное и веселое место на питейно-ресторанной улице Белинского. Почти каждый день около десяти вечера на небольшую сцену забираются студенты училища имени Мусоргского и петербургские джазовые мэтры, чтобы сообща импровизировать на классические, как правило, темы. В красивом баре, который по стилю тяготеет к американским 1950-м, нет расписания концертов, зато есть тридцать сортов односолодового виски и около дюжины марок бурбона.',
        photo:
          'https://cdn.the-village.ru/the-village.ru/post_image-image/c2XtebB0lVjolONFnhaFow-article.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 4,
        name: 'Do Immigration',
        description:
          'Винный лофт в недрах живописного петербургского двора. Бар на двух ярусах, соединённых самым настоящим мостом. Динамичная винная полка, тёплая зимой и расстеклённая летом крыша-веранда, пасты, панини, салаты и томлёные, опять же в вине, фрукты. Поднимайся в Do Immigration',
        photo:
          'https://avatars.mds.yandex.net/get-altay/1372264/2a000001635dc1de028dd4ae49f3b6493c4a/XXL',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 5,
        name: 'El Copitas',
        description:
          'Потайной бар-такерия, куда можно попасть только по звонку. Спрятан во дворе, работает без вывески и вообще каких-либо опознавательных знаков, зато признан одним из лучших баров города по мнению СМИ и общественности. Создатели — команда Must Have Bar. Специализация — авторские коктейли на мескале, текиле и роме. Из еды — острые мексиканские супы и закуски, тако с мясом, рыбой и фасолью. Крайне атмосферное место с теплой дружеской обстановкой.',
        photo:
          'https://cdn.images.restoclub.ru/uploads/place/0/0/1/8/0018da96ada299257e47020dc8cdf4be_w958_h835--big.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 6,
        name: 'BourgeoisBohemians',
        description:
          'Авторская кухня братьев Гребенщиковых, шеф-повара Артема и шеф-кондитера Алексея, в аккомпанементе терруарных вин от небольших хозяйств, подобранных сомелье Антоном Белочкиным.',
        photo:
          'https://static.wixstatic.com/media/ef09a0_171e200f71f449858a0fd85a582d226b~mv2.jpg/v1/crop/x_4,y_0,w_5343,h_3565/fill/w_1004,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Bobo-208_1.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 7,
        name: 'Harvest',
        description:
          'Флагман ресторанов команды DuoBand с кухней от бренд-шефа Дмитрия Блинова. Светлые тона интерьера, легкий фьюжн, тонкий баланс вкуса блюд и вина не оставят никого равнодушным.',
        photo: 'https://harvestduo.ru/assets/images/00.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 8,
        name: 'COCOCOUTURE',
        description:
          'С самого начала, с открытия в 2012 году, и по настоящий день ресторан неизменно верен главному принципу — работать с фермерскими и сезонными продуктами, готовить из того, что собрано, выловлено и произведено в России в определенное время года.',
        photo: 'https://cococouture.ru/uploads/gallery%202.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 9,
        name: 'Twins Garden',
        description:
          'Twins Garden — ресторан, в основе концепции которого симбиоз науки и природы. На своей кухне используют самые последние технологические разработки и продукты с собственной фермы.',
        photo: 'http://twinsgarden.ru/wp-content/uploads/2020/12/space-3-1600x1200.jpg',
        adress: 'Бульвар удовольствий',
      },
      {
        id: 10,
        name: 'Selfie',
        description:
          'Ресторан современной авторской кухни Анатолия Казакова. Находится на 65 месте среди лучших ресторанов в мире. Сезонные, локальные продукты и гастрономические эксперименты на русскую тематику с французской техникой.',
        photo: 'https://selfiemoscow.ru/assets/_PIC/interior%20gallery%20new/H68A4485.jpg',
        adress: 'Бульвар удовольствий',
      },
    ];
    dispatch(initFestsAC(rests));
  }, []);
  return (
    <div className={style.background}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <h3 className={style.text}>FEST NAME</h3>
          <p className={style.extraText}>
            Наш фестиваль расскажет обо всех тонкостях, особенностях и традициях гастрономических
            пристрастий народов этого континента.
          </p>
        </div>
        <div className={style.headerRight}>
          <h5 className={style.text}>Set price: price</h5>
          <div className={style.buttons}>
            <button className={style.buttonLeft} type="submit">
              Список
            </button>
            <button className={style.buttonRight} type="submit">
              Карта
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {fests.map((elm) => (
          <FestCard
            key={elm.id}
            // id={elm.id}
            name={elm.name}
            description={elm.description}
            photo={elm.photo}
            adress={elm.adress}
          />
        ))}
      </div>
    </div>
  );
}

export default Fests;
