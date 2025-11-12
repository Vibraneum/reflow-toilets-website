import styles from './ConceptVideos.module.css'

export default function ConceptVideos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Watch ReFlow Concept Videos →
        </h2>

        <div className={styles.videosGrid}>
          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/t3skIyHT7Kk"
                title="ReFlow Concept Video 1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>

          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/Lkxgtml5_4s"
                title="ReFlow Concept Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
