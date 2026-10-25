import { useState } from 'react';

export default function ItemForm({ onAddItem }) {
  const [nama, setNama] = useState('');
  const [kategori, setKategori] = useState('Diecast');
  const [kondisi, setKondisi] = useState('MIB');
  const [harga, setHarga] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !harga) return;

    onAddItem({
      id: Date.now(),
      nama,
      kategori,
      kondisi,
      harga: parseFloat(harga)
    });

    setNama('');
    setHarga('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#fff', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '1rem' }}>
      <h3>Tambah Koleksi Baru</h3>
      <div style={{ marginBottom: '0.5rem' }}>
        <input type="text" placeholder="Nama Barang" value={nama} onChange={(e) => setNama(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} required />
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <select value={kategori} onChange={(e) => setKategori(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
          <option value="Diecast">Diecast</option>
          <option value="Action Figure">Action Figure</option>
          <option value="Trading Card">Trading Card</option>
        </select>
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <select value={kondisi} onChange={(e) => setKondisi(e.target.value)} style={{ width: '100%', padding: '0.5rem' }}>
          <option value="MIB">MIB</option>
          <option value="Near Mint">Near Mint</option>
          <option value="Loose">Loose</option>
        </select>
      </div>
      <div style={{ marginBottom: '0.5rem' }}>
        <input type="number" placeholder="Harga Beli (Rp)" value={harga} onChange={(e) => setHarga(e.target.value)} style={{ width: '100%', padding: '0.5rem' }} required />
      </div>
      <button type="submit" style={{ background: '#2563eb', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
        Tambah Koleksi
      </button>
    </form>
  );
}