import { CSSProperties } from "react";
import styles from "./Loader.module.css";

type LoaderCSSVars = CSSProperties & {
  "--size"?: string;
  "--dot-size"?: string;
  "--dot-count"?: number;
  "--color"?: string;
  "--speed"?: string;
  "--spread"?: string;
  "--i"?: number;
};

export default function Loader() {
  const loaderStyle: LoaderCSSVars = {
    "--size": "64px",
    "--dot-size": "6px",
    "--dot-count": 6,
    "--color": "#fff",
    "--speed": "1s",
    "--spread": "60deg",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className={styles.dots} style={loaderStyle}>
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={styles.dot}
            style={{ "--i": i } as LoaderCSSVars}
          />
        ))}
      </div>
    </div>
  );
}
