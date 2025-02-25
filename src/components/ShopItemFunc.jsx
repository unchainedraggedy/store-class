import React, { Component } from 'react';

class ShopItemClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0 // Начнем с первого изображения
    };
  }

  nextImage = () => {
    const { images } = this.props.item;
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex + 1) % images.length
    }));
  };

  prevImage = () => {
    const { images } = this.props.item;
    this.setState(prevState => ({
      currentImageIndex: (prevState.currentImageIndex - 1 + images.length) % images.length
    }));
  };

  render() {
    const { item } = this.props;
    const { currentImageIndex } = this.state;

    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">{item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}

export default ShopItemClass;
