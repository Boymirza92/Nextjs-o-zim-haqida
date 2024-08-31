import "../component.css";
import st from "./page.module.css";
export default function Qiziqishlarim() {
  return (
    <div className="qiziqishim">
      <h1 className="qiziqishlarim" style={{ textAlign: "center" }}>
        Qiziqishlarim
      </h1>
      <p className={st.text}>
        Men bo'sh vaqtimda: kitob o'qishni, fudbo'l o'ynashni, temirdan turli
        xil narsalarni yasashga qiziqaman. Va men har zamonda osh ham damlab
        turaman.
      </p>
    </div>
  );
}
