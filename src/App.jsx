import { useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, nama: 'Nissan Skyline GT-R R34', kategori: 'Diecast', kondisi: 'MIB', harga: 250000 },
    { id: 2, nama: 'SHFiguarts Son Goku', kategori: 'Action Figure', kondisi: 'Loose', harga: 750000 }
  ]);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalValue = items.reduce((acc, curr) => acc + curr.harga, 0);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header />
      <main style={{ padding: '1rem' }}>
        <Summary totalItems={items.length} totalValue={totalValue} />
        <ItemForm onAddItem={handleAddItem} />
        <ItemList items={items} onDeleteItem={handleDeleteItem} />
      </main>
    </div>
  );
}