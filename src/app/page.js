'use client';

import styles from "./page.module.css";
import Categories from '@/components/Categories'
import { useState } from 'react';
import Card from "@/components/Card";
import { filterProducts, searchProducts } from "@/Service";
import Search from "@/components/Search";


export default function Home() {

  const [btnClicked, setBtnClicked] = useState('Entradas');
  const [srchdTxt, setSrchdTxt] = useState('');
  const [List, setList] = useState(filterProducts('Entradas'));

  const handleFilter = (category) => {
    setList(filterProducts(category));
    setBtnClicked(category);
    setSrchdTxt('');
  };

  const handleSearch = (typedText) => {
    setSrchdTxt(typedText);
    if (typedText.selectedBtn > 2) {
      setList(searchProducts(typedText));
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.banner}>

      </section>

      <main className={styles.main}>
        <Categories
          onClickEntradas={() => handleFilter('Entradas')}
          onClickMassa={() => handleFilter('Massa')}
          onClickCarne={() => handleFilter('Carne')}
          onClickBebidas={() => handleFilter('Bebidas')}
          onClickSalada={() => handleFilter('Salada')}
          onClickSobremesa={() => handleFilter('Sobremesa')}
          selectedBtn={btnClicked}
        />

        <Search
          onChange={(event) => handleSearch(event.target.value)}
          value={srchdTxt}
        />

        <section className={styles.foodMenu}>
          <h2>Cardápio</h2>
          <div className={styles.cards}>
            {List.map((product) => (
              <Card
                key={product.id}
                name={product.name}
                image={product.image}
                category={product.category}
                descripition={product.description}
                price={product.price}
                length={product.length}
              />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}