# ShopItemClass Project

## Описание
Этот проект представляет собой React-приложение, реализующее компонент `ShopItemClass`, который отображает карточку товара в соответствии с заданием. Компонент использует классовый подход и принимает объект `item` с информацией о товаре.

## Используемые технологии
- React (с использованием классовых компонентов)
- CSS для стилизации
- Yarn для управления зависимостями
- Vite для быстрой сборки и разработки

## Установка и запуск проекта

### 1. Клонирование репозитория
```sh
git clone <репозиторий>
cd <папка_проекта>
```

### 2. Установка зависимостей
```sh
yarn install
```

### 3. Запуск проекта в режиме разработки
```sh
yarn dev
```

### 4. Сборка проекта для продакшена
```sh
yarn build
```

## Структура проекта
```
/src
  ├── assets/             # Изображения товаров
  ├── components/         # Компоненты приложения
  │     ├── ShopItemClass.jsx  # Классовый компонент
  ├── App.jsx             # Основной компонент приложения
  ├── main.jsx            # Точка входа
  ├── App.css            # Стили проекта     # Основные стили
  ├── index.css           # Глобальные стили
  ├── index.html          # Шаблон HTML
```

## Компонент `ShopItemClass`
Компонент `ShopItemClass` получает `props.item`, содержащий информацию о товаре:

```js
const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard Coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: "Men's minimalistic overcoat in cotton-blend. Features a stand-up collar...",
  price: 399,
  currency: '£'
};
```

### Основная структура JSX:
```jsx
<div className="main-content">
  <div className="product-details">
    <h2>{item.brand}</h2>
    <h1>{item.title}</h1>
    <h3>{item.description}</h3>
    <div className="description">{item.descriptionFull}</div>
    <div className="divider"></div>
    <div className="purchase-info">
      <div className="price">{item.currency}{item.price.toFixed(2)}</div>
      <button>Добавить в корзину</button>
    </div>
  </div>
</div>
```

## Особенности
- Стили загружаются из `App.css`.
- Кнопки управления изображением отсутствуют, но можно расширить функционал для карусели.

## Авторы
Разработано в рамках учебного проекта. 😉

