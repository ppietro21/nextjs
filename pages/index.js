import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Los mejores links de páginas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Links de los mejores links de páginas
        </h1>

        <p className={styles.description}>
Es muy importante cuando elegimos trajes de novio que identifiques tu personalidad para saber que estilo te gustaría plasmar en tu outfit de boda.
La elección de los complementos dependerá del estilo de traje que elijas, entre los accesorios encontrarás la corbata, la pajarita, el boutonniere, los calcetines, el cinturón, el reloj, y las mancuernillas.
En cuanto tengas todos tus accesorios, llévalos contigo a la prueba de vestuario para asegurarte de que cada pieza combine a la perfección. Trata de prepararlo con tiempo por si tienes que hacer algún cambio.
Si quieres conocer las distintas opciones que hay en la moda de trajes para hombre de casamiento, más adelante encontrarás información detallada de cada tipo para ayudarte a tener una idea más clara de que tipo de traje te gustaría llevar para lucir impecable en tu gran día. Si quieres ir ahora a la guía click
          </p>

        <div className={styles.grid}>
          <a href="https://trajesdenovio.mx/" className={styles.card}>
            <h2>Trajes de novio México</h2>
            <p>Los mejores trajes de novio en México</p>
          </a>

          <a href="https://kalbelia.com" className={styles.card}>
            <h2>Artesanias Mexicanas</h2>
            <p>Las mejores artesanias de México</p>
          </a>

          <a href="https://vermut.com.es" className={styles.card}>
            <h2>Vermut España</h2>
            <p>Los mejores Vermut de España</p>
          </a>
          <a href="https://depinatas.com" className={styles.card}>
            <h2>Piñatas México</h2>
            <p>Compro o arma tus piñatas</p>
          </a>
          <a href="https://artehuichol.com.mx" className={styles.card}>
            <h2>Lo mejor del arte Huichol;</h2>
            <p>Aprende todo sobre este arte</p>
          </a>

          <a href="https://pietropinto.uy" className={styles.card}>
            <h2>Regularización de obras</h2>
            <p>Estudio de arquitectura en Uruguay</p>
          </a>
          <a href="https://theteabox.es" className={styles.card}>
            <h2>Té e infusiones en España</h2>
            <p>Infusiones para adelgazar, energia, relajantes y mucho más</p>
          </a>
          <a href="https://deitxandco.com" className={styles.card}>
            <h2>Trajes y ropa para hombre</h2>
            <p>La mejor ropa para hombre en México</p>
          </a>
          <a href="https://rebozo.mx" className={styles.card}>
            <h2>Rebozo Mexicano</h2>
            <p>Toda la información sobre el rebozo mexicano</p>
          </a>
          <a href="https://micirugiaplastica.com.mx" className={styles.card}>
            <h2>Cirugia plastica mexico</h2>
            <p>Toda la información sobre cirugias en México</p>
          </a>
          <a href="http://pirxotscosmetics.com" className={styles.card}>
            <h2>Pirxots cosmetics</h2>
            <p>Las mejores cremas faciales en España</p>
          </a>
          <a href="http://outfits.tips" className={styles.card}>
            <h2>Outfits.tips</h2>
            <p>Los mejores tips de moda y los más originales</p>
          </a>
          <a href="https://outfits.tips/tienda/" className={styles.card}>
            <h2>Outfits.tips tienda</h2>
            <p>Los mejores tips de moda y los más originales</p>
          </a>
          <a href="https://outfits.tips/tienda-hombre/" className={styles.card}>
            <h2>Outfits.tips tienda hombre</h2>
            <p>Los mejores tips de moda y los más originales</p>
          </a>
          <a href="https://outfits.tips/e-girl-outfits/" className={styles.card}>
            <h2>Outfits.tips estilo e girl</h2>
            <p>Los mejores tips de moda y los más originales y aqui aqui</p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
