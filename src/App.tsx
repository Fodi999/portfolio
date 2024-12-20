import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'pl'>('en');

  const changeLanguage = () => {
    const languages: ('en' | 'ru' | 'pl')[] = ['en', 'ru', 'pl'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const translations = {
    en: {
      navigation: ['Home', 'Recipes', 'Gallery', 'About', 'Contact'],
      title: 'SUSHI MASTER',
      subtitle: 'DIMA FOMIN',
      description: 'Discover the art of sushi through our online school.',
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
      navigation: ['Главная', 'Рецепты', 'Галерея', 'О нас', 'Контакты'],
      title: 'СУШИ МАСТЕР',
      subtitle: 'ДИМА ФОМИН',
      description: 'Познайте искусство суши через нашу онлайн-школу.',
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
      navigation: ['Strona główna', 'Przepisy', 'Galeria', 'O nas', 'Kontakt'],
      title: 'MISTRZ SUSHI',
      subtitle: 'DIMA FOMIN',
      description: 'Poznaj sztukę sushi dzięki naszej szkole online.',
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

  const lessonImages = ['/001.jpg', '/002.jpg', '/003.jpg', '/004.jpg', '/005.jpg'];

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src="/IMG_7211.PNG" alt="Chef Logo" className="logo-image" />
        </div>
        <h1 className="header-title">Sushi Master</h1>
        <div className="language-selector">
          <button onClick={changeLanguage}>{language.toUpperCase()}</button>
        </div>
      </header>

      <main className="main-content">
        <section className="threads-style">
          <h2 className="threads-header">Welcome to Sushi Master</h2>
          <p className="threads-description">{currentText.description}</p>
          {currentText.lessons.map((lesson, index) => (
            <div className="thread-item" key={index}>
              <img
                src={lessonImages[index]}
                alt={`Lesson ${index + 1}`}
                className="thread-image"
              />
              <div className="thread-content">
                <h3 className="thread-title">{lesson}</h3>
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer">
        <nav className="bottom-nav">
          {currentText.navigation.map((item, index) => (
            <button className="nav-button" key={index}>
              {item}
            </button>
          ))}
        </nav>
        <p>{currentText.footer}</p>
      </footer>
    </div>
  );
};

export default App;























