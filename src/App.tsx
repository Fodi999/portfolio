import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ru' | 'pl'>('en');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const translations = {
    en: {
      navigation: ['Recipes', 'Gallery', 'About', 'Contact'],
      title: 'SUSHI MASTER',
      subtitle: 'DIMA FOMIN',
      description: 'Online school for learning product skills.',
      lessons: [
        '01 First Lesson: Create a Menu, Visualization of Serving',
        '02 Second Lesson: Choosing Products',
        '03 Third Lesson: Cutting and Preparation',
        '04 Fourth Lesson: Cooking Techniques',
        '05 Fifth Lesson: Decoration and Serving the Dish',
      ],
      footer: 'For catering call 9200 0000',
    },
    ru: {
      navigation: ['Рецепты', 'Галерея', 'О нас', 'Контакты'],
      title: 'СУШИ МАСТЕР',
      subtitle: 'ДИМА ФОМИН',
      description: 'Онлайн-школа по изучению продуктовых навыков.',
      lessons: [
        '01 Первый урок: Составить меню, визуализация подачи',
        '02 Второй урок: Выбор продуктов',
        '03 Третий урок: Разделка и подготовка',
        '04 Четвертый урок: Техника приготовления',
        '05 Пятый урок: Украшение и подача блюда',
      ],
      footer: 'Для кейтеринга звоните 9200 0000',
    },
    pl: {
      navigation: ['Przepisy', 'Galeria', 'O nas', 'Kontakt'],
      title: 'MISTRZ SUSHI',
      subtitle: 'DIMA FOMIN',
      description: 'Szkoła online do nauki umiejętności produktowych.',
      lessons: [
        '01 Pierwsza lekcja: Tworzenie menu, wizualizacja serwowania',
        '02 Druga lekcja: Wybór produktów',
        '03 Trzecia lekcja: Cięcie i przygotowanie',
        '04 Czwarta lekcja: Techniki gotowania',
        '05 Piąta lekcja: Dekorowanie i serwowanie dania',
      ],
      footer: 'Zadzwoń, aby zamówić catering: 9200 0000',
    },
  };

  const currentText = translations[language];

  return (
    <div className="container">
<header className="header">
  <div className="logo">
    <img src="/IMG_7211.PNG" alt="Chef Logo" className="logo-image" />
  </div>
  <button className="burger-menu" onClick={() => { 
    toggleMenu(); 
    console.log("Burger menu clicked, menuOpen:", menuOpen);
  }}>
    ☰
  </button>
  {menuOpen && (
    <div className="modal-overlay">
      <nav className="navigation-modal">
        <button className="close-modal" onClick={toggleMenu}>
          ←
        </button>
        <ul>
          {currentText.navigation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="language-selector-compact">
          <button onClick={() => setLanguage('en')}>EN</button>
          <button onClick={() => setLanguage('ru')}>RU</button>
          <button onClick={() => setLanguage('pl')}>PL</button>
        </div>
      </nav>
    </div>
  )}
</header>



      <main className="main-content">
        <section className="featured-post">
          <img src="/project.png" alt="Chef working" className="featured-image" />
          <h2 className="post-title">
            <span style={{ color: 'red' }}>{currentText.title}</span> {currentText.subtitle}
          </h2>
          <p className="post-description">{currentText.description}</p>
        </section>

        <section className="news-list">
          {currentText.lessons.map((lesson, index) => (
            <div className="news-item" key={index}>
              <h3 className="news-title">{lesson}</h3>
            </div>
          ))}
        </section>

        <aside className="instagram-feed">
          <div className="instagram-item">
            <img src="/001.jpg" alt="Instagram Photo 1" />
          </div>
          <div className="instagram-item">
            <img src="/002.jpg" alt="Instagram Photo 2" />
          </div>
          <div className="instagram-item">
            <img src="/003.jpg" alt="Instagram Photo 3" />
          </div>
          <div className="instagram-item">
            <img src="/004.jpg" alt="Instagram Photo 4" />
          </div>
          <div className="instagram-item">
            <img src="/005.jpg" alt="Instagram Photo 5" />
          </div>
        </aside>
      </main>

      <footer className="footer">
        <p>{currentText.footer}</p>
      </footer>
    </div>
  );
};

export default App;















