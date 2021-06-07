import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Test h1 with link Theteabox.es <a href="https://theteabox.es">Link</a>
        </h1>

        <p className={styles.description}>
Es muy importante cuando elegimos trajes de novio que identifiques tu personalidad para saber que estilo te gustaría plasmar en tu outfit de boda.
La elección de los complementos dependerá del estilo de traje que elijas, entre los accesorios encontrarás la corbata, la pajarita, el boutonniere, los calcetines, el cinturón, el reloj, y las mancuernillas.
En cuanto tengas todos tus accesorios, llévalos contigo a la prueba de vestuario para asegurarte de que cada pieza combine a la perfección. Trata de prepararlo con tiempo por si tienes que hacer algún cambio.
Si quieres conocer las distintas opciones que hay en la moda de trajes para hombre de casamiento, más adelante encontrarás información detallada de cada tipo para ayudarte a tener una idea más clara de que tipo de traje te gustaría llevar para lucir impecable en tu gran día. Si quieres ir ahora a la guía click <AQUI>
          </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

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

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
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
