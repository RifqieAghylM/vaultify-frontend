export default function Summary({ totalItems, totalValue }) {
  return (
    <div style={{ display: 'flex', gap: '1rem', margin: '1rem 0' }}>
      <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', flex: 1 }}>
        <h3>Total Koleksi</h3>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{totalItems} Item</p>
      </div>
      <div style={{ background: '#f1f5f9', padding: '1rem', borderRadius: '8px', flex: 1 }}>
        <h3>Total Estimasi Nilai</h3>
        <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>
          Rp {totalValue.toLocaleString('id-ID')}
        </p>
      </div>
    </div>
  );
}