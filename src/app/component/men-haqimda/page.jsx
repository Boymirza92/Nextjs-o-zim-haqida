// import "../component.css"
import st from "./page.module.css"
export default function MenHaqimda() {
  return (
    <div className="men-haqimda">
      <h1 style={{textAlign: 'center'}}>Men haqimda</h1>
      <p className={st.text}>
        Men Boymirza Vahabobov 1992 yilning 21 mart sanasida Namangan viloyati
        Mingbuloq tumanining Terak qishlog'ida ishchi oilasidan kenja farzand
        bo'lib tug'ilganman. Hozirda ikki qizib bor.
      </p>
    </div>
  );
}
