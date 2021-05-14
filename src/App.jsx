import songFetcher from "./modules/song-fetcher";
import songParser from "./modules/song-parser";

import Notes from "./views/notes";
import SongTable from "./views/song-table";
import Header from "./views/components/header";
import Footer from "./views/components/footer";


function App() {
  return (
    <>
      <Header />

      <div id="content" class="container mt-3">
        <SongTable id="songs" fetch={songFetcher} parser={songParser} />
        <Notes id="notes" class="d-none" />
      </div>

      <Footer />
    </>
  );
}


export default App;
