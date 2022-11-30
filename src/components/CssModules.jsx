/**
 * CSSに当てる方法2： CSSファイルをModule化してimportする方法（CSS Module）
 */

//変数に割り当てる
import classes from "./CssModules.module.scss";
export const CssModules = () => {
  return (
    // Reactのclass属性は`className`なので注意
    // スコープが限られているので、他のCSS Moduleで同じクラス名があっても上書きされることがない
    <div className={classes.container}>
      <p className={classes.title}>CSS Modules</p>
      <button type="button" className={classes.button}>
        Fight!!!!
      </button>
    </div>
  );
};
