import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div
        className={styles.dots}
        style={{
          ["--size" as any]: "64px",
          ["--dot-size" as any]: "6px",
          ["--dot-count" as any]: 6,
          ["--color" as any]: "#fff",
          ["--speed" as any]: "1s",
          ["--spread" as any]: "60deg",
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className={styles.dot} style={{ ["--i" as any]: i }} />
        ))}
      </div>
    </div>
  );
}