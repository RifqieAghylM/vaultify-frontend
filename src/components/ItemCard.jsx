export default function ItemCard({ item, onDelete }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', padding: '1rem', borderRadius: '8px', marginBottom: '0.5rem' }}>
      <h4>{item.nama}</h4>
      <p>Kategori: {item.kategori} | Kondisi: <strong>{item.kondisi}</strong></p>
      <p>Harga Beli: Rp {item.harga.toLocaleString('id-ID')}</p>
      <button 
        onClick={() => onDelete(item.id)} 
        style={{ background: '#ef4444', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}
      >
        Hapus
      </button>
    </div>
  );
}