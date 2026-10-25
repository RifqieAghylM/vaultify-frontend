import ItemCard from './ItemCard';

export default function ItemList({ items, onDeleteItem }) {
  if (items.length === 0) {
    return <p style={{ fontStyle: 'italic', color: '#64748b' }}>Belum ada data koleksi</p>;
  }

  return (
    <div>
      <h3>Daftar Koleksi</h3>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onDelete={onDeleteItem} />
      ))}
    </div>
  );
}