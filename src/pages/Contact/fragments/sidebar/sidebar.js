import './styles.css';

function Sidebar() {
  let data = "ini adalah isi kontak";
  return(
    <div>
    <h1 className="sidebar-wrapper ">Daftar Berita Tarbaru</h1>
    <p>{data}</p>
    </div>

  );
}

export default Sidebar;